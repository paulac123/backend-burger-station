const pool = require("../db/pool");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const loginUser = async ({ email, password }) => {
  // 1. Verifica si el usuario existe
  const [data] = await pool.query("SELECT * FROM users WHERE email = ?", [
    email,
  ]);

  if (data.length === 0) {
    const error = new Error("Usuario no encontrado");
    error.status = 404;
    throw error;
  }

  const foundUser = data[0];

  // 2. Compara la contraseña
  const match = await bcrypt.compare(password, foundUser.password);

  if (!match) {
    const error = new Error("Contraseña incorrecta");
    error.status = 401;
    throw error;
  }

  // 3. Crea y retorna el token
  const token = jwt.sign(
    { id: foundUser.id, email: foundUser.email },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  return {
    token,
    user: { id: foundUser.id, email: foundUser.email, name: foundUser.name },
  };
};

module.exports = loginUser;
