import { Express } from "express";  
import * as employeesControllers from "../controllers/employees.controllers";

 const employeesRoutes =(app: Express) => {
  
    app.post("/addEmployees", employeesControllers.createEmployee);
    // app.put("/users/:id", userController.updateUser);
    // app.delete("/users/:id", userController.deleteUser);
    // app.post("/login", userController.loginUser);
    // app.post("/verify", userController.verifyUser);
    // app.get("/users", userController.getAllUsers);
    // app.get("/users/:id", userController.getUserById);

 };

 export default employeesRoutes;