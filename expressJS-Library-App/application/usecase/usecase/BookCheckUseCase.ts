import IBookReadOnlyRepository from "../../repositories/IBookReadOnlyRepository";
import { IBookCheckUseCase, getAllBookFailed, getAllBookSuccess } from "../IBookCheckUseCase";

export default class BookCheckUse implements IBookCheckUseCase {

    private bookReadOnlyRepository: IBookReadOnlyRepository;

    constructor(bookReadOnlyRepository: IBookReadOnlyRepository){
        this.bookReadOnlyRepository = bookReadOnlyRepository
    }

    public async getAllBook(): Promise<getAllBookSuccess | getAllBookFailed > {

        let book = await this.bookReadOnlyRepository.fetchAll();

        const foundBookDto = book

        return {
            Book: foundBookDto,
            Message: `Fetching All Book Succeed`
        }

    }

    public async getCurrentQuantity(): Promise<number> {
        throw new Error("Method not implemented.");
    }

}