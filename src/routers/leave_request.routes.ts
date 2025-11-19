import { Express } from "express";
import * as leaveController from "../controllers/leave_request.controllers";
 import { authenticate, authorize } from "../middleware/bear_auth";



 const LeaveRequestRoutes = (app: Express) => {

  // EMPLOYEE routes (must be authenticated)
  app.post("/CreateLeaveReq", authenticate, leaveController.createLeaveRequest); // Create a new leave request
  app.get("/GetLeavReq/:employee_id", authenticate, leaveController.getMyLeaveRequests);// Get logged-in employee's requests by  employeee_id
  app.get("/MyBal/:employee_id", authenticate, leaveController.getMyBalance); // Get employee leavebalance by employee_id
  app.delete("/:request_id/cancel", authenticate, leaveController.cancelLeaveRequest); // Cancel a pending request

  // ADMIN / MANAGER 
  // Get pending requests
  app.get("/api/pending", authenticate, authorize(['manager', 'admin']), leaveController.getPendingRequests); 
  // Get all leave requests
  app.get("/api/leaveReq", authenticate, authorize(["admin"]), leaveController.getAllRequests);   
   // Get specific request by ID
  app.get("/ReqById/:request_id", authenticate, authorize(["admin","manager"]), leaveController.getLeaveRequestById); 
  // Approve request
  app.patch("/:request_id/approve", authenticate, authorize(["admin"]), leaveController.approveLeaveRequest);
  // Reject request
  app.patch("/:request_id/reject", authenticate, authorize(["manager","admin"]), leaveController.rejectLeaveRequest); 


  // Notifications
  app.get("/notifications/my", authenticate, leaveController.getMyNotifications);   // Employee notifications
  app.get("/notifications", authenticate, authorize(["admin"]), leaveController.getAllNotifications); // Admin all notifications
  app.delete("/notifications/:notification_id", authenticate, leaveController.deleteNotification); // Delete a notification
 
  
}

export default LeaveRequestRoutes;