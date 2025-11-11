import { getPool } from '../db/config';
import { LeaveType, NewLeaveType, UpdateLeaveType } from '../types/leave_types.types';

export const getAllLeaveTypes = async (): Promise<LeaveType[]> => {
    const pool = await getPool();
    const result = await pool.request().query('SELECT * FROM Leave_Type');
    return result.recordset;
};

export const getLeaveTypeById = async (id: number): Promise<LeaveType> => {
    const pool = await getPool();
    const result = await pool
        .request()
        .input('id', id)
        .query('SELECT * FROM Leave_Type WHERE leave_type_id = @id');
    return result.recordset[0];
};

export const createLeaveType = async (leaveType: NewLeaveType) => {
    const pool = await getPool();
    await pool
        .request()
        .input('type_name', leaveType.type_name)
        .input('description', leaveType.description)
        .input('default_days', leaveType.default_days)
        .query('INSERT INTO Leave_Type (type_name, description, default_days) VALUES (@type_name, @description, @default_days)');
    return { message: 'Leave type created successfully' };
};

export const updateLeaveType = async (id: number, leaveType: UpdateLeaveType) => {
    const pool = await getPool();
    await pool
        .request()
        .input('id', id)
        .input('type_name', leaveType.type_name)
        .input('description', leaveType.description)
        .input('default_days', leaveType.default_days)
        .query('UPDATE Leave_Type SET type_name = @type_name, description = @description, default_days = @default_days WHERE leave_type_id = @id');
    return { message: 'Leave type updated successfully' };
};

export const deleteLeaveType = async (id: number) => {
    const pool = await getPool();
    await pool
        .request()
        .input('id', id)
        .query('DELETE FROM Leave_Type WHERE leave_type_id = @id');
};