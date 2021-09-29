import request from "supertest";

import { app, task1Object } from "../index.js";

describe("Server", () => {
  test("GET /", async () => {
    await request(app)
      .get("/")
      .expect(200)
  });

  test("GET /testing-json", async () => {
    await request(app)
      .get("/testing-json")
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(response => {
        expect(JSON.parse(response.text)).toEqual(task1Object);
      })

  });

  test("GET /vehicles", async () => {
    await request(app)
      .get("/vehicles")
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(response => {
        expect(response.text).toMatchSnapshot();
      })

  });

  describe("GET /vehicles/id", ()=>{
    test("GET /vehicles/1", async () => {
      await request(app)
        .get("/vehicles/1")
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .then(response => {
          expect(response.text).toMatchSnapshot();
        })

    });

    test("GET /vehicles/2", async () => {
      await request(app)
        .get("/vehicles/2")
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .then(response => {
          expect(response.text).toMatchSnapshot();
        })

    });

    test("GET /vehicles/3", async () => {
      await request(app)
        .get("/vehicles/3")
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .then(response => {
          expect(response.text).toMatchSnapshot();
        })

    });

    test("GET /vehicles/4", async () => {
      await request(app)
        .get("/vehicles/4")
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .then(response => {
          expect(response.text).toMatchSnapshot();
        })

    });

    test("GET /vehicles/100", async () => {
      await request(app)
        .get("/vehicles/100")
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .then(response => {
          expect(response.text).toMatchSnapshot();
        })
    });
  })

  test("POST /secret-code - correct password", async ()=> {
    const today = new Date();

    await request(app)
      .post('/secret-code')
      .send({password: `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}-emperor-is-awesome`})
      .set('Accept', 'application/json')
      .expect(200)
      .then(response => {
        expect(response.text).toMatchSnapshot();
      })
  })

  test("POST /secret-code - incorrect password", async ()=> {
    const today = new Date();

    await request(app)
      .post('/secret-code')
      .send({password: `imperium is the best`})
      .set('Accept', 'application/json')
      .expect(200)
      .then(response => {
        expect(response.text).toMatchSnapshot();
      })
  })
});