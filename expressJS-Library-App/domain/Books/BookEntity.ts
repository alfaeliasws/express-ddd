type bookEntityType = {}

export default class BookEntity {
    
    bookCode: string;
    
    public get getBookCode() : string {
        return this.bookCode
    }

    public set setBookCode(string: string) {
        this.bookCode = string
    }
    
    bookTitle: string;
    
    public get getBookTitle() : string {
        return this.bookTitle
    }

    public set setBookTitle(string: string) {
        this.bookTitle = string
    }

    bookAuthor: string;
    
    public get getBookAuthor() : string {
        return this.bookAuthor
    }

    public set setBookAuthor(string: string) {
        this.bookAuthor = string
    }

    bookStock: Number;
    
    public get getBookStock() : Number {
        return this.bookStock
    }

    public set setBookStock(Number: Number) {
        this.bookStock = Number
    }

    bookCreatedAt: string;
    
    public get getBookCreatedAt() : string {
        return this.bookCreatedAt
    }

    public set setBookCreatedAt(string: string) {
        this.bookCreatedAt = string
    }

    bookUpdatedAt: string;
    
    public get getBookUpdatedAt() : string {
        return this.bookUpdatedAt
    }

    public set setBookUpdatedAt(string: string) {
        this.bookUpdatedAt = string
    }

    bookDeletedAt: string;
    
    public get getBookDeletedAt() : string {
        return this.bookDeletedAt
    }

    public set setBookDeletedAt(string: string) {
        this.bookDeletedAt = string
    }

    constructor(
        bookCode: string,
        bookTitle: string,
        bookAuthor: string,
        bookStock: Number,
        bookCreatedAt: string = "",
        bookUpdatedAt: string = "",
        bookDeletedAt: string = ""
    ){
        this.bookCode = bookCode
        this.bookTitle = bookTitle
        this.bookAuthor = bookAuthor
        this.bookStock = bookStock
        this.bookCreatedAt = bookCreatedAt
        this.bookUpdatedAt = bookUpdatedAt
        this.bookDeletedAt = bookDeletedAt
    }

}