import * as leaveTypeRepository from '../repositories/leave_types.repositories';
import { NewLeaveType, UpdateLeaveType } from '../types/leave_types.types';

export const listLeaveTypes = async () => {
    return await leaveTypeRepository.getAllLeaveTypes();
};

export const getLeaveType = async (id: number) => {
    const leaveType = await leaveTypeRepository.getLeaveTypeById(id);
    if (!leaveType) {
        throw new Error('Leave type not found');
    }
    return leaveType;
};

export const createLeaveType = async (leaveType: NewLeaveType) => {
    return await leaveTypeRepository.createLeaveType(leaveType);
};

export const updateLeaveType = async (id: number, leaveType: UpdateLeaveType) => {
    const existingLeaveType = await leaveTypeRepository.getLeaveTypeById(id);
    if (!existingLeaveType) {
        throw new Error('Leave type not found');
    }
    return await leaveTypeRepository.updateLeaveType(id, leaveType);
};

export const deleteLeaveType = async (id: number) => {
    const existingLeaveType = await leaveTypeRepository.getLeaveTypeById(id);
    if (!existingLeaveType) {
        throw new Error('Leave type not found');
    }
    return await leaveTypeRepository.deleteLeaveType(id);
};