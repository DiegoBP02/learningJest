const app = require("../../server");
const request = require("supertest");
const {
  userData,
  wrongUserData,
  listDatabase,
  listDatabaseWithFilter,
} = require("./mocks");

describe("Rota de cadastro de usuário", () => {
  test("Cadastro usuário1 com body correto", async () => {
    const res = await request(app).post("/users").send(userData);

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(userData);
  });

  test("Cadastro usuário2 com body correto", async () => {
    const newUser = { ...userData };
    newUser.name = "Pedro";
    newUser.age = 10;
    const res = await request(app).post("/users").send(newUser);

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(newUser);
  });

  test("Cadastro usuário com body inválido", async () => {
    const res = await request(app).post("/users").send(wrongUserData);

    expect(res.statusCode).toEqual(404);
    expect(res.body).toHaveProperty("message");
  });
});

describe("Rota de listagem de usuário", () => {
  test("Listando sem filtros", async () => {
    const res = await request(app).get("/users");
    expect(res.body).toEqual(listDatabase);
  });

  test("Listando com filtros", async () => {
    const res = await request(app).get("/users?initialAge=11&finalAge=33");
    expect(res.body).toEqual(listDatabaseWithFilter);
  });
});
