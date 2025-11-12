
import express from 'express'
import dotenv from 'dotenv';
import { getPool } from './db/config';

//import route later   
import employeesRoutes from './routers/employees.routes';   
import departmentRoutes from './routers/department.routes';
import leaveBalanceRoutes from './routers/leave_balance.routes';
import LeaveTypeRoutes from './routers/leave_types.routes';
import LeaveRequestRoutes from './routers/leave_request.routes';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

//register routes ie,

employeesRoutes(app);
leaveBalanceRoutes(app);
departmentRoutes(app);
LeaveTypeRoutes(app);
LeaveRequestRoutes(app);

// Basic test route
app.get("/", (req, res) => {
  res.send("Welcome to the Employee Leave Management System API");
});

// API routes
app.use("/api/departments", departmentRoutes);

// Start server
app.listen(PORT, () => {
  console.log(` Server running at http://localhost:${PORT}`);
});



