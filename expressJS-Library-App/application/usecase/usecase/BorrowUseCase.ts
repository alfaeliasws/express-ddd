import BookEntity from "../../../domain/Books/BookEntity";
import RecordEntity from "../../../domain/Borrows/RecordEntity";
import MemberEntity from "../../../domain/Members/MemberEntity";
import IBookDto from "../../dataTransferObject/IBookDto";
import IMemberDto from "../../dataTransferObject/IMemberDto";
import IBookWriteRepository from "../../repositories/IBookWriteRepository";
import IMemberReadOnlyRepository from "../../repositories/IMemberReadOnlyRepository";
import IRecordWriteRepository from "../../repositories/IRecordWriteRepository";
import IRestrictionReadOnlyRepository from "../../repositories/IRestrictionReadOnlyRepository";
import IBorrowUseCase, { borrowFailed, borrowSuccess } from "../IBorrowUseCase";

export default class BorrowUseCase implements IBorrowUseCase {
    
    private memberReadOnlyRepository: IMemberReadOnlyRepository;

    private recordWriteRepository: IRecordWriteRepository;

    private bookWriteRepository: IBookWriteRepository;

    private restrictionReadRepository: IRestrictionReadOnlyRepository;

    constructor(bookWriteRepository: IBookWriteRepository, memberReadOnlyRepository: IMemberReadOnlyRepository, recordWriteRepository: IRecordWriteRepository, restrictionRepository: IRestrictionReadOnlyRepository){
        this.memberReadOnlyRepository = memberReadOnlyRepository
        this.bookWriteRepository = bookWriteRepository
        this.recordWriteRepository = recordWriteRepository
        this.restrictionReadRepository = restrictionRepository

    }

    public async borrow(BookDto: IBookDto, MemberDto: IMemberDto): Promise<borrowSuccess | borrowFailed> {
        let member = new MemberEntity(MemberDto.memberCode, MemberDto.memberName)
        let book = new BookEntity(BookDto.bookCode, BookDto.bookTitle, BookDto.bookAuthor, BookDto.bookStock)
        
        member = await this.memberReadOnlyRepository.fetch(member);

        const checkRestriction = await this.checkRestriction(member, book, this.restrictionReadRepository)

        if(!checkRestriction.success){
            return {Message: checkRestriction.message}
        }

        let record = new RecordEntity("", book.bookCode, member.memberCode)
        
        book = await this.bookWriteRepository.borrow(book);
        
        record = await this.recordWriteRepository.post(record)

        const foundBookDto = book, foundMemberDto = member, foundRecordDto = record;
        
        console.log({book, member, record})

        return {
            Book: foundBookDto,
            Member: foundMemberDto,
            Record: foundRecordDto,
            Message: `Member ${foundMemberDto.memberName} Successfully Borrows ${foundBookDto.bookTitle}`
        }

    }

    public async checkRestriction(member:MemberEntity, book:BookEntity, restriction: IRestrictionReadOnlyRepository): Promise<{success: boolean, message: string}>  {
        
        const checkLimitRestriction = await this.checkStockLimitRestriction(book, restriction)
        
        if(!checkLimitRestriction.success){
            return checkLimitRestriction
        }

        const checkMemberBorrowLimitRestriction = await this.checkMemberBorrowLimitRestriction(member, restriction)
        
        if(!checkMemberBorrowLimitRestriction.success){
            return checkMemberBorrowLimitRestriction
        }
        
        const checkMemberPenaltyRestriction = await this.checkMemberPenaltyRestriction(member, restriction)

        if(!checkMemberPenaltyRestriction.success){
            return checkMemberPenaltyRestriction
        }

        return {success: true, message:"Success"}

    }
    
    public async checkMemberBorrowLimitRestriction(member: MemberEntity, restriction: IRestrictionReadOnlyRepository): Promise<{success: boolean, message: string}> {

        let success = false;
        let message = `Member ${member.memberName} Has Borrowed 2 Books`

        const checkBorrowLimit = await restriction.checkBorrowLimit(member);

        if(!checkBorrowLimit.success){
            return {success: success, message: `${message} - ${checkBorrowLimit.message}`}
        }

        return {success: true, message:"Success"}
    }

    public async checkStockLimitRestriction(book: BookEntity, restriction: IRestrictionReadOnlyRepository): Promise<{success: boolean, message: string}> {

        let success = false;
        let message = `Book ${book.bookTitle} Stock Is Empty`

        const checkStockLimit = await restriction.checkStockLimit(book);

        if(!checkStockLimit.success){
            return {success: success, message: `${message} - ${checkStockLimit.message}`}
        }

        return {success: true, message:"Success"}
    }
    
    public async checkMemberPenaltyRestriction(member: MemberEntity, restriction: IRestrictionReadOnlyRepository): Promise<{success: boolean, message: string}> {
        let success = false;
        let message = `Member ${member.memberName} Is Suspended Due To Penalty`
    
        const checkPenalty = await restriction.checkPenalty(member);

        if(!checkPenalty.success){
            return {success: success, message: `${message} - ${checkPenalty.message}`}
        }

        return {success: true, message:"Success"}
    }

}