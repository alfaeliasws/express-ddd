import IMemberCheckAggregate from "../dataTransferObject/IMemberCheckAggregate";

export type getAllMemberSuccess = {
    Member: IMemberCheckAggregate[],
    Message: string
}

export type getAllMemberFailed = {
    Message: string
}

export default interface IMemberCheckUseCase {
    getAllMemberAggregate(): Promise <getAllMemberSuccess | getAllMemberFailed> 
}