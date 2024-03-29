import BookEntity from "../../../domain/Books/BookEntity";
import RecordEntity from "../../../domain/Borrows/RecordEntity";
import MemberEntity from "../../../domain/Members/MemberEntity";
import IBookDto from "../../dataTransferObject/IBookDto";
import IMemberDto from "../../dataTransferObject/IMemberDto";
import IRecordDto from "../../dataTransferObject/IRecordDto";
import IBookWriteRepository from "../../repositories/IBookWriteRepository";
import IMemberReadOnlyRepository from "../../repositories/IMemberReadOnlyRepository";
import IRecordWriteRepository from "../../repositories/IRecordWriteRepository";
import IRestrictionReadOnlyRepository from "../../repositories/IRestrictionReadOnlyRepository";
import IReturnUseCase, { returnFailed, returnSuccess } from "../IReturnUseCase";

export default class ReturnUseCase implements IReturnUseCase {
    
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

    public async return(BookDto: IBookDto, MemberDto: IMemberDto, RecordDto: IRecordDto): Promise<returnSuccess
     | returnFailed> {
        let member = new MemberEntity(MemberDto.memberCode, MemberDto.memberName)
        let book = new BookEntity(BookDto.bookCode, BookDto.bookTitle, BookDto.bookAuthor, BookDto.bookStock)
        let record = new RecordEntity(RecordDto.id, book.bookCode, member.memberCode)
        
        member = await this.memberReadOnlyRepository.fetch(member);
        let message = ''

        const checkRestriction = await this.checkPenaltyReturn(member, record, this.restrictionReadRepository)

        if(!checkRestriction.success){
            return {Message: checkRestriction.message}
        }

        if(checkRestriction.message.includes("3 Days")){
            message = checkRestriction.message
        }
        
        book = await this.bookWriteRepository.return(book);
        record = await this.recordWriteRepository.update(record)

        const foundBookDto = book, foundMemberDto = member, foundRecordDto = record;

        return {
            Book: foundBookDto,
            Member: foundMemberDto,
            Record: foundRecordDto,
            Message: message ?? `Member ${foundMemberDto.memberName} Successfully Returns ${foundBookDto.bookTitle}`
        }

    }
    
    public async checkPenaltyReturn(member: MemberEntity, record: RecordEntity, restriction: IRestrictionReadOnlyRepository): Promise<{success: boolean, message: string}> {
        let success = false;
        let message = `Member ${member.memberName} Could Not Return The Book`

        const checkIfIdReturned = await restriction.checkIfIdReturned(record)
    
        if(!checkIfIdReturned.success){
            return {success: success, message: `${message} - ${checkIfIdReturned.message}`}
        }

        const checkPenalty = await restriction.checkPenaltyReturn(member);

        if(!checkPenalty.success){
            return {success: true, message: `Book Returned With Penalty - ${checkPenalty.message}`}
        }

        return {success: true, message:"Success"}
    }

}