import { getPool } from "../db/config";
import { Leave_Balance, NewLeave_Balance, UpdateLeave_Balance } from  "../types/leavebalance.types";


export const getAllLeaveBalances = async (): Promise<Leave_Balance[]> => {
    const pool = await getPool();
    const result = await pool.request().query("SELECT * FROM Leave_Balance");
    return result.recordset;
};

export const getLeaveBalanceById = async (id: number): Promise<Leave_Balance> => {
    const pool = await getPool();
    const result = await pool.request()
        .input("id", id)
        .query("SELECT * FROM Leave_Balance WHERE balance_id = @id");
    return result.recordset[0];
};

export const createLeaveBalance = async (leaveBalance: NewLeave_Balance) => {
    const pool = await getPool();
    const result = await pool.request()
        .input("employee_id", leaveBalance.employee_id)
        .input("balance_days", leaveBalance.balance_days)
        .query("INSERT INTO Leave_Balance (employee_id, balance_days) VALUES (@employee_id, @balance_days)");
        return{ message: "Leave balance created successfully." , leaveBalance: result.recordset[0]};
};

export const updateLeaveBalance = async (id: number, leaveBalance: UpdateLeave_Balance) => {
    const pool = await getPool();
    await pool.request()
        .input("id", id)
        .input("employee_id", leaveBalance.employee_id)
        .input("balance_days", leaveBalance.balance_days)
        .query(`UPDATE Leave_Balance 
                SET employee_id = COALESCE(@employee_id, employee_id),  
                    balance_days = COALESCE(@balance_days, balance_days)
                WHERE balance_id = @id`);
    return { message: "Leave balance updated successfully." };
};

export const deleteLeaveBalance = async (id: number) => {
    const pool = await getPool();
    await pool.request()
        .input("id", id)
        .query("DELETE FROM Leave_Balance WHERE balance_id = @id");
    return { message: "Leave balance deleted successfully." };
}
