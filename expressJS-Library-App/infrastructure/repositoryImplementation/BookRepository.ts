import IBookReadOnlyRepository from "../../application/repositories/IBookReadOnlyRepository";
import IBookWriteRepository from "../../application/repositories/IBookWriteRepository";
import BookEntity from "../../domain/Books/BookEntity";
import query from "../config/db";
import emptyOrRows from "../config/helper";

export default class BookRepository implements IBookReadOnlyRepository, IBookWriteRepository {
    
    async reduceStock(book: BookEntity): Promise<void> {

        await query(`UPDATE books SET stock = stock - 1, updated_at=NOW() WHERE code =  ?;`, [book.bookCode])
        return    

    }

    async restoreStock(book: BookEntity): Promise<void> {

        await query(`UPDATE books SET stock = stock + 1, updated_at=NOW() WHERE code =  ?;`, [book.bookCode])
        return    

    }

    async borrow(book: BookEntity): Promise<BookEntity> {

        this.reduceStock(book);
        return this.fetch(book)

    }

    async return(book: BookEntity): Promise<BookEntity> {

        this.restoreStock(book);
        return this.fetch(book)

    }

    async fetch(book: BookEntity): Promise<BookEntity> {
        
        let queryExecute = await query(`SELECT * FROM books WHERE code =  ?`,[ book.bookCode ])
        let queryResult = emptyOrRows(queryExecute);
        let result = queryResult[0]

        return new BookEntity(result.code, result.title, result.author, result.stock, result.created_at)
    }

    async fetchAll(): Promise<BookEntity[]> {
        
        let queryExecute = await query(`SELECT * FROM books`,[])
        let queryResult = emptyOrRows(queryExecute);
        let result = queryResult

        return result
    }

}