const { Pool } = require("pg");

const pool = new Pool({
  host: "dpg-d2n8rdf5r7bs73f8ktd0-a.oregon-postgres.render.com",
  user: "burger_db_ic5f_user",
  password: "3OKzq6Djk0SiTnCDWRUHGfcv7yC9DoCU",
  database: "burger_db_ic5f",
  port: 5432,
  max: 20,
  idleTimeoutMillis: 30000,
  ssl: {
    rejectUnauthorized: false, // esto permite conexión con Render
  },
});

module.exports = pool;
