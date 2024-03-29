import BookEntity from "../../domain/Books/BookEntity";
import MemberEntity from "../../domain/Members/MemberEntity";
import IBookDto from "../dataTransferObject/IBookDto";
import IMemberDto from "../dataTransferObject/IMemberDto";
import IRecordDto from "../dataTransferObject/IRecordDto";
import IRestrictionReadOnlyRepository from "../repositories/IRestrictionReadOnlyRepository";

export type returnSuccess = {
    Book: IBookDto,
    Member: IMemberDto,
    Record: IRecordDto,
    Message: string
}

export type returnFailed = {
    Message: string
}

export default interface IReturnUseCase {
    return(BookDto: IBookDto, MemberDto: IMemberDto, RecordDto: IRecordDto): Promise<returnSuccess | returnFailed>

    // checkToReturnRules(member:MemberEntity, book:BookEntity, restriction: IRestrictionReadOnlyRepository): Promise<{success: boolean, message: string}>


}