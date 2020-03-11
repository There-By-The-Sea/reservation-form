const dataSet = require('./dataCreationHelpers.js')
const db = require('../connection.js')

const fullDataSet = dataSet(100);


const insertProperties = function(dataSet) {
  dataSet.forEach(property => {
    var queryString = `INSERT INTO properties (id, price_per_night, max_guest, service_fee, avg_rating) VALUES (${property.id},${property.price},${property.maxGuest},${property.fee},${property.rating});`;
    db.query(queryString, (err) => {
      if (err) {
        console.log(err);
      }
    })
  })
}

const insertReservations = function(dataSet) {
  dataSet.forEach(property => {
    property.reservations.forEach(reservation => {
      var checkin = sliceDate(JSON.stringify(reservation.checkin));
      var checkout = sliceDate(JSON.stringify(reservation.checkout));
      var queryString = `INSERT INTO reservations (checkin, checkout, property_id) VALUES ('${checkin}', '${checkout}', ${reservation.property_id});`;
      db.query(queryString, (err) => {
        if (err) {
          console.log(err);
        }
      })
    })
  })
}

const sliceDate = function(dateString) {
  var splitted = dateString.split('')
  var sliced = splitted.slice(1, 11);
  return sliced.join('');
}


insertProperties(fullDataSet);
insertReservations(fullDataSet);

module.exports = fullDataSet;