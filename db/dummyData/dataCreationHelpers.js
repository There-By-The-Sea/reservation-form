//these functions will help generate a data set of 100

const createProperty = function(id) {
  var property = {};
  property.id = id;
  property.price = Math.floor(Math.random() * 1100 + 50);
  property.fee = Math.floor(property.price * .18 );
  property.maxGuest = Math.floor(Math.random() * 10 + 2);
  property.rating = parseFloat((Math.random() * 5).toFixed(2))
  property.reservations = createReservations(id);
  return property;
}

const createReservations = function(id) {
  var reservations = [];
  var daysBetweenReservations = Math.floor(Math.random() * 18 + 7)
  var reservationsPerYear = Math.floor(180/daysBetweenReservations);
  var i = 0;
  while(i < reservationsPerYear) {
    var lengthOfReservation = Math.ceil(Math.random() * (daysBetweenReservations - 5));
    var reservation = {};
    reservation.checkin = new Date(2020, 02, (i * daysBetweenReservations + 12));
    reservation.checkout = new Date(2020, 02, (i * daysBetweenReservations + 12) + lengthOfReservation);
    reservation.property_id = id
    reservations.push(reservation);
    i++
  }
  return reservations;
}

const generateSet = function(quantity) {
  var properties = [];
  var id = 1;
  while(id <= quantity) {
    var property = createProperty(id);
    properties.push(property);
    id++
  }
  return properties;
}

module.exports = generateSet;