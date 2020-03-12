const db = require('../../db/connection.js');

const selectProperty = (propertyId) => {
  return new Promise((resolve, reject) => {
    var queryString = `SELECT * FROM properties WHERE id = ${propertyId};`; 
    db.query(queryString, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}

const selectReservations = (propertyId) => {
  return new Promise((resolve, reject) => {
    var queryString = `SELECT * FROM reservations WHERE property_id = ${propertyId};`;
    db.query(queryString, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    })
  })
}

module.exports = {
  selectProperty,
  selectReservations
}