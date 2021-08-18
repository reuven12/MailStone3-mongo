import mongoose from 'mongoose';

export interface IWriter {
    First_Name: string;
    Last_Name: string;
    Year_of_Birth: number;
    List_books: mongoose.Schema.Types.ObjectId[]
  }