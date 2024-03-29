type recordsEntity = {}

export default class RecordEntity {
    
    id: string;
    
    public get getId() : string {
        return this.id
    }

    public set setId(string: string) {
        this.id = string
    }
    
    bookCode: string;
    
    public get getBookCode() : string {
        return this.bookCode
    }

    public set setBookCode(string: string) {
        this.bookCode = string
    }

    memberCode: string;
    
    public get getMemberCode() : string {
        return this.memberCode
    }

    public set setMemberCode(string: string) {
        this.memberCode = string
    }

    recordBorrowedAt: string;
    
    public get getRecordBorrowedAt() : string {
        return this.recordBorrowedAt
    }

    public set setRecordBorrowedAt(string: string) {
        this.recordBorrowedAt = string
    }

    recordReturnedAt: string;
    
    public get getRecordReturnedAt() : string {
        return this.recordReturnedAt
    }

    public set setRecordReturnedAt(string: string) {
        this.recordReturnedAt = string
    }

    recordDeletedAt: string;
    
    public get getRecordDeletedAt() : string {
        return this.recordDeletedAt
    }

    public set setRecordDeletedAt(string: string) {
        this.recordDeletedAt = string
    }

    constructor(
        id: string = "",
        bookCode: string,
        memberCode: string,
        recordBorrowedAt: string = "",
        recordReturnedAt : string = "",
        recordDeletedAt: string = ""
    ){
        this.memberCode = memberCode
        this.id = id
        this.bookCode = bookCode
        this.recordBorrowedAt = recordBorrowedAt
        this.recordReturnedAt = recordReturnedAt
        this.recordDeletedAt = recordDeletedAt
    }

}