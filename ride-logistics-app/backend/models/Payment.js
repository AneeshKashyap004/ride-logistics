const pool = require('../config/db');

class Payment {
  static async create({ rideId, amount, paymentMethod }) {
    const query = 'INSERT INTO payments (rideId, amount, paymentMethod) VALUES ($1, $2, $3) RETURNING *';
    const values = [rideId, amount, paymentMethod];
    const result = await pool.query(query, values);
    return result.rows[0];
  }
}

module.exports = Payment;