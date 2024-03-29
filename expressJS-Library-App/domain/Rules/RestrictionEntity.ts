type restrictionEntityType = {}

export default class RestrictionEntity {
    
    private restrictionId: string;
    
    public get getRestrictionId() : string {
        return this.restrictionId
    }

    public set setRestrictionId(string: string) {
        this.restrictionId = string
    }
    
    private memberCode: string;
    
    public get getMemberCode() : string {
        return this.memberCode
    }

    public set setMemberCode(string: string) {
        this.memberCode = string
    }
    
    private restrictionType: string;
    
    public get getRestrictionType() : string {
        return this.restrictionType
    }

    public set setRestrictionType(string: string) {
        this.restrictionType = string
    }
    private restrictionStartDate: string;
    
    public get getRestrictionStartDate() : string {
        return this.restrictionStartDate
    }

    public set setRestrictionStartDate(string: string) {
        this.restrictionStartDate = string
    }

    private restrictionEndDate: string;
    
    public get getRestrictionEndDate() : string {
        return this.restrictionEndDate
    }

    public set setRestrictionEndDate(string: string) {
        this.restrictionEndDate = string
    }

    private restrictionDeletedAt: string;
    
    public get getRestrictionDeletedAt() : string {
        return this.restrictionDeletedAt
    }

    public set setRestrictionDeletedAt(string: string) {
        this.restrictionDeletedAt = string
    }

    constructor(
        restrictionId: string,
        memberCode: string,
        restrictionType: string,
        restrictionStartDate: string = "",
        restrictionEndDate : string = "",
        restrictionDeletedAt: string = ""
    ){
        this.restrictionType = restrictionType
        this.restrictionId = restrictionId
        this.memberCode = memberCode
        this.restrictionStartDate = restrictionStartDate
        this.restrictionEndDate = restrictionEndDate
        this.restrictionDeletedAt = restrictionDeletedAt
    }

}