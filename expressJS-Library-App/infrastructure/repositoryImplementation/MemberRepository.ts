import IMemberCheckAggregate from "../../application/dataTransferObject/IMemberCheckAggregate";
import IMemberReadOnlyRepository from "../../application/repositories/IMemberReadOnlyRepository";
import MemberEntity from "../../domain/Members/MemberEntity";
import query from "../config/db";
import emptyOrRows from "../config/helper";

export default class MemberRepository implements IMemberReadOnlyRepository {
    
    async fetchAll(): Promise<IMemberCheckAggregate[]> {
        let queryExecute = await query(`SELECT m.*, IFNULL(SUM(r.borrowedBook), 0) AS borrowedBook FROM members m LEFT JOIN ( SELECT rec.member_code, COUNT(rec.member_code) AS borrowedBook FROM records rec WHERE rec.deleted_at IS NULL AND rec.returned_at IS NULL GROUP BY rec.member_code ) r ON r.member_code = m.code GROUP BY m.code;`,[])
        let queryResult = emptyOrRows(queryExecute);
        let result = queryResult

        return result
    }

    async fetch(member: MemberEntity): Promise<MemberEntity> {
        let queryExecute = await query(`SELECT * FROM members WHERE code =  ? AND deleted_at IS NULL`,[ member.memberCode])
        let queryResult = emptyOrRows(queryExecute);
        let result = queryResult[0]

        return new MemberEntity(result.code, result.name, result.created_at)

    }

}