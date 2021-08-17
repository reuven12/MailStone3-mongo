import mongoose from 'mongoose';

var BookSchema=new mongoose.Schema({
    Title:{
        String,
    },
    Book_description:{
        String,
        },
    Date_of_publication_of_the_book:{
        String,
    },
    the_author:{
        String,
    },
    Number_of_pages:{
        Number,
    }
});

export const BookModel =  mongoose.model('Book',BookSchema);