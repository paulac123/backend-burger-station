const { Pool } = require("pg");

const connectionStr = process.env.DATABASE_URL;

const pool = new Pool({
  connectionString: connectionStr,
  ssl: connectionStr.includes('render.com') ? { rejectUnauthorized: false } : false,
  max: 20,
  idleTimeoutMillis: 30000,
});

module.exports = pool;
