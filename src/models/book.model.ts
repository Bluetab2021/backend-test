//* ------------------- DEPENDENCIES ------------------ *\\

import mongoose, { Schema, Document } from "mongoose";

//* --------------------- MODELS ---------------------- *\\

interface IThumbnail {
  url: string;
  title: string;
}

export interface IBook extends Document {
  isbn: string;
  title: string;
  authors: string[];
  published: Date;
  subtitle: string;
  rating: number;
  thumbnail: IThumbnail;
  description: string;
}

const BookSchema: Schema = new Schema(
  {
    isbn: { type: String, required: true, trim: true, unique: true },
    title: { type: String, required: true, trim: true },
    authors: { type: Array, required: true },
    published: { type: Date, required: true },
    subtitle: { type: String },
    rating: { type: Number, required: true },
    thumbnail: {
      url: { type: String, required: true },
      title: { type: String, required: true },
    },
    description: { type: String },
  },
  { timestamps: true }
);

//* --------------------- EXPORTS --------------------- *\\

export default mongoose.model<IBook>("Books", BookSchema);
