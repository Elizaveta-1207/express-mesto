const fs = require("fs");
const path = require("path");

const cardsRouter = require("express").Router();

const cardsDataPath = path.join("./data", "cards.json");

cardsRouter.get("/cards", (req, res) => {
  fs.readFile(cardsDataPath, { encoding: "utf8" }, (err, data) => {
    if (err) {
      res.status(404).send({ message: "Запрашиваемый ресурс не найден" });
      return;
    }
    const cards = JSON.parse(data);
    res.send(cards);
  });
});

module.exports = cardsRouter;
