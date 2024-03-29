import { NextFunction, Request, Response } from "express";
import MemberCheckUse from "../../application/usecase/usecase/MemberCheckUseCase";
import MemberRepository from "../repositoryImplementation/MemberRepository";
const express = require("express");
const router = express.Router();
// const members = require("../services/Members");

router.get("/", async function (req: Request, res: Response, next: NextFunction) {
  try {

    let memberCheckUseCase = new MemberCheckUse(new MemberRepository())
    let result = await memberCheckUseCase.getAllMemberAggregate()

    res.json({
      action: "memberCheck",
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
