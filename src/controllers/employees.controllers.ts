// Employee Controller
import  { Request, response, Response } from 'express';
import  * as employeeService from'../services/employees.services';
import { Employee} from '../types/employess.types';   
import { error } from 'console';

//create Employee
export const createEmployee = async (req: Request, res: Response) => {

    try{
        const employee = req.body;
        console.log( employee);
        const result = await employeeService.createEmployee(employee);
        res.status(201).json(result);
        
    }catch (error:any ) {
        res.status(500).json({ error:error .message });
        //console.log(error);
    }

};

// deletee employee
 export const deleteEmployee = async(req:Request,res:Response) => {

    const id =parseInt(req.params.employee_id);
//bad req if  id aint a nomber
    if(isNaN(id)){
        return res.status(400).json({ message:'invalid Employee id' });

    }
    //else proceed 
    try{

        const result = await employeeService.deleteEmployee(id);
        res.status(200).json(result)

    }catch(error:any){

        //if Employee doesnt exist
        if(error.message ==='Employee not found '){
            return res.status(401).json({ message:'Employee not found '})

        }else{
            res.status(500).json({ error:error.message });
            console.log(error.message);


        }


    }


 }

//get employee by id 
export const getEmployeeById = async (req: Request, res: Response) => {

        const id =parseInt(req.params.employee_id);
    try{
        const employee = await employeeService.getEmployeeById(id);
        if(employee){
            res.status(200).json(employee);
        } else {
            res.status(404).json({message: 'Employee not found'});
            console.log(error);
        }

    } catch (error:any) {
        res.status(500).json({ error: error.message });
    }

};
//list all employees
export const getAllEmployees = async (req: Request, res: Response) => {

    try {
        const employees = await employeeService.getAllEmployees();
        res.status(200).json(employees);
    } catch (error:any ) {
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




