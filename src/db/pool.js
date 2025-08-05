const mysql = require("mysql2/promise");
const config = require("../config/config");

const pool = mysql.createPool({
  host: config.host,
  user: config.user,
  password: config.password,
  database: config.database,
  port: config.port,
  waitForConnections: true,
  connectionLimit: 20,
  queueLimit: 0,
});
module.exports = pool;
