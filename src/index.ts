//* ------------------- DEPENDENCIES ------------------ *\\

//* Node modules
import dotenv from 'dotenv';

dotenv.config({
    path: './config/index.env'
});

import express, { Request, Response, Application } from 'express';
// import mongoose from 'mongoose';
import cors from 'cors';


//* ------------------ CONFIGURATION ------------------ *\\

const app: Application = express();

//* ------------------- MIDDLEWARES ------------------- *\\

app.use(express.json());
app.use(cors());

//* --------------------- ROUTES ---------------------- *\\
app.get('/', (_reg: Request, res: Response) => {
    res.status(200).json({message: 'test server'});
});

//* ------------------ START SERVER ------------------- *\\
app.listen(3000, () => {
    console.log(`server is running`)
});
