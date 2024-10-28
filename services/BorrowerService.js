import { Borrower } from "../models/Borrower.js";

export const addBorrower = async(data)=>{
    const registered_date = new Date();
    const borrower = await Borrower.create({...data,registered_date:registered_date});
    borrower.save();
}

export const getAllBorrowers = async()=>{
    const borrowers = await Borrower.findAll();
    return borrowers;
}

export const updateBorrower = async(id,data)=>{
    const borrower = await Borrower.findByPk(id);
    if(!borrower){
        return {
            "status": 404,
            "message": "Borrower not found"
        }
    }
    await borrower.update(data);
    return {
        "status":200,
        "message":"Borrower updated successfully"
    }
}

export const deleteBorrower = async(borrowerId)=>{
    const deleted = await Borrower.destroy({
        where: {
            id: borrowerId
        }
    })
    return deleted;
}