const express = require('express');
const paymentController = require('../controllers/paymentController');

const router = express.Router();

router.post('/create', paymentController.createPayment);

module.exports = router;