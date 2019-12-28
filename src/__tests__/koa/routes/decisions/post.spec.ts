import faker from 'faker';
import request from 'supertest';
import { app } from '~koa/app';

describe("/decisions post requests", () => {
  it("should create a new decision with title", async () => {
    const title = faker.lorem.words(4);
    const res = await request(app.callback())
      .post("/decisions")
      .send({ title });
    expect(res.status).toEqual(200);
    expect(res.body).toHaveProperty("id");
    expect(res.body).toHaveProperty("decision");
    expect(res.body.decision.title).toEqual(title);
  });
});
