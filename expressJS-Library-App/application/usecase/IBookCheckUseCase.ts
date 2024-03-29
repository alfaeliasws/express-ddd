import BookEntity from "../../domain/Books/BookEntity";
import IBookDto from "../dataTransferObject/IBookDto";

export type getAllBookSuccess = {
    Book: BookEntity[],
    Message: string
}

export type getAllBookFailed = {
    Message: string
}

export interface IBookCheckUseCase {
    getAllBook(): Promise<getAllBookSuccess | getAllBookFailed >
    // getCurrentQuantity(): Promise<number>
}