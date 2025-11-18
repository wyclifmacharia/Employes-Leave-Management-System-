
import express from 'express'
import dotenv from 'dotenv';
import { getPool } from './db/config';
import cors from 'cors';

//import route later   
import employeesRoutes from './routers/employees.routes';   
import departmentRoutes from './routers/department.routes';
import leaveBalanceRoutes from './routers/leave_balance.routes';
import LeaveTypeRoutes from './routers/leave_types.routes';
import LeaveRequestRoutes from './routers/leave_request.routes';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

//middleware
    app.use(express.json()); //parse json request body
    app.use(cors({
        origin: "http://localhost:5173",
        methods: ["GET", "POST", "PUT", "DELETE"],
    }))

//register routes 

employeesRoutes(app);
leaveBalanceRoutes(app);
departmentRoutes(app);
LeaveTypeRoutes(app);
LeaveRequestRoutes(app);


// test db connection 
getPool()
    .then(() => console.log("Database connected"))
    .catch((err: any) => 
    console.log("Database connection failed: ", err));
// Start server
app.listen(PORT, () => {
    console.log(` Server running at http://localhost:${PORT}`);
});



