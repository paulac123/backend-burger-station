const pool = require("../db/pool");

class OrderService {
  async createOrder(data) {
    const { user_id } = data;

    const query = `
      INSERT INTO orders (user_id)
      VALUES ($1)
      RETURNING id
    `;

    const result = await pool.query(query, [user_id]);

    return {
      id: result.rows[0].id,
      user_id,
      ...data,
    };
  }

  async updateOrderTotal(order_id, total) {
    const query = `
      UPDATE orders
      SET total = $1
      WHERE id = $2
      RETURNING *
    `;
    const result = await pool.query(query, [total, order_id]);
    return result.rows[0];
  }
}

module.exports = OrderService;
