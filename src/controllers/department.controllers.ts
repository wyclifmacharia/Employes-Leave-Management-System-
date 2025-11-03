import { Request, Response } from 'express';
import { getPool } from '../db/config';

// ✅ GET all departments
export const getDepartments = async (req: Request, res: Response) => {
  try {
    const pool = await getPool();
    const result = await pool.request().query('SELECT * FROM Departments');
    res.status(200).json(result.recordset);
  } catch (err: any) {
    console.error('Error fetching departments:', err);
    res.status(500).json({ message: 'Error fetching departments', error: err.message });
  }
};

// ✅ CREATE a new department
export const createDepartment = async (req: Request, res: Response) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: 'Department name is required' });
  }

  try {
    const pool = await getPool();
    await pool
      .request()
      .input('name', name)
      .query('INSERT INTO Departments (department_name) VALUES (@name)');
    res.status(201).json({ message: 'Department created successfully' });
  } catch (err: any) {
    console.error('Error creating department:', err);
    res.status(500).json({ message: 'Error creating department', error: err.message });
  }
};

// ✅ GET department by ID
export const getDepartmentById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const pool = await getPool();
    const result = await pool
      .request()
      .input('id', id)
      .query('SELECT * FROM Departments WHERE department_id = @id');

    if (result.recordset.length === 0) {
      return res.status(404).json({ message: 'Department not found' });
    }

    res.status(200).json(result.recordset[0]);
  } catch (err: any) {
    console.error('Error fetching department:', err);
    res.status(500).json({ message: 'Error fetching department', error: err.message });
  }
};

// ✅ UPDATE a department
export const updateDepartment = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name } = req.body;

  try {
    const pool = await getPool();
    await pool
      .request()
      .input('id', id)
      .input('name', name)
      .query('UPDATE Departments SET department_name = @name WHERE department_id = @id');

    res.status(200).json({ message: 'Department updated successfully' });
  } catch (err: any) {
    console.error('Error updating department:', err);
    res.status(500).json({ message: 'Error updating department', error: err.message });
  }
};

// ✅ DELETE a department
export const deleteDepartment = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const pool = await getPool();
    await pool.request().input('id', id).query('DELETE FROM Departments WHERE department_id = @id');
    res.status(200).json({ message: 'Department deleted successfully' });
  } catch (err: any) {
    console.error('Error deleting department:', err);
    res.status(500).json({ message: 'Error deleting department', error: err.message });
  }
};
