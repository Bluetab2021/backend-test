//* ------------------- DEPENDENCIES ------------------ *\\

//* Node modules
import dotenv from "dotenv";

import express, { Request, Response, Application } from "express";
import mongoose from "mongoose";
import cors from "cors";

dotenv.config({
  path: "./config/index.env",
});

//* ------------------ CONFIGURATION ------------------ *\\

const app: Application = express();

//* --------------- DATABASE CONNECTION --------------- *\\

const uri = process.env.LOCAL_URI || "";
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("mongo database connection established successfully");
  });

//* ------------------- MIDDLEWARES ------------------- *\\

app.use(express.json());
app.use(cors());

//* --------------------- ROUTES ---------------------- *\\
app.get("/", (_reg: Request, res: Response) => {
  res.status(200).json({ message: "test server" });
});

//* ------------------ START SERVER ------------------- *\\
app.listen(3000, () => {
  console.log(`server is running`);
});
