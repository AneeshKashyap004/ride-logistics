const express = require('express');
const logisticsController = require('../controllers/logisticsController');

const router = express.Router();

router.post('/book', logisticsController.bookLogistics);

module.exports = router;