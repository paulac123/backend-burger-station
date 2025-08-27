const pool = require("../db/pool");

class OrderDetailServices {
  async addProduct(data) {
    const { order_id, product_id, quantity, price } = data;

    const query = `
      INSERT INTO order_details (order_id, product_id, quantity, price)
      VALUES ($1, $2, $3, $4)
      RETURNING id
    `;

    const result = await pool.query(query, [
      order_id,
      product_id,
      quantity,
      price,
    ]);

    return {
      id: result.rows[0].id,
      ...data,
    };
  }
}

module.exports = OrderDetailServices;
