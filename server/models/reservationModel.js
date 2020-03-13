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

const insertReservation = (property_id, checkin, checkout) => {
  return new Promise((resolve, reject) => {
    var queryString = `INSERT INTO reservations (property_id, checkin, checkout) VALUES (${property_id}, '${checkin}', '${checkout}');`;
    db.query(queryString, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results.insertId)
      }
    });
  });
}

module.exports = {
  selectProperty,
  selectReservations,
  insertReservation
}