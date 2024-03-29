import RecordEntity from "../../domain/Borrows/RecordEntity";

export default interface IRecordReadOnlyRepository {
    fetch(record: RecordEntity): Promise<RecordEntity>
}