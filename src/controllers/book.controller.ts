//* ------------------- DEPENDENCIES ------------------ *\\
import { Request, Response } from "express";
import { validationResult } from "express-validator";

import Books from "../models/book.model";

//* ------------------- Controllers ------------------- *\\

async function getBooksController(_req: Request, res: Response) {
  try {
    const books = await Books.find({}).select(
      "-createdAt -updatedAt -__v -_id"
    );
    return res.json({ success: true, books });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "mongodb error",
    });
  }
}

async function deleteBookController(req: Request, res: Response) {
  const { isbn } = req.body;

  const book = await Books.findOne({ isbn });

  if (!book) {
    return res.status(400).json({
      success: false,
      message: "errors occured while creating book",
      errors: ["book doesnt exists"],
    });
  }

  await Books.deleteOne({ isbn });
  return res.json({ success: true, message: "deleted book" });
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

  const {
    isbn,
    title,
    authors,
    published,
    rating,
    thumbnail,
    subtitle,
    description,
  } = req.body;

  try {
    const book = await Books.findOne({ isbn });

    if (book) {
      return res.status(400).json({
        success: false,
        message: "errors occured while creating book",
        errors: ["book already exists"],
      });
    }

    await new Books({
      isbn,
      title,
      authors,
      published,
      rating,
      thumbnail,
      subtitle,
      description,
    }).save();

    return res.json({ success: true, message: "created new book" });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "mongodb error",
    });
  }
}

//* --------------------- EXPORTS --------------------- *\\

export { getBooksController, createBookController, deleteBookController };
