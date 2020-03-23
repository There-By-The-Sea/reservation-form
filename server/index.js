const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const reservationRoutes = require('./routes/reservationRoutes')
const cors = require('cors');

const app = express();
const PORT = 3001;

//middleware
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors())

//serve up the react client
app.use(express.static(__dirname + '/../client/dist'));

//Routes
app.use('/reservations', reservationRoutes);


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

