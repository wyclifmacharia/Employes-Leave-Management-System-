
import express from 'express'
import dotenv from 'dotenv';
import { getPool } from './db/config';

//import route later   
import employeesRoutes from './routers/employees.routes';   
import departmentRoutes from './routers/department.routes';
import leaveBalanceRoutes from './routers/leave_balance.routes';
import LeaveTypeRoutes from './routers/leave_types.routes';
import LeaveRequestRoutes from './routers/leave_request.routes';

const app = express()

dotenv.config();
//middleware
app.use(express.json()); 

const port = process.env.PORT || 3000;

//register routes ie,

employeesRoutes(app);
leaveBalanceRoutes(app);
departmentRoutes(app);
LeaveTypeRoutes(app);
LeaveRequestRoutes(app);


//Root route
app.get('/', (req, res) => {
    res.send("Hello, express API is running...");
});

app.listen(port, () => {
    console.log(`Server is running on port: http://localhost:${port}`);
})

//test database connection
getPool()
    .then(() => console.log("Database connected"))
    .catch((err: any) => console.log("Database connection failed: ", err));

