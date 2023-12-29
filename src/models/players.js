const BaseModel = require("./base_model");

class Player extends BaseModel {
  static get tableName() {
    return "players";
  }

  static get idcolumn() {
    return "id";
  }
}

module.exports = Player;
