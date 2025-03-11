const express = require('express');
const adminController = require('../controllers/adminController');

const router = express.Router();

router.get('/users', adminController.getAllUsers);
router.get('/rides', adminController.getAllRides);
router.get('/logistics', adminController.getAllLogistics);

module.exports = router;