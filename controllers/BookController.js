// controllers/bookController.js
import { Book } from '../models/Book.js';
import { Borrower } from '../models/Borrower.js';
import * as BookService from '../services/BookServices.js'

export const getBooks = async(req,res)=>{
    try {
        const {title, author, isbn} = req.query;
        const result = await BookService.getBooks(title,author,isbn);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const deleteBook = async(req,res)=>{
    try {
        const bookId = req.params.id;
        const deleted = await BookService.deleteBook(bookId);
        if(deleted){
            res.status(200).json({"message": "Book deleted successfully"})
        }
        else{
            res.status(404).json({"message":"Book not found"});
        }
    } catch (error) {
        res.status(500).json({"message":error.message});
    }
}

export const updateBook = async(req,res)=>{
    try {
        const bookId = req.params.id;
        const result = await BookService.updateBook(bookId,req.body);
        res.status(result.status).json({"message":result.message})
    } catch (error) {
        res.status(500).json({"message":error.message});
    }
}

export const addBook = async (req,res)=>{
    try {
        const result = await BookService.addBook(req.body);
        res.status(200).json({"message":"Book created successfully"})
    } catch (error) {
        res.status(500).json({"message":error.message})
    }
}