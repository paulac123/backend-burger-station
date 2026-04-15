const { Pool } = require("pg");

const connectionStr = process.env.DATABASE_URL || "postgresql://burger_db_ic5f_user:3OKzq6Djk0SiTnCDWRUHGfcv7yC9DoCU@dpg-d2n8rdf5r7bs73f8ktd0-a.oregon-postgres.render.com:5432/burger_db_ic5f?sslmode=require";

const pool = new Pool({
  connectionString: connectionStr,
  ssl: connectionStr.includes('render.com') ? { rejectUnauthorized: false } : false,
  max: 20,
  idleTimeoutMillis: 30000,
});

module.exports = pool;
