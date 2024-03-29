import { NextFunction, Request, Response } from "express";
import BorrowUseCase from "../../application/usecase/usecase/BorrowUseCase";
import IMemberDto from "../../application/dataTransferObject/IMemberDto";
import IBookDto from "../../application/dataTransferObject/IBookDto";
import BookRepository from '../repositoryImplementation/BookRepository';
import MemberRepository from "../repositoryImplementation/MemberRepository";
import RecordRepository from "../repositoryImplementation/RecordRepository";
import RestrictionRepository from "../repositoryImplementation/RestrictionRepository";
import ReturnUseCase from "../../application/usecase/usecase/ReturnUseCase";
import IRecordDto from "../../application/dataTransferObject/IRecordDto";
const express = require("express");
const router = express.Router();
// const records = require("../services/Records");

router.post("/borrow", async function (req: Request, res: Response, next: NextFunction) {
  try {
    
    const memberDto: IMemberDto = req.body.member;
    const bookDto: IBookDto = req.body.book;

    let borrowUseCase = new BorrowUseCase(new BookRepository(),new MemberRepository(), new RecordRepository(), new RestrictionRepository())
    let result = await borrowUseCase.borrow(bookDto, memberDto)

    res.json({
      action: "borrow",
      status: 200,
      success: 1,
      result
    });
  } catch (err: any) {
    console.error(`Error  `, err.message);
    next(err);
  }
});

router.post("/return", async function (req: Request, res: Response, next: NextFunction) {
  try {
    const memberDto: IMemberDto = req.body.member;
    const bookDto: IBookDto = req.body.book;
    const recordDto: IRecordDto = req.body.record;

    let returnUseCase = new ReturnUseCase(new BookRepository(),new MemberRepository(), new RecordRepository(), new RestrictionRepository())
    let result = await returnUseCase.return(bookDto, memberDto, recordDto)

    res.json({
      action: "return",
      status: 200,
      success: 1,
      result
    });
  } catch (err: any) {
    console.error(`Error  `, err.message);
    next(err);
  }
});

module.exports = router;
