
import { Request, Response } from 'express';
import * as leaveTypeServices from '../services/leave_type.services';

// Get all leave types
export const getLeaveTypes = async (req: Request, res: Response) => {
    try {
        const leaveTypes = await leaveTypeServices.listLeaveTypes();
        res.status(200).json(leaveTypes);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

// Get leave type by id
export const getLeaveTypeById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    try {
        const leaveType = await leaveTypeServices.getLeaveType(id);
        if (leaveType) {
            res.status(200).json(leaveType);
        } else {
            res.status(404).json({ message: 'Leave type not found' });
        }
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

// Create new leave type
export const createLeaveType = async (req: Request, res: Response) => {
    const leaveType = req.body;
    try {
        const result = await leaveTypeServices.createLeaveType(leaveType);
        res.status(201).json(result);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

// Update a leave type
export const updateLeaveType = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const leaveType = req.body;
    
    // Bad request if id is not a number
    if (isNaN(id)) {
        return res.status(400).json({ message: 'Invalid leave type id' });
    }

    // Proceed to update
    try {
        const result = await leaveTypeServices.updateLeaveType(id, leaveType);
        res.status(200).json(result);
    } catch (error: any) {
        // Not found if leave type with id does not exist
        if (error.message === 'Leave type not found') {
            return res.status(404).json({ message: 'Leave type not found' });
        } else {
            res.status(500).json({ error: error.message });
        }
    }
};

// Delete a leave type
export const deleteLeaveType = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    
    // Bad request if id is not a number
    if (isNaN(id)) {
        return res.status(400).json({ message: 'Invalid leave type id' });
    }

    // Proceed to delete
    try {
        const result = await leaveTypeServices.deleteLeaveType(id);
        res.status(204).json(result);
    } catch (error: any) {
        // Not found if leave type with id does not exist
        if (error.message === 'Leave type not found') {
            return res.status(404).json({ message: 'Leave type not found' });
        } else {
            res.status(500).json({ error: error.message });
        }
    }
};