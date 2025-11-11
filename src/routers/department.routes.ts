import express from "express";
import {
  getDepartments,
  createDepartment,
  updateDepartment,
  deleteDepartment,
} from "../controllers/department.controllers";

const router = express.Router();

router.get("/", getDepartments); // GET all
router.post("/", createDepartment); // CREATE
router.put("/:id", updateDepartment); // UPDATE
router.delete("/:id", deleteDepartment); // DELETE

export default router;
