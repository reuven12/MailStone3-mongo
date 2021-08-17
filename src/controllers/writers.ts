import {WriterModel} from '../models/writers';
import mongoose from 'mongoose';
import express,{Request,Response} from 'express';
import { IWriter } from '../interface/writes.interface';

const router=express.Router();

router.get('/:First_Name', async (req:Request,res:Response)=>{
    try{
        const populatedWriter : IWriter= await WriterModel.findOne({First_Name: req.params.First_Name}).populate('List_books');
        res.send(populatedWriter.List_books);
    }catch(err){
        res.status(500).json({message:err.message})
    }
});

router.post('/',async(req:Request,res:Response)=>{
    const write=new WriterModel({
        First_Name:req.body.First_Name,
        Last_Name:req.body.Last_Name,
        Year_of_Birth:req.body.Year_of_Birth,
        List_books:req.body.List_books
    })
    
    try{
        const newWrite= await write.save();
        res.status(201).json(newWrite);
    }catch(err){
        res.status(400).json({message:err.message}) 
    }
});


router.get('/',async(req:Request,res:Response)=>{
    try{
        const writesFind:IWriter = await WriterModel.find();
            res.send(writesFind);
    }catch(err){
        res.status(500).json({
            message:err.message
        })
    }
});
export default router;
