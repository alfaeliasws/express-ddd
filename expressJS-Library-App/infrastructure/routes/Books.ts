import { NextFunction, Request, Response } from "express";
import BookRepository from "../repositoryImplementation/BookRepository";
import BookCheckUse from "../../application/usecase/usecase/BookCheckUseCase";

const express = require("express");
const router = express.Router();

router.get("/", async function (req: Request, res: Response, next: NextFunction) {
  try {

    let bookCheckUseCase = new BookCheckUse(new BookRepository
      ())
    let result = await bookCheckUseCase.getAllBook()

    res.status(200).json({
      action: "bookCheck",
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
