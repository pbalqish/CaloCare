// const request = require("supertest");
// const app = require("../app");
// const { User } = require("../models");

// afterAll((done) => {
//   User.destroy({ truncate: true, cascade: true, restartIdentity: true })
//     .then((_) => {
//       done();
//     })
//     .catch((err) => {
//       done(err);
//     });
// });

// describe("User Test", () => {
//   describe("POST /register", () => {
//     describe("Success Register", () => {
//       test("should return an object with status code 201", (done) => {
//         const user = {
//           fullName: "test 1",
//           email: "test1@mail.com",
//           password: "12345678",
//         };

//         request(app)
//           .post("/register")
//           .send(user)
//           .end((err, res) => {
//             if (err) return done(err);
//             const { body, status } = res;

//             expect(status).toBe(201);
//             expect(body).toHaveProperty("fullName", user.fullName);
//             expect(body).toHaveProperty("email", user.email);
//             return done();
//           });
//       });
//     });

//     //  describe("Failed Register", () => {});
//   });
// });
