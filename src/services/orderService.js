const pool = require("../db/pool");

class OrderService {
  async createOrder(data) {
    const { user_id } = data;
    const query = `INSERT INTO orders (user_id) VALUES (?)`;

    const [results] = await pool.query(query, [user_id]);

    return {
      id: results.insertId,
      user_id,
      ...data,
    };
  }

  // 🔥 Esta es la nueva función que debes agregar
  async updateOrderTotal(order_id, total) {
    const query = `UPDATE orders SET total = ? WHERE id = ?`;
    const [result] = await pool.query(query, [total, order_id]);
    return result;
  }
}

module.exports = OrderService;
