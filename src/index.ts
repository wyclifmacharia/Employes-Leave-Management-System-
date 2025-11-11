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
});

// API routes
app.use("/api/departments", departmentRoutes);

// Start server
app.listen(PORT, () => {
  console.log(` Server running at http://localhost:${PORT}`);
});



