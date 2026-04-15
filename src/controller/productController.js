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
    const { category } = req.params;

    if (!category) {
      return res.status(400).json({ error: "falta la category " });
    }
    const products = await getProductByCategory(category);
    res.json(products);
  } catch (error) {
    next(error);
  }
};
module.exports = { getAllMenu, getByCategory };
