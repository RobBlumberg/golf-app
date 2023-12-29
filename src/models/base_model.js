knexConfig = require("../database/knexfile");
const knex = require("knex")(knexConfig[process.env.NODE_ENV]);
const { Model } = require("objection");

Model.knex(knex);

class BaseModel extends Model {
  static get tableName() {
    return "";
  }
}

module.exports = BaseModel;
