//business logic 
import * as employessRepositories from '../repositories/employees.repositories'
import { NewEmployee,Employee, UpdateEmployee  } from '../types/employess.types';
import jwt from 'jsonwebtoken';
import bcrypt from "bcrypt"
import dotenv from 'dotenv';
import { zstdCompress } from 'zlib';
//import { sendEmail } from '../mailer/mailers';
//import { emailTemplate } from '../mailer/email_templates';

dotenv.config();

//CREATING THE EMPLOYEEEEE

export const createEmployee = async(employee: NewEmployee) => {

    if(employee.hashed_pass){

       employee.hashed_pass =await  bcrypt.hash(employee.hashed_pass, 10)
        console.log (employee.hashed_pass)
     }
const result = await employessRepositories.createEmployee(employee);
return { message: 'user created successfully' }


}

//DELETING THE EMPLOYEEEEE
export const deleteEmployee= async(employee_id: number) => {
    await ensureEmployeeExists(employee_id);
    return await employessRepositories.deleteEmployee(employee_id);

}
//GETING EMPLOYEE BY ID
export const getEmployeeById = async (employee_id:number) =>await employessRepositories.getEmployeeById(employee_id);


//list all employess
export const listEmployee = async (employee_id:number ) => {



}

//updating the Employee

export const updateEmployee = async(employee_id:number, employee: UpdateEmployee) => {


    await ensureEmployeeExists(id);
    return await employessRepositories.updateEmployee(id)


}
//Reusable function to check if user exists
const ensureEmployeeExists = async (employee_id: number) => {
    const employee = await employessRepositories.getEmployeeById(employee_id);
    if (!employee) {
        throw new Error('Employee not found');
    }
    return employee;
}





