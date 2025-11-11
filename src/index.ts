
import express from 'express'
import dotenv from 'dotenv';
import { getPool } from './db/config';
import departmentRoutes from './routers/department.routes'; 
import employeesRoutes from './routers/employees.routes'; 
import leaveTypeRouter from './routers/leave_types.routes';  

const app = express()

dotenv.config();
//middleware
app.use(express.json()); 

const port = process.env.PORT || 3000;

//register routes ie,
app.use('/api/departments', departmentRoutes)
app.use('/api/leave-types', leaveTypeRouter)
employeesRoutes(app);


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

