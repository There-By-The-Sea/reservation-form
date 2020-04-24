require('dotenv').config()

module.exports = {
  host: process.env.HOST || 'localhost',
  user: process.env.DB_USER,
  password: process.env.DB_PW,
  database: process.env.DB_DB
}

//THIS WORKS TO CONNECT TO DB ON LOCALHOST
// module.exports = {
//   user: process.env.DB_USER,
//   password: process.env.DB_PW,
//   database: 'reservation_db'
// }