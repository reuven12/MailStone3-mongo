import mongoose from 'mongoose';
import { type } from 'os';


const WriterSchema=new mongoose.Schema({
    First_Name:{
       type: String,
    },
    Last_Name:{
      type: String,
    },
    Year_of_Birth:{
       type: Number,
    },
    List_books:[{
       type: mongoose.Schema.Types.ObjectId,
       ref:'Book'
    }]
},{versionKey: false});

export const WriterModel =  mongoose.model('Writer',WriterSchema);
