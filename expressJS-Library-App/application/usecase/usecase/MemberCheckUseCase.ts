import IMemberReadOnlyRepository from "../../repositories/IMemberReadOnlyRepository";
import IMemberCheckUseCase, { getAllMemberFailed, getAllMemberSuccess } from "../IMemberCheckUseCase";

export default class MemberCheckUse implements IMemberCheckUseCase {

    private memberReadOnlyRepository: IMemberReadOnlyRepository;

    constructor(memberReadOnlyRepository: IMemberReadOnlyRepository){
        this.memberReadOnlyRepository = memberReadOnlyRepository
    }

    public async getAllMemberAggregate(): Promise<getAllMemberSuccess | getAllMemberFailed > {

        let member = await this.memberReadOnlyRepository.fetchAll();

        const foundMemberDto = member

        return {
            Member: foundMemberDto,
            Message: `Fetching All Member Succeed`
        }

    }

    public async getCurrentQuantity(): Promise<number> {
        throw new Error("Method not implemented.");
    }

}