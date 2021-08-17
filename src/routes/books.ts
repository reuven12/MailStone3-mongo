import express from 'express'
var router=express.Router();

const{
    getAllbooks
}=require('../controllers/books')
  
router.get('/',getAllbooks) ;



export default router;
