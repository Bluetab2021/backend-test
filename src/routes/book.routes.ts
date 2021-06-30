//* ------------------- DEPENDENCIES ------------------ *\\

import express, { Router } from "express";

import {
  getBooksController,
  createBookController,
  deleteBookController,
} from "../controllers/book.controller";

import { validCreateBook } from "../middlewares/book.middleware";

//* ------------------ CONFIGURATION ------------------ *\\

const bookRouter: Router = express.Router();

//* --------------------- ROUTES ---------------------- *\\

bookRouter.get("/", getBooksController);
bookRouter.post("/", validCreateBook, createBookController);
bookRouter.delete("/", deleteBookController);

//* --------------------- EXPORTS --------------------- *\\

export default bookRouter;
