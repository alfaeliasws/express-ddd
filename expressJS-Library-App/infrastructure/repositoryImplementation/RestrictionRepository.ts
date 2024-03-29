import IRestrictionReadOnlyRepository from "../../application/repositories/IRestrictionReadOnlyRepository";
import IRestrictionWriteRepository from "../../application/repositories/IRestrictionWriteRepository";
import BookEntity from "../../domain/Books/BookEntity";
import RecordEntity from "../../domain/Borrows/RecordEntity";
import MemberEntity from "../../domain/Members/MemberEntity";
import query from "../config/db";
import emptyOrRows from "../config/helper";
import BookRepository from "./BookRepository";

export default class RestrictionRepository implements IRestrictionReadOnlyRepository, IRestrictionWriteRepository {

    async postBorrowLimit(member: MemberEntity): Promise<void> {
        await query(`INSERT INTO restrictions (member_code, type, start_date) VALUES (?,?,?);`,[ member.memberCode, "borrow_limit_restriction" ,"CURDATE()" ])

        return
    }

    async postPenalty(member: MemberEntity): Promise<void> {
        await query(`INSERT INTO restrictions (member_code, type, end_date) VALUES (?,?,DATE_ADD(NOW(), INTERVAL 3 DAY));`,[ member.memberCode, "penalty_restriction"])

        return
    }

    async removeBorrowLimit(member: MemberEntity): Promise<void> {
        await query(`UPDATE restrictions SET end_date = NOW() WHERE member_code = ? AND end_date IS NULL AND type="borrow_limit_restriction";`,[ member.memberCode ])

        return
    }

    update(member: MemberEntity): Promise<{success: boolean, message: string}> {    
        throw new Error("Method not implemented.");
    }

    async checkStockLimit(book: BookEntity): Promise<{success: boolean, message: string}> {
        let queryExecute = await query(`SELECT stock FROM books WHERE code =  ? AND deleted_at IS NULL;`,[ book.bookCode])
        let queryResult = emptyOrRows(queryExecute);
        let result = queryResult[0].stock

        if(result < 1){
            return {success: false, message: "Stock Is Empty"}
        }

        return {success: true, message: "Book Available"}
    }

    async checkIfIdReturned(record: RecordEntity): Promise<{success: boolean, message: string}> {
        let queryExecute = await query(`SELECT returned_at FROM records WHERE id =  ? AND deleted_at IS NULL;`,[ record.id])

        if(!queryExecute){
            return {success: false, message: "Some Data Are Undefined"}
        }

        let queryResult = emptyOrRows(queryExecute);
        let result = queryResult[0].returned_at

        if(result !== "NULL" && result !== null){
            return {success: false, message: "This Borrow Record Has Already Been Returned"}
        }

        return {success: true, message: "Record Available, Book Returned"}
    }


    async checkBorrowLimit(member: MemberEntity): Promise<{success: boolean, message: string}> {
        let queryExecute = await query(`SELECT COUNT(member_code) as count FROM records WHERE member_code =  ? AND deleted_at IS NULL AND returned_at IS NULL;`,[ member.memberCode ])
        let queryResult = emptyOrRows(queryExecute);
        let resultRecord = queryResult[0].count

        if(resultRecord < 2){
            this.removeBorrowLimit(member)
        }

        queryExecute = await query(`SELECT COUNT(member_code) as count FROM restrictions WHERE member_code =  ? AND end_date IS NULL AND type="borrow_limit_restriction";`,[ member.memberCode ])
        queryResult = emptyOrRows(queryExecute);
        let result = queryResult[0].count

        if(result > 0){
            return {success: false, message: "Borrow Limit Restriction Detected"}
        }

        if(resultRecord === 2){
            this.postBorrowLimit(member)
        }
        
        if(resultRecord > 1 ){
            return {success: false, message: "Borrow Limit Reached In Book Record"}
        }

        return {success: true, message: "Member Clear Of Borrow Limit Restriction"}
    }

    async checkPenalty(member: MemberEntity): Promise<{success: boolean, message: string}> {

        let queryExecute = await query(`SELECT COUNT(member_code) as count FROM restrictions WHERE member_code =  ? AND NOW() < end_date AND type="penalty_restriction";`,[ member.memberCode])
        let queryResult = emptyOrRows(queryExecute);
        let result = queryResult[0].count

        if(result > 0){
            return {success: false, message: "Penalty Restriction Detected"}
        }

        return {success: true, message: "Member Clear Of Borrow Limit Restriction"}
    }

    async checkPenaltyReturn(member: MemberEntity): Promise<{success: boolean, message: string}> {
        let queryExecute = await query(`SELECT COUNT(member_code) as count FROM records WHERE member_code =  ? AND CURDATE() > DATE_ADD(borrowed_at, INTERVAL 7 DAY) AND deleted_at IS NULL AND returned_at IS NULL;`,[member.memberCode])
        let queryResult = emptyOrRows(queryExecute);
        let result = queryResult[0].count

        if(result > 0 ){
            this.postPenalty(member)
            return {success: false, message: "Penalty Given 3 Days Borrow Restriction"}
        }

        return {success: true, message: "Member Clear Of Borrow Limit Restriction"}
    }

}