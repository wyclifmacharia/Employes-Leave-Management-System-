
import * as leaveTypeRepository from '../repositories/leave_types.repositories';
import { NewLeaveType, UpdateLeaveType } from '../types/leave_types.types';

// List all leave types
export const listLeaveTypes = async () => {
    return await leaveTypeRepository.getAllLeaveTypes();
};

// Get a single leave type
export const getLeaveType = async (id: number) => {
    const leaveType = await leaveTypeRepository.getLeaveTypeById(id);
    if (!leaveType) {
        throw new Error('Leave type not found');
    }
    return leaveType;
};

// Create new leave type
export const createLeaveType = async (leaveType: NewLeaveType) => {
    return await leaveTypeRepository.createLeaveType(leaveType);
};

// Update leave type
export const updateLeaveType = async (id: number, leaveType: UpdateLeaveType) => {
    // Check if leave type exists
    const existingLeaveType = await leaveTypeRepository.getLeaveTypeById(id);
    if (!existingLeaveType) {
        throw new Error('Leave type not found');
    }
    return await leaveTypeRepository.updateLeaveType(id, leaveType);
};

// Delete leave type
export const deleteLeaveType = async (id: number) => {
    // Check if leave type exists
    const existingLeaveType = await leaveTypeRepository.getLeaveTypeById(id);
    if (!existingLeaveType) {
        throw new Error('Leave type not found');
    }
    return await leaveTypeRepository.deleteLeaveType(id);
};