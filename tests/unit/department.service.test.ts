import { getDepartmentById } from "../../src/services/department.services.ts";

describe("Department Service Unit Tests", () => {
  it("should return a department when a valid id is provided", async () => {
    const department = await getDepartmentById(1);
    expect(department).toHaveProperty("department_id");
    expect(department).toHaveProperty("department_name");
  });

  it("should throw an error when department is not found", async () => {
    await expect(getDepartmentById(999)).rejects.toThrow("Department not found");
  });
});
