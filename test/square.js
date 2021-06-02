const request = require("supertest");
const app = require("../src/index");

describe('Api testing', () => {

  it("Find largest square", (done) => {
    request(app).get("/find-square?area=12").expect(200, done);
  })
})   
