import { Express } from "express";
import * as leaveController from "../controllers/leave_request.controllers";
 import { authenticate, authorize } from "../middleware/bear_auth";



 const LeaveRequestRoutes = (app: Express) => {

  // EMPLOYEE routes (must be authenticated)
  app.post("/CreateLeaveReq", authenticate, leaveController.createLeaveRequest); // Create a new leave request
  app.get("/GetLeavReq/:employee_id", authenticate, leaveController.getMyLeaveRequests);// Get logged-in employee's requests by  employeee_id
  app.get("/MyBal/:employee_id", authenticate, leaveController.getMyBalance); // Get employee leavebalance bt employee_
  app.delete("/:request_id/cancel", authenticate, leaveController.cancelLeaveRequest); // Cancel a pending request

  // ADMIN / MANAGER routes
  app.get("/pending", authenticate, authorize(["Manager","Admin"]), leaveController.getPendingRequests); // Get pending requests
  app.get("/leaveReq", authenticate, authorize(["Admin"]), leaveController.getAllRequests);             // Get all leave requests
  app.get("/ReqById/:request_id", authenticate, authorize(["Admin","Manager"]), leaveController.getLeaveRequestById); // Get specific request by ID
  app.patch("/:request_id/approve", authenticate, authorize(["Manager","Admin"]), leaveController.approveLeaveRequest); // Approve request
  app.patch("/:request_id/reject", authenticate, authorize(["Manager","Admin"]), leaveController.rejectLeaveRequest);   // Reject request

  // Notifications
  app.get("/notifications/my", authenticate, leaveController.getMyNotifications);   // Employee notifications
  app.get("/notifications", authenticate, authorize(["Admin"]), leaveController.getAllNotifications); // Admin all notifications
  app.delete("/notifications/:notification_id", authenticate, leaveController.deleteNotification); // Delete a notification
}

export default LeaveRequestRoutes;

// const  LeaveRequestRoutes = (app: Express) => {

// // EMPLOYEE routes
// app.post("/CreateLeaveReq", leaveController.createLeaveRequest); // Create a new leave request
// app.get("/GetLeavReq", leaveController.getMyLeaveRequests);     // Get logged-in employee's requests
// app.get("/MyBal", leaveController.getMyBalance);          // Get employee leave balance
// app.delete("/:request_id/cancel", leaveController.cancelLeaveRequest); // Cancel a pending request

// // ADMIN / MANAGER routes
// app.get("/pending", leaveController.getPendingRequests);       // Get pending requests
// app.get("/leaveReq", leaveController.getAllRequests);                  // Get all leave requests
// app.get("/ReqById/:request_id", leaveController.getLeaveRequestById);  // Get specific request by ID
// app.patch("/:request_id/approve", leaveController.approveLeaveRequest); // Approve request
// app.patch("/:request_id/reject", leaveController.rejectLeaveRequest);   // Reject request

// // Notifications
// app.get("/notifications/my", leaveController.getMyNotifications);   // Employee notifications
// app.get("/notifications", leaveController.getAllNotifications);     // Admin all notifications
// app.delete("/notifications/:notification_id", leaveController.deleteNotification); // Delete a notification







// }

// export default LeaveRequestRoutes;