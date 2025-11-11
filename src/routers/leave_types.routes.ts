import  {Express} from "express";
import * as leaveTypeController from "../controllers/leave_types.controller";

const LeaveTypeRoutes = (app:Express) => {


    app.get("/", leaveTypeController.getLeaveTypes);
    app.get("/:id", leaveTypeController.getLeaveTypeById);
    app.post("/", leaveTypeController.createLeaveType);
    app.put("/:id", leaveTypeController.updateLeaveType);
    app.delete("/:id", leaveTypeController.deleteLeaveType);

}


 

export  default LeaveTypeRoutes;