const pool = require("../db/pool");

describe("Prueba de conexión a Postgres", () => {
  test("Debe conectarse y devolver la fecha actual", async () => {
    const result = await pool.query("SELECT NOW()");
    expect(result.rows.length).toBe(1);
  });
  afterAll(async () => {
    await pool.end(); // cierra todas las conexiones abiertas
  });
});
