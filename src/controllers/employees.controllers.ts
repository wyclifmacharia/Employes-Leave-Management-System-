// Employee Controller
import  { Request, response, Response } from 'express';
import  * as employeeService from'../services/employees.services';
import { Employee} from '../types/employess.types';   

//create Employee
export const createEmployee = async (req: Request, res: Response) => {

    try{
        const employee = req.body;
        const result = await employeeService.createEmployee(employee);
        res.status(201).json(result);
        
    }catch (error) {
        res.status(500).json({ error: error.message });
    }

    // 


};
//verify employee email
// export const verifyUser = async (req: Request, res: Response) => {
//     try {
//         const { email, code } = req.body;

//         if (!email || !code) {
//             return res.status(400).json({ message: 'Email and code are required' });
//         }
//         const result = await userServices.verifyUser(email, code);
//         res.status(200).json(result);
//     } catch (error: any) {
//         if (error.message === 'User not found') {
//             res.status(404).json({ message: error.message });
//         } else if (error.message === 'Invalid verification code') {
//             res.status(400).json({ message: error.message });
//         } else {
//             res.status(500).json({ error: error.message });
//         }
//     }
// }



//list all employees
export const getAllEmployees = async (req: Request, res: Response) => {
    try {
        const employees = await employeeService.getAllEmployees();
        res.status(200).json(employees);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//get employee by id 

export const getEmployeeById = async (req: Request, res: Response) => {
        const id =perseInt(req.params.employee_id);
    try{
        const employee = await employeeService.getEmployeeById(id);
        if(employee){
            res.status(200).json(employee);
        } else {
            res.status(404).json({message: 'Employee not found'});
        }

    } catch (error:any) {
        res.status(500).json({ error: error.message });
    }

};
//update employee

export const UpdateEmployee = async(req:Request, res :Response)=>{
    const id = parseInt(req.params.employee_id);
    //bad req if employee_id  not found 

    if (isNaN(id)){
        return res.status(400).json({message:'invalid employee_id '})

    }
    //proced to update 

    try {
        const employee = req.body;
        const result = await employeeService.UpdateEmployee(id,employee);
        res.status(200).json(result)
       
        
    } catch (error: any) {
       if(error.message ==='Employee not found '){
        return res .status(404).json({message:'User not found '})

       }else {
        return res.status(500).json({error:error.message})

       }
    }
};
// deletee employee
export const delete




