import request from 'supertest';
import { app } from '~koa/app';

describe("/decisions post requests", () => {
  it("should create a new decision with title", async () => {
    const res = await request(app.callback())
      .post("/decisions")
      .send({ title: "new decision" });
    expect(res.status).toEqual(200);
    expect(res.body).toHaveProperty("decision");
  });
});
