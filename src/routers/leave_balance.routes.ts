import { Express}  from "express";
import * as leaveBalanceController from "../controllers/leave_balance.controllers";

const leaveBalanceRouter = (app: Express) => {
  app.get("/leave-balances", leaveBalanceController.getAllLeaveBalances);
  app.get("/leave-balances/:id", leaveBalanceController.getLeaveBalanceById);
  app.post("/leave-balances", leaveBalanceController.createLeaveBalance);
  app.put("/leave-balances/:id", leaveBalanceController.updatedLeaveBalance);
  app.delete("/leave-balances/:id", leaveBalanceController.deleteLeaveBalance);
};

export default leaveBalanceRouter;