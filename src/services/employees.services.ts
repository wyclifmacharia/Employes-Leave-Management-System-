//business logic 
import * as employessRepositories from '../repositories/employees.repositories'
import { NewEmployee,Employee  } from '../types/employess.types';
import jwt from 'jsonwebtoken';
import bcrypt from "bcrypt"
import dotenv from 'dotenv';
//import { sendEmail } from '../mailer/mailers';
//import { emailTemplate } from '../mailer/email_templates';

dotenv.config();

//creating users 

export const createEmployee = async(employee: Employee) => {

    if(employee.hashed_pass){

        employee.hashed_pass =await  bcrypt.hash(employee.hashed_pass, 10)
        console.log (employee.hashed_pass)
    }




}