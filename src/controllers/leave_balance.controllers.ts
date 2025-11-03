import {Request, Response} from 'express';
import {getPool} from '../db/config';
import * as leaveBalnceServices from '../services/leave_balance.services';

export const getAllLeaveBalances = async (req: Request, res: Response) => {
    try{
        const leaveBalance = await leaveBalnceServices.getAllLeaveBalances;
        res.status(200).json(leaveBalance);
    } catch (error: any){
        res.status(500).json({error:error.message});
    }
};


export const getLeaveBalanceById = async(req: Request, res: Response) => {
    const leaveBalanceId = parseInt(req.params.id);
    try{
        const leaveBalance =await leaveBalnceServices.getLeaveBalanceById(leaveBalanceId);
        if (leaveBalance){
            res.status(200).json(leaveBalance);
        }else{
            res.status(400).json({message:'Leave Balnace not Found'});
        }
    }catch(error:any){
        res.status(500).json({error:error.message});
    }
};

export const createLeaveBalance = async(req: Request, res: Response) =>{
    const newLeaveBalance = req.body;
    try{
        const createdLeaveBalance = await leaveBalnceServices.createLeaveBalance(newLeaveBalance);
        res.status(201).json(createLeaveBalance);
    } catch (error:any){
        res.status(500).json({error: error.message});
    }
};

export const updatedLeaveBalance = async (req:Request, res: Response) => {
    const leaveBalanceId = parseInt(req.params.id);
    const leaveBalaneUpdates = req.body;

    if(isNaN(leaveBalanceId)){
        return res.status(400).json({message: 'Invalid Leave Balance ID'});
    }

    try{
        const updatedLeaveBalance = await leaveBalnceServices.modifyleaveBalance(leaveBalanceId, leaveBalaneUpdates);
        res.status(200).json(updatedLeaveBalance);
    }catch(error:any){
        if (error.message === 'Leave Balance not found'){
            res.status(404).json({message:'Leave Balance not Found'});
        }else{
            res.status(500).json({error:error.message})
        }
    }
};

export const deleteLeaveBalance = async(req: Request, res: Response) => {
    const leaveBalanceId = parseInt(req.params.id);
    if(isNaN(leaveBalanceId)){
        return res.status(400).json({message: 'Invalid Leave Balance'});
    }

    try{
        const result = await leaveBalnceServices.removeLeaveBalance(leaveBalanceId);
        res.status(200).json(result);
    } catch(error:any){
        if (error.message === 'Leave Balance not Found'){
            res.status(404).json({message:'Leave Balance not found'});
        }else{ 
            res.status(500).json({error:error.message});
        }
    }
};
