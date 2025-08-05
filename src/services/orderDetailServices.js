const pool = require("../db/pool");

class OrderDetailServices {
  async addProduct(data) {
    const { order_id, product_id, quantity, price } = data;
    const query = `INSERT INTO order_details  (order_id, product_id, quantity, price)
      VALUES (?, ?, ?, ?);
    `;
    const [results] = await pool.query(query, [
      order_id,
      product_id,
      quantity,
      price,
    ]);
    return {
      id: results.insertId,
      ...data,
    };
  }
}
module.exports = OrderDetailServices;
