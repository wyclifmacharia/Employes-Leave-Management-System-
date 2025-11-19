import express from "express";
import dotenv from "dotenv";
import departmentRoutes from "./routers/department.routes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Basic test route
app.get("/", (req, res) => {
  res.send("Welcome to the Employee Leave Management System API");
<<<<<<< HEAD
});

// API routes
app.use("/api/departments", departmentRoutes);

// Start server
app.listen(PORT, () => {
  console.log(` Server running at http://localhost:${PORT}`);
});

export default app;
=======
});

// API routes
app.use("/api/departments", departmentRoutes);

// Start server
app.listen(PORT, () => {
  console.log(` Server running at http://localhost:${PORT}`);
});


>>>>>>> bf19a03a0b36ecfbb0bb85aa5c43f3e9c2c573ca

