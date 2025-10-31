//interaction with db 
import {pool} from "mssql";
import {getPool} from "../db/config";
import { NewEmployee,Employee,UpdateEmployee } from "../types/employess.types"; 
import { promises } from "dns";

//create Employee
export const createEmployee = async (employee: NewEmployee) => {
    const pool = await getPool();
    await pool
    .request()
    .input('first_name',employee.first_name)
    .input('last_name',employee.last_name)
    .input('email',employee.email)
    .input('date_joined',employee.date_joined )
    .input('role',employee.role)
    .input('hashed_pass',employee.hashed_pass)
    .input('department_id',employee.department_id)
    .query('INSERT INTO Employees (first_name,last_name,email,date_joined,role,hashed_pass,department_id) VALUES (@first_name,@last_name,@email,@date_joined,@role,@hashed_pass,department_id)')

    return {message:'employee created sucefully '};
}

//delete employee 
export const deleteEmployee = async (employee_id:number) => {
    const pool = await getPool();
    await pool
    .request()
    .input('employee_id',employee_id)
    .query('DELETE FROM Employees WHERE employee_id = @employee_id')

      return{message:"Employee deleted suceffuly "};



}
//get employee by id
export const getEmployeeById = async (employee_id:number):Promise <Employee[]> => {
    const pool = await getPool();
    const result= await pool
    .request()
    .input('employee_id',employee_id)
    .query('SELECT * FROM Employees WHERE employee_id = @employee_id');
    return result.recordset[0];


}
//list all employes 







