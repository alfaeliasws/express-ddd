import BookEntity from "../../domain/Books/BookEntity"

export default interface IBookWriteRepository {
    borrow(record: BookEntity): Promise<BookEntity>
    return(record: BookEntity): Promise<BookEntity>
}