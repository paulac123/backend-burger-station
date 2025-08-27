const pool = require("../db/pool");

const getMenu = async () => {
  const result = await pool.query("SELECT * FROM products");
  return result.rows;
};

const getProductByCategory = async (category) => {
  const result = await pool.query(
    "SELECT * FROM products WHERE category = $1",
    [category]
  );
  return result.rows;
};

const getProductById = async (id) => {
  const result = await pool.query("SELECT * FROM products WHERE id = $1", [id]);
  return result.rows[0];
};

module.exports = { getMenu, getProductByCategory, getProductById };
