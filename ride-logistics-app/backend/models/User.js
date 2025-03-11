const pool = require('../config/db');

class User {
  static async create({ name, email, password, role, phone }) {
    const query = 'INSERT INTO users (name, email, password, role, phone) VALUES ($1, $2, $3, $4, $5) RETURNING *';
    const values = [name, email, password, role, phone];
    const result = await pool.query(query, values);
    return result.rows[0];
  }

  static async findByEmail(email) {
    const query = 'SELECT * FROM users WHERE email = $1';
    const result = await pool.query(query, [email]);
    return result.rows[0];
  }
}

module.exports = User;