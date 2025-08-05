const { getMenu, getProductByCategory } = require("../services/productService");

const getAllMenu = async (req, res, next) => {
  try {
    const rows = await getMenu();
    res.json(rows);
  } catch (error) {
    next(error);
  }
};

const getByCategory = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: "falta Id de la category " });
    }
    const products = await getProductByCategory(id);
    res.json(products);
  } catch (error) {
    next(error);
  }
};
const getProductById = async (productId) => {
  const [rows] = await pool.query("SELECT * FROM products WHERE id = ?", [
    productId,
  ]);
  return rows[0];
};

module.exports = { getAllMenu, getByCategory, getProductById };
