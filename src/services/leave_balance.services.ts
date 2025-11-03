import * as leaveBalanceRepository from '../repositories/leave_balance.repositories';
import { Leave_Balance, NewLeave_Balance, UpdateLeave_Balance } from '../types/leavebalance.types';

export const getAllLeaveBalances = async (id:number) => await leaveBalanceRepository.getAllLeaveBalances();
export const getLeaveBalanceById = async (id: number)=> await leaveBalanceRepository.getLeaveBalanceById(id);
export const createLeaveBalance = async (leaveBalance: NewLeave_Balance) => await leaveBalanceRepository.createLeaveBalance(leaveBalance);

export const modifyleaveBalance = async(id:number, leaveBalanceUpdates: UpdateLeave_Balance) => {
    const existingleaveBalance = await leaveBalanceRepository.getLeaveBalanceById(id);
    if(!existingleaveBalance){
        throw new Error('Car not Found');
    }
    return await leaveBalanceRepository.updateLeaveBalance(id, leaveBalanceUpdates);
}

export const removeLeaveBalance = async(id:number) => {
    const existingleaveBalance = await leaveBalanceRepository.getLeaveBalanceById(id);
    if(!existingleaveBalance){
        throw new Error('Leave Balance not Found');
    }
    return await leaveBalanceRepository.deleteLeaveBalance(id);
}
