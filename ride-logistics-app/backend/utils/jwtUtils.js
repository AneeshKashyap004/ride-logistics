const jwt = require('jsonwebtoken');

const generateToken = (user) => {
  return jwt.sign({ id: user.id, role: user.role }, 'your-secret-key', { expiresIn: '1h' });
};

module.exports = { generateToken };