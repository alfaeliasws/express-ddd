import MemberEntity from "../../domain/Members/MemberEntity";
import RestrictionEntity from "../../domain/Rules/RestrictionEntity";

export default interface IRestrictionWriteRepository {
    postBorrowLimit(member: MemberEntity): Promise<void>
    // postPenalty(member: MemberEntity): Promise<void>
    update(member: MemberEntity): Promise<{success: boolean, message: string}>
}