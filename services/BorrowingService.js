import { Book } from "../models/Book.js";
import { Borrower } from "../models/Borrower.js";
import { BorrowHistory, BorrowHistoryType } from "../models/BorrowHistory.js";
import { Op } from "sequelize";

export const checkoutBook = async(bookId, borrowerId)=>{
    const book = await Book.findByPk(bookId);
    if(!book){
        return{
            status:404,
            message: "Book not found"
        }
    }
    const borrower = await Borrower.findByPk(borrowerId);
    if(!borrower){
        return{
            status:404,
            message: "Borrower not found"
        }
    }
    const alreadyBorrowed = await BorrowHistory.findAll(
        {
            where: {
                bookId: bookId,
                borrowerId: borrowerId,
                status: BorrowHistoryType.BORROWED
            }
        }
    );
    if(alreadyBorrowed.length>0){
        return {
            status:400,
            message: "Book already borrowed"
        }
    }
    if(book.quantity == 0){
        return{
            status: 400,
            message: "Book quantity insufficient"
        }
    }
    const today = new Date();
    const history = await BorrowHistory.create({
        bookId: book.id,
        borrowerId: borrowerId,
        status: BorrowHistoryType.BORROWED,
        borrowedDate: today,
        dueDate: today.setMonth(today.getMonth()+1)
    });
    await history.save();
    await book.update({
        quantity: book.quantity-1
    });
    return {
        status: 200,
        message: "Book borrowed successfully"
    }
}

export const returnBook = async(bookId,borrowerId)=>{
    const book = await Book.findByPk(bookId);
    if(!book){
        return{
            status:404,
            message: "Book not found"
        }
    }
    const borrower = await Borrower.findByPk(borrowerId);
    if(!borrower){
        return{
            status:404,
            message: "Borrower not found"
        }
    }
    const borrowHistory = await BorrowHistory.findOne({
        where:{
            bookId:bookId,
            borrowerId:borrowerId,
            status:BorrowHistoryType.BORROWED
        }
    });
    if(!borrowHistory){
        return{
            status:404,
            message: "Borrower doesn't have this book"
        }
    }
    await borrowHistory.update({
        status: BorrowHistoryType.RETURNED,
        returnedDate: new Date()
    });
    await book.update({
        quantity: book.quantity+1
    });
    return{
        status:200,
        message: "Book returned successfully"
    }

}

export const getBorrowerBorrowedBooks=async(borrowerId)=>{
    const borrower = await Borrower.findByPk(borrowerId);
    if(!borrower){
        return{
            status:404,
            message:"Borrower does not exist",
            payload:{}
        }
    }
    const borrowerBorrowedBooks = await BorrowHistory.findAll({
        where:{
            borrowerId: borrowerId,
            status: BorrowHistoryType.BORROWED
        },
        include:[
            {
                model: Book
            }
        ]
    });
    const payload = {
        borrower: borrower,
        borrowed_books: borrowerBorrowedBooks
    }
    return{
        status:200,
        message:"",
        payload: payload
    }

}

export const getOverdueBooks = async()=>{
    const today = new Date();
    const overdue = await BorrowHistory.findAll({
        where:{
            status: BorrowHistoryType.BORROWED,
            dueDate:{
                [Op.lt]: today
            }
        },
        include:[
            {model: Book},
            {model:Borrower}
        ]
    });
    return overdue;
}