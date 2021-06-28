/* eslint-disable import/prefer-default-export */

//* ------------------- DEPENDENCIES ------------------ *\\
import { Request, Response } from "express";
import { validationResult } from "express-validator";

import Books from "../models/book.model";

//* ------------------- Controllers ------------------- *\\

async function getBooksController(_req: Request, res: Response) {
  res.json({ success: true, message: "get all books" });
}

async function createBookController(req: Request, res: Response) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: "request body was incomplete",
      errors: errors.array(),
    });
  }

  try {
    await new Books(req.body).save();
    return res.json({ success: true, message: "created new book" });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "internal server error",
    });
  }
}

//* --------------------- EXPORTS --------------------- *\\

export { getBooksController, createBookController };
