import mongoose from 'mongoose';
import express from 'express';
const app=express();
import BooksRouter from './controllers/books';
import writers from './controllers/writers';


mongoose.connect('mongodb://localhost:27017/Information_about_writers',
 {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', (error:Error)=>console.error(error));
db.once('open', ()=> console.log('connect'));

app.use(express.json());
app.use('/writers',writers);
app.use('/books',BooksRouter);

let port=process.env.PORT || '3000';
app.listen(port);


