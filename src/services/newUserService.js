const pool = require("../db/pool");
const bcrypt = require("bcrypt");

class UserService {
  async findByEmail(email) {
    const [rows] = await pool.query("SELECT * FROM users WHERE email = ?", [
      email,
    ]);
    return rows[0]; // null si no existe
  }

  async addUser(data) {
    const { name, email, password } = data;

    // Verificar si ya existe un usuario con ese email
    const existingUser = await this.findByEmail(email);
    if (existingUser) {
      throw new Error("El correo ya está registrado");
    }

    // Hashear la contraseña
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(String(password), saltRounds);

    // Insertar nuevo usuario
    const query = `INSERT INTO users (name, email, password) VALUES (?, ?, ?)`;
    const [results] = await pool.query(query, [name, email, hashedPassword]);

    return {
      id: results.insertId,
      name,
      email,
    };
  }
}

module.exports = UserService;
