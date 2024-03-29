type memberEntityType = {}

export default class MemberEntity {
    
    memberCode: string;
    
    public get getMemberCode() : string {
        return this.memberCode
    }

    public set setMemberCode(string: string) {
        this.memberCode = string
    }
    
    memberName: string;
    
    public get getMemberName() : string {
        return this.memberName
    }

    public set setMemberName(string: string) {
        this.memberName = string
    }

    memberCreatedAt: string;
    
    public get getMemberCreatedAt() : string {
        return this.memberCreatedAt
    }

    public set setMemberCreatedAt(string: string) {
        this.memberCreatedAt = string
    }

    memberUpdatedAt: string;
    
    public get getMemberEditedAt() : string {
        return this.memberUpdatedAt
    }

    public set setMemberEditedAt(string: string) {
        this.memberUpdatedAt = string
    }

    memberDeletedAt: string;
    
    public get getMemberDeletedAt() : string {
        return this.memberDeletedAt
    }

    public set setMemberDeletedAt(string: string) {
        this.memberDeletedAt = string
    }

    constructor(
        memberCode: string,
        memberName: string,
        memberCreatedAt: string = "",
        memberUpdatedAt: string = "",
        memberDeletedAt: string = ""
    ){
        this.memberCode = memberCode
        this.memberName = memberName
        this.memberCreatedAt = memberCreatedAt
        this.memberUpdatedAt = memberUpdatedAt
        this.memberDeletedAt = memberDeletedAt
    }


}