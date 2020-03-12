const reservationModel = require('../models/reservationModel.js');


// postReservation = (req, res) => {

// }

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
  getProperty
}

