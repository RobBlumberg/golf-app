const { getPlayers, getPlayer } = require("../controllers/players");
const express = require("express");
const playerRouter = express.Router();

playerRouter.get("/", getPlayers);
playerRouter.get("/:id", getPlayer);

module.exports = playerRouter;
