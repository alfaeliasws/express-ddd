import RecordEntity from "../../domain/Borrows/RecordEntity"

export default interface IRecordWriteRepository {
    post(record: RecordEntity): Promise<RecordEntity>
    update(record: RecordEntity): Promise<RecordEntity>
}