const request = require("supertest");
const { expect } = require("chai");
const app = require("../src/app");

describe("GET /accounts/:id", () => {
  it("should return an existing account by ID.", async () => {
    const newAcc = await request(app)
      .post("/accounts")
      .send({ name: "Jose Biden", email: "jb@gmail.com" });
    const id = newAcc.body.id;

    const res = await request(app).get(`/accounts/${id}`);
    expect(res.status).to.equal(200);
    expect(res.body.id).to.equal(id);
    expect(res.body.name).to.equal(newAcc.body.name);
    expect(res.body.email).to.equal(newAcc.body.email);
  });
});
