import request from "supertest";
import app from "../../src/index.ts"; // your Express app
import { getPool } from "../../src/db/config.ts";

describe("Department Integration Tests", () => {
  let pool: any;

  beforeAll(async () => {
    pool = await getPool();
    // create a test department
    await pool.request().query(`INSERT INTO Department (department_name) VALUES ('Test Dept')`);
  });

  afterAll(async () => {
    // cleanup test data
    await pool.request().query(`DELETE FROM Department WHERE department_name = 'Test Dept'`);
  });

  it("GET /departments should return all departments", async () => {
    const res = await request(app).get("/departments");
    expect(res.status).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });

  it("POST /departments should create a new department", async () => {
    const res = await request(app).post("/departments").send({ department_name: "New Dept" });
    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty("department_id");
  });
});
