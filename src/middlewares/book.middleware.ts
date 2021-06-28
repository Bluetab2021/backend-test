/* eslint-disable import/prefer-default-export */

//* ------------------- DEPENDENCIES ------------------ *\\

//* Node modules
import { check } from "express-validator";

//* ------------------- MIDDLEWARES ------------------ *\\

const validCreateBook = [
  check("isbn", "isbn field is required").notEmpty(),
  check("isbn", "isbn field must be 5 to 32 characters long").isLength({
    min: 5,
    max: 17,
  }),

  check("title", "title field is required").notEmpty(),
  check("title", "title field must be 5 to 32 characters long").isLength({
    min: 5,
    max: 32,
  }),

  check("authors", "authors field is required").notEmpty(),
  check("published", "published field is required").notEmpty(), // .isDate(),
  check("rating", "ratingfield is required").notEmpty().isNumeric(),

  check("thumbnail", "thumbnail field is required").notEmpty(),
  // check("thumbnail", "thumbnail.url field is required").contains("url"),
  // check("thumbnail", "thumbnail.title is required").contains("title"),
];

//* --------------------- EXPORTS --------------------- *\\

export { validCreateBook };
