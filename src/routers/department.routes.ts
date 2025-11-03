import express from 'express';
import {
  getDepartments,
  createDepartment,
  getDepartmentById,
  updateDepartment,
  deleteDepartment
} from '../controllers/department.controllers';

const router = express.Router();

// CRUD routes
router.get('/', getDepartments);
router.post('/', createDepartment);
router.get('/:id', getDepartmentById);
router.put('/:id', updateDepartment);
router.delete('/:id', deleteDepartment);

export default router;

