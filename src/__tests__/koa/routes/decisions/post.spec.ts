import { app } from 'src/koa/server';
import request from 'supertest';

describe("/decisions post requests", () => {
  it("should create a new decision with title", async () => {
    const res = await request(app)
      .post("/decisions")
      .send({ title: "new decision" });
    expect(res.status).toEqual(200);
    expect(res.body).toHaveProperty("decicion");
  });
});
