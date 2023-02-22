const users = require("../../database");
const { v4: uuidv4 } = require("uuid");

function insertUser(req, res) {
  const { name, age } = req.body;

  if (!name || !age) {
    return res.status(404).json({ message: "Name and age is required!" });
  }

  const user = {
    id: uuidv4(),
    name,
    age,
  };

  users.push(user);

  delete user.id;

  return res.status(200).json(user);
}

function selectUsers(req, res) {
  const { initialAge, finalAge } = req.query;

  let usersFiltered = users;
  if (initialAge && finalAge) {
    usersFiltered = users.filter(
      (user) => user.age >= initialAge && user.age <= finalAge
    );
  }

  return res.status(200).json(usersFiltered);
}

function deleteUser(req, res) {}

function updateUser(req, res) {}

module.exports = { insertUser, selectUsers, deleteUser, updateUser };
