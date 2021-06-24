//* ------------------- DEPENDENCIES ------------------ *\\

import mongoose, { Schema, Document } from "mongoose";

//* --------------------- MODELS ---------------------- *\\

interface IThumbnail {
  url: string;
  title: string;
}

export interface IBook extends Document {
  title: string;
  authors: string[];
  published: Date;
  subtitle: string;
  rating: number;
  thumbnails: IThumbnail[];
  description: string;
}

const BookSchema: Schema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    authors: { type: Array, required: true },
    published: { type: Date, required: true },
    subtitle: { type: String },
    rating: { type: Number, required: true },
    thumbnails: {
      url: { type: String, required: true },
      title: { type: String, required: true },
    },
    description: { type: String },
  },
  { timestamps: true }
);

//* --------------------- EXPORTS --------------------- *\\

export default mongoose.model<IBook>("Books", BookSchema);
