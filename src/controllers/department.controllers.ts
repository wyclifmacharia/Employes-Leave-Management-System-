import { Request, Response } from "express";
import {
  getDepartmentsService,
  createDepartmentService,
  updateDepartmentService,
  deleteDepartmentService,
} from "../services/department.services";

<<<<<<< HEAD
// READ - Get all departments
=======
// GET all departments
>>>>>>> bf19a03a0b36ecfbb0bb85aa5c43f3e9c2c573ca
export const getDepartments = async (req: Request, res: Response) => {
  try {
    const departments = await getDepartmentsService();
    res.status(200).json(departments);
  } catch (error: any) {
    console.error("Error fetching departments:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

<<<<<<< HEAD
// CREATE - Add new department
=======
//  CREATE a new department
>>>>>>> bf19a03a0b36ecfbb0bb85aa5c43f3e9c2c573ca
export const createDepartment = async (req: Request, res: Response) => {
  try {
    const { department_name } = req.body;

<<<<<<< HEAD
=======
// GET department by ID
export const getDepartmentById = async (req: Request, res: Response) => {
  const { id } = req.params;

>>>>>>> bf19a03a0b36ecfbb0bb85aa5c43f3e9c2c573ca
    if (!department_name) {
      return res.status(400).json({ message: "Department name is required" });
    }

    await createDepartmentService(department_name);
    res.status(201).json({ message: "Department created successfully" });
  } catch (error) {
    console.error("Error creating department:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

<<<<<<< HEAD
// UPDATE - Modify existing department
=======
// UPDATE a department
>>>>>>> bf19a03a0b36ecfbb0bb85aa5c43f3e9c2c573ca
export const updateDepartment = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { department_name } = req.body;

    if (!department_name) {
      return res.status(400).json({ message: "Department name is required" });
    }

    await updateDepartmentService(parseInt(id), department_name);
    res.status(200).json({ message: "Department updated successfully" });
  } catch (error) {
    console.error("Error updating department:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

<<<<<<< HEAD
// DELETE - Remove a department
=======
// DELETE a department
>>>>>>> bf19a03a0b36ecfbb0bb85aa5c43f3e9c2c573ca
export const deleteDepartment = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await deleteDepartmentService(parseInt(id));
    res.status(200).json({ message: "Department deleted successfully" });
  } catch (error) {
    console.error("Error deleting department:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
