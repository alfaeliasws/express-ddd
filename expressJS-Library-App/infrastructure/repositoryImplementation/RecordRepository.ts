import IRecordReadOnlyRepository from "../../application/repositories/IRecordReadOnlyRepository";
import IRecordWriteRepository from "../../application/repositories/IRecordWriteRepository";
import RecordEntity from "../../domain/Borrows/RecordEntity";
import query from "../config/db";

export default class RecordRepository implements IRecordReadOnlyRepository, IRecordWriteRepository {

    async post(record: RecordEntity): Promise<RecordEntity> {
        let queryExecute = await query(`INSERT INTO records (book_code, member_code, borrowed_at) VALUES (?,?,NOW());`,[ record.bookCode, record.memberCode])
        let insertId = Object.assign(queryExecute).insertId;

        return new RecordEntity(insertId, record.bookCode, record.memberCode)
    }
    
    async update(record: RecordEntity): Promise<RecordEntity> {
        let queryExecute = await query(`UPDATE records SET returned_at = NOW() WHERE id = ?;`,[ record.id ])
        let insertId = Object.assign(queryExecute).insertId;

        return new RecordEntity(insertId, record.bookCode, record.memberCode)
    }
    
    fetch(record: RecordEntity): Promise<RecordEntity> {
        throw new Error("Method not implemented.");
    }

}