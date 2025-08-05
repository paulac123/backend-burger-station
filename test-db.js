const pool = require("./src/db/pool");

(async () => {
  try {
    const [rows] = await pool.query("SELECT 1");
    console.log("✅ Conectado a la base de datos:", rows);
  } catch (error) {
    console.error("❌ Error al conectar con la base de datos:", error);
  }
})();
