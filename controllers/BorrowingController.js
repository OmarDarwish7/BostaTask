import { Book } from "../models/Book.js";
import { Borrower } from "../models/Borrower.js";
import { BorrowHistory } from "../models/BorrowHistory.js";
import * as BorrowingService from '../services/BorrowingService.js'

export const checkoutBook = async(req,res)=>{
    try {
        const {borrowerId , bookId} = req.body;
        if(!bookId){
            res.status(400).json({"message":"Book ID missing"});
        } 
        else if(!borrowerId){
            res.status(400).json({"message":"Borrower ID missing"});
        }
        else{
            const result = await BorrowingService.checkoutBook(bookId,borrowerId);
            res.status(result.status).json({"message":result.message})
        }
    } catch (error) {
        res.status(400).json({"message":error.message});
    }
}

export const returnBook = async(req,res)=>{
    try {
        const {borrowerId , bookId} = req.body;
        if(!bookId){
            res.status(400).json({"message":"Book ID missing"});
        } 
        else if(!borrowerId){
            res.status(400).json({"message":"Borrower ID missing"});
        }
        else{
            const result = await BorrowingService.returnBook(bookId,borrowerId);
            res.status(result.status).json({"message":result.message})
        } 
    } catch (error) {
        
    }
}

export const getBorrowerBorrowedBooks = async(req,res)=>{
    try {
        const borrowerId = req.params.id;
        if(!borrowerId){
            res.status(400).json({"message":"Borrower ID missing"})
        }
        else{
            const result = await BorrowingService.getBorrowerBorrowedBooks(borrowerId);
            res.status(result.status).json({"message":result.message,payload:result.payload});
        }
    } catch (error) {
        res.status(500).json({"message":error.message});
    }
}

export const getOverdueBooks = async(req,res)=>{
    try {
        const payload = await BorrowingService.getOverdueBooks();
        res.status(200).json({"payload":payload}); 
    } catch (error) {
        res.status(500).json({"message":error.message});
    }
}