import BookEntity from "../../domain/Books/BookEntity";

export default interface IBookReadOnlyRepository {
    // fetch(book: BookEntity): Promise<BookEntity>
    fetch(book: BookEntity): any,
    fetchAll(): Promise<BookEntity[]>
}