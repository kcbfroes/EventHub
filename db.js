const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.USER,
  host: "localhost",
  database: "eventhub_db",
  password: "",
  port: 5432,
});

module.exports = pool;
