const pool = require("../db/pool");

const getMenu = async () => {
  const [rows] = await pool.query("SELECT * FROM products");
  return rows;
};

const getProductByCategory = async (category) => {
  const [rows] = await pool.query(
    "SELECT * FROM products WHERE  category = ?",
    [category]
  );
  return rows;
};
const getProductById = async (id) => {
  const [rows] = await pool.query("SELECT * FROM products WHERE id = ?", [id]);
  return rows[0];
};

module.exports = { getMenu, getProductByCategory, getProductById };
