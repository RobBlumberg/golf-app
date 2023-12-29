const {
  getPlayers,
  getPlayer,
  insertPlayer,
} = require("../controllers/players");
const express = require("express");
const playerRouter = express.Router();

playerRouter.get("/", getPlayers);
playerRouter.get("/:id", getPlayer);
playerRouter.post("/", insertPlayer);

module.exports = playerRouter;
