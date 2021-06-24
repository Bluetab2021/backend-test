//* ------------------- DEPENDENCIES ------------------ *\\

//* Node modules
import dotenv from "dotenv";

import express, { Request, Response, Application } from "express";
import mongoose from "mongoose";
import cors from "cors";

import bookRouter from "./routes/book.routes";

dotenv.config({
  path: "./config/index.env",
});

//* ------------------ CONFIGURATION ------------------ *\\

const PROTOCOL: string = process.env.PROTOCOL || "http";
const HOST: string = process.env.HOST || "localhost";
const PORT: string = process.env.PORT || "3000";

const app: Application = express();

//* --------------- DATABASE CONNECTION --------------- *\\

const uri =
  process.env.NODE_ENV === "production"
    ? process.env.LOCAL_URI || ""
    : process.env.ATLAS_URI || "";

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("mongo database connection established successfully");
  })
  .catch((error: Error) => {
    console.error("error connecting to database: ", error);
  });

//* ------------------- MIDDLEWARES ------------------- *\\

app.use(express.json());
app.use(cors());

//* --------------------- ROUTES ---------------------- *\\

app.use("/api", bookRouter);

app.get("/", (_reg: Request, res: Response) => {
  res.status(200).json({ success: true, message: "test server" });
});

app.use((_req: Request, res: Response) => {
  res.status(404).json({ success: false, message: "page not found" });
});

//* ------------------ START SERVER ------------------- *\\
app.listen(PORT, () => {
  console.log(`server listening on ${PROTOCOL}://${HOST}:${PORT}`);
});
