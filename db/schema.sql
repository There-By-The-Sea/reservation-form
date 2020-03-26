-- CREATES TWO TABLES IN THE reservation_db

DROP DATABASE IF EXISTS reservation_db;

CREATE DATABASE reservation_db;

USE reservation_db;

CREATE TABLE properties (
  id serial PRIMARY KEY,
  price_per_night INT(4) NOT NULL,
  max_guest INT(2) NOT NULL,
  service_fee INT(3) NOT NULL,
  avg_rating DECIMAL(3,2) NOT NULL
);

CREATE TABLE reservations (
  id serial PRIMARY KEY,
  checkin DATE NOT NULL,
  checkout DATE NOT NULL,
  property_id INT(3) NOT NULL
);