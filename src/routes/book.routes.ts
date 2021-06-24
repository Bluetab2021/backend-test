//* ------------------- DEPENDENCIES ------------------ *\\

import express, { Router } from "express";

import { getBooksController } from "../controllers/book.controller";

//* ------------------ CONFIGURATION ------------------ *\\

const bookRouter: Router = express.Router();

//* --------------------- ROUTES ---------------------- *\\

bookRouter.get("/", getBooksController);

//* --------------------- EXPORTS --------------------- *\\

export default bookRouter;
