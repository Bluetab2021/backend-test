/* eslint-disable import/prefer-default-export */

//* ------------------- DEPENDENCIES ------------------ *\\
import { Request, Response } from "express";

//* ------------------- Controllers ------------------- *\\

async function getBooksController(_req: Request, res: Response) {
  res.json({ success: true, message: "get all books" });
}

//* --------------------- EXPORTS --------------------- *\\

export { getBooksController };
