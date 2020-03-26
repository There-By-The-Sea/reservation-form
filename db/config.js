require('dotenv').config()

// module.exports = {
//   host: 'database',
//   password: process.env.DB_PW,
//   database: 'reservation_db'
// }

//THIS WORKS TO CONNECT TO DB ON LOCALHOST
module.exports = {
  user: process.env.DB_USER,
  password: process.env.DB_PW,
  database: 'reservation_db'
}