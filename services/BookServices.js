import { Book } from "../models/Book.js";
import { Borrower } from "../models/Borrower.js";

export const getBooks = async (_title=null,_author=null,_isbn=null) =>{
    const query = {};
    if(_title){
        query.title = _title;
    }
    if(_author){
        query.author= _author;
    }
    if(_isbn){
        query.isbn= _isbn;
    }

    const result = await Book.findAll({
        where: query,
        include: Borrower
    });

    return result;
}

export const deleteBook = async(bookId)=>{
    return await Book.destroy({
        where:{
            id:bookId
        }
    });
}

export const updateBook = async(bookId,data)=>{
    console.log("BOOK ID IS",bookId)
    const book = await Book.findByPk(bookId);
    if(!book){
        return {
            "status" : 404,
            "message" : "Book not found"
        }
    }
    console.log(book);
    await book.update(data);
    return {
        "status": 200,
        "message": "Book updated successfully"
    }
}

export const addBook = async(data)=>{
    const book = await Book.create(data);
    book.save();
}