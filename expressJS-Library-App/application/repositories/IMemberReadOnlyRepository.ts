import MemberEntity from "../../domain/Members/MemberEntity";
import IMemberCheckAggregate from "../dataTransferObject/IMemberCheckAggregate";

export default interface IMemberReadOnlyRepository {
    fetch(member: MemberEntity): Promise<MemberEntity>
    fetchAll(): Promise<IMemberCheckAggregate[]>
}