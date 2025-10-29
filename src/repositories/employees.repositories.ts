//interaction with db 
import {pool} from "mssql";
import {getPool} from "../db/config";
import { NewEmployee,Employee,UpdateEmployee } from "../types/employess.types"; 

//create Employee
export const createEmployee = async (employee: Employee) => {
    const pool = await getPool();
    await pool
    .request()
    .input('first_name',employee.first_name)
    .input('last_name',employee.last_name)
    .input('email',employee.email)
    .input('date_joined',employee.date_joined )
    .input('role',employee.role)
    .input('passw',employee.hashed_pass)
    .input('dept',employee.department_id)
    .query('INSERT INTO Employees (first_name,last_name,email,date_joined,role,passw,dept_id)VALUES (@first_name,@last_name,@email,@date_joined,@role,@hashed_pass,department_id)');

    return {message:'employee creted sucefully '};
}

//delete employee 
export const updateEmployee = async (employee:Employee) => {


}





