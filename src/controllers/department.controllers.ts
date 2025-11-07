import { Request, Response } from "express";
import {
  getDepartmentsService,
  createDepartmentService,
  updateDepartmentService,
  deleteDepartmentService,
} from "../services/department.services";

// READ - Get all departments
export const getDepartments = async (req: Request, res: Response) => {
  try {
    const departments = await getDepartmentsService();
    res.status(200).json(departments);
  } catch (error: any) {
    console.error("Error fetching departments:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// CREATE - Add new department
export const createDepartment = async (req: Request, res: Response) => {
  try {
    const { department_name } = req.body;

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

// UPDATE - Modify existing department
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

// DELETE - Remove a department
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
