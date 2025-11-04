
import { Express } from "express";
import * as leaveTypeController from "../controllers/leave_types.controller";

const leaveTypeRoutes = (app: Express) => {
    app.get("/leave-types", leaveTypeController.getLeaveTypes);
    app.get("/leave-types/:id", leaveTypeController.getLeaveTypeById);
    app.post("/leave-types", leaveTypeController.createLeaveType);
    app.put("/leave-types/:id", leaveTypeController.updateLeaveType);
    app.delete("/leave-types/:id", leaveTypeController.deleteLeaveType);
};

export default leaveTypeRoutes;