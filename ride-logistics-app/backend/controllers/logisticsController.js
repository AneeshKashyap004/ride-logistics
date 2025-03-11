const Logistics = require('../models/Logistics');

exports.bookLogistics = async (req, res) => {
  try {
    const logistics = await Logistics.create(req.body);
    res.status(201).json(logistics);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};