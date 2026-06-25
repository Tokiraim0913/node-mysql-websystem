const environment = "development";
const config = require("../knexfile.js")[environment];
const knex = require("knex")(config);

knex("tasks").select("*");

module.exports = knex;