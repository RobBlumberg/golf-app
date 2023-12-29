const Player = require("../models/players");

async function getPlayers(req, res, next) {
  try {
    const players = await Player.query();
    return res.json(players);
  } catch (error) {
    console.log("Error");
    next(error);
  }
}

async function getPlayer(req, res, next) {
  try {
    const id = parseInt(req.params.id);
    const player = await Player.query().findById(id);

    if (!player) {
      return res.status(404).send({ message: "Player not found" });
    }
    return res.json(player);
  } catch (error) {
    console.log("Error");
    next(error);
  }
}

async function insertPlayer(req, res, next) {
  try {
    const { name } = req.body;
    const player = await Player.query().insert({ name });
    return res.status(201).json(player);
  } catch (error) {
    console.log("Error");
    next(error);
  }
}

module.exports = {
  getPlayers,
  getPlayer,
  insertPlayer,
};
