import  express  from "express";
import * as leaveTypeController from "../controllers/leave_types.controller";

const router = express.Router();


    router.get("/", leaveTypeController.getLeaveTypes);
    router.get("/:id", leaveTypeController.getLeaveTypeById);
    router.post("/", leaveTypeController.createLeaveType);
    router.put("/:id", leaveTypeController.updateLeaveType);
    router.delete("/:id", leaveTypeController.deleteLeaveType);


export default router;