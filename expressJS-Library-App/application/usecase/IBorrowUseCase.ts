import IBookDto from "../dataTransferObject/IBookDto";
import IMemberDto from "../dataTransferObject/IMemberDto";
import IRecordDto from "../dataTransferObject/IRecordDto";
import IRestrictionReadOnlyRepository from "../repositories/IRestrictionReadOnlyRepository";

export type borrowSuccess = {
    Book: IBookDto,
    Member: IMemberDto,
    Record: IRecordDto,
    Message: string
}

export type borrowFailed = {
    Message: string
}

export default interface IBorrowUseCase {
    borrow(BookDto: IBookDto, MemberDto: IMemberDto): Promise<borrowSuccess | borrowFailed>  

    checkMemberBorrowLimitRestriction(MemberDto: IMemberDto, restrictionRepository: IRestrictionReadOnlyRepository): any
    
    checkMemberPenaltyRestriction(MemberDto: IMemberDto, restrictionRepository: IRestrictionReadOnlyRepository): any

}