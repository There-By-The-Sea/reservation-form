const reservationModel = require('../models/reservationModel.js');


const postReservation = (req, res) => {
var reservationData = req.body;
reservationModel.insertReservation(reservationData.property_id, reservationData.checkin, reservationData.checkout)
  .then(reservationId => {
    reservationModel.selectReservations(reservationData.property_id)
      .then(reservations => {
        console.log(reservations);
        res.status(201).json(reservations);
      })
  })
  .catch(err => {
    res.status(400).json({
      message: 'Failed to insert reservation info into database',
      err: err
    })
  })
}

const getProperty = (req, res) => {
  var propertyId = req.query.propertyId;
  reservationModel.selectProperty(propertyId)
    .then(property => {
      reservationModel.selectReservations(propertyId)
        .then(reservations => {
          property[0].reservations = reservations;
          res.status(200).json({property});
        })
    })
    .catch(err => {
      res.status(400).json({
        message: 'Failed to get property info from database',
        err: err
      })
    })
}

module.exports = {
  getProperty,
  postReservation
}

