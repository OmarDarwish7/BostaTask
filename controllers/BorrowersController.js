import * as BorrowerService from "../services/BorrowerService.js";

export const addBorrower = async(req,res)=>{
    try {
        await BorrowerService.addBorrower(req.body);
        res.status(201).json({"message":"Borrower created successfully"});
    } catch (error) {
        res.status(400).json({"message":error.message});
    }
}

export const getAllBorrowers = async(req,res)=>{
    try {
        const result = await BorrowerService.getAllBorrowers();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({"message":error.message});
    }
}

export const updateBorrower = async(req,res)=>{
    try {
        const borrowerId = req.params.id;
        const result = await BorrowerService.updateBorrower(borrowerId,req.body);
        res.status(result.status).json({"message":result.message});
    } catch (error) {
        res.status(500).json({"message":error.message});
    }
}

export const deleteBorrower = async(req,res)=>{
    try {
        const borrowerId = req.params.id;
        const deleted = await BorrowerService.deleteBorrower(borrowerId);
        if(deleted){
            res.status(200).json({"message":"Borrower deleted successfully"})
        }
        else{
            res.status(404).json({"message":"Borrower not found"})
        }
    } catch (error) {
        res.status(500).json({"message":error.message});
    }
}