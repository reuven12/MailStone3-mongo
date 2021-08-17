import express from 'express'
var router=express.Router();

const{
    getAllWrites
}=require('../controllers/writers')

router.get('/',getAllWrites);


export default router;
