import {BookModel} from '../models/books';
import {IBook} from '../interface/books.interface'
import mongoose from 'mongoose';
import express,{Request,Response} from 'express';

const router=express.Router();

router.get('/Book_description/:Book_description',async(req:Request,res:Response)=>{
try{
    const booke:IBook[] = await BookModel.find({
        Title:{ $regex:req.params.Title, $options:'i'}} || {Book_description:{ $regex:req.params.Book_description, $options:'i'},
    });
    res.send(booke);
    }catch(err){
        res.status(500).json({message:err.message});
    }
});

router.get('/pages/:Number_of_pages', async(req:Request,res:Response)=>{
    try{
        const pages:IBook[] =await BookModel.find({
            Number_of_pages: {$gt: parseInt(req.params.Number_of_pages)}
        });
        res.send(pages)
    }catch(err){
        res.status(500).json({message: err.message})
    }
});

export default router;
 