const express = require('express');
const router = express.Router();
const reservationController = require('../controllers/reservationController.js');

//Route different requests to different endpoints
router.post('/book', reservationController.postReservation)
router.get('/plan', reservationController.getProperty)

module.exports = router;