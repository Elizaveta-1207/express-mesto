const fs = require("fs");
const path = require("path");

const usersRouter = require("express").Router();

const usersDataPath = path.join("./data", "users.json");

usersRouter.get("/users", (req, res) => {
  fs.readFile(usersDataPath, { encoding: "utf8" }, (err, data) => {
    if (err) {
      res.status(404).send({ message: "Запрашиваемый ресурс не найден" });
      return;
    }
    const users = JSON.parse(data);
    res.send(users);
  });
});

usersRouter.get("/users/:_id", (req, res) => {
  fs.readFile(usersDataPath, { encoding: "utf8" }, (err, data) => {
    if (err) {
      res.status(404).send({ message: "Запрашиваемый ресурс не найден" });
      return;
    }

    const users = JSON.parse(data);
    const user = users.find((item) => item._id === req.params._id);

    if (!user) {
      res.status(404).send({
        message: "Нет пользователя с таким id",
      });
      return;
    }
    res.send(user);
  });
});

module.exports = usersRouter;