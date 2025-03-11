const pool = require('../config/db');

class Logistics {
  static async create({ customerId, pickupLocation, dropLocation, fare }) {
    const query = 'INSERT INTO logistics (customerId, pickupLocation, dropLocation, fare) VALUES ($1, $2, $3, $4) RETURNING *';
    const values = [customerId, pickupLocation, dropLocation, fare];
    const result = await pool.query(query, values);
    return result.rows[0];
  }
}

module.exports = Logistics;