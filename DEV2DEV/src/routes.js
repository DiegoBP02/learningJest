const { Router } = require("express");
const routes = Router();
const UserController = require("./controllers/userController");

routes.get("/health", (req, res) => {
  return res.send({ message: "Server is on!" });
});

routes.post("/users", UserController.insertUser);
routes.get("/users", UserController.selectUsers);

module.exports = routes;
