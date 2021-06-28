//* ------------------- DEPENDENCIES ------------------ *\\

import express, { Router } from "express";

import {
  getBooksController,
  createBookController,
} from "../controllers/book.controller";

import { validCreateBook } from "../middlewares/book.middleware";

//* ------------------ CONFIGURATION ------------------ *\\

const bookRouter: Router = express.Router();

//* --------------------- ROUTES ---------------------- *\\

bookRouter.get("/", getBooksController);
bookRouter.post("/", validCreateBook, createBookController);

//* --------------------- EXPORTS --------------------- *\\

export default bookRouter;
