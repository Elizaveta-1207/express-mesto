const cardsRouter = require("express").Router();

const {
  getCards,
  createCard,
  deleteCard,
  likeCard,
  dislikeCard,
} = require("../controllers/cards");

cardsRouter.get("/", getCards);
cardsRouter.post("/", createCard);
cardsRouter.delete("/:_id", deleteCard);
cardsRouter.put("/:_id/likes", likeCard);
cardsRouter.delete("/:_id/likes", dislikeCard);

module.exports = cardsRouter;
