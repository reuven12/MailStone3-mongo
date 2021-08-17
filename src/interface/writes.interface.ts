import mongoose from 'mongoose';

export interface IWriter {
    First_Name: string;
    Last_Name: string;
    Year_of_Birth: number;
    List_books:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Book'
     }]
  }