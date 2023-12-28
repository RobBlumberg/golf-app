const playerList = [
  { id: 1, name: "Rob", age: 26 },
  { id: 2, name: "Borse", age: 26 },
  { id: 3, name: "Pierre", age: 26 },
];

function getPlayers(req, res, next) {
  try {
    return res.send(playerList);
  } catch (error) {
    console.log("Error");
    next(error);
  }
}

function getPlayer(req, res, next) {
  try {
    const id = parseInt(req.params.id);
    const player = playerList.find((p) => p.id === id);

    if (!player) {
      return res.status(404).send({ message: "Player not found" });
    }
    return res.send(player);
  } catch (error) {
    console.log("Error");
    next(error);
  }
}

module.exports = {
  getPlayers,
  getPlayer,
};
