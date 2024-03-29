import BookEntity from "../../domain/Books/BookEntity";
import RecordEntity from "../../domain/Borrows/RecordEntity";
import MemberEntity from "../../domain/Members/MemberEntity";

export default interface IRestrictionReadOnlyRepository {
    checkBorrowLimit(member: MemberEntity): Promise<{success: boolean, message: string}>
    checkPenalty(member: MemberEntity): Promise<{success: boolean, message: string}>
    checkPenaltyReturn(member: MemberEntity): Promise<{success: boolean, message: string}>
    checkStockLimit(book: BookEntity): Promise<{success: boolean, message: string}>
    checkIfIdReturned(record: RecordEntity): Promise<{success: boolean, message: string}>
}