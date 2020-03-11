const express = require('express');
const dataSet = require('../db/dummyData/dataCreationHelpers.js')

const app = express();
const PORT = 3000;

//serve up the react client
app.use(express.static(__dirname + '/../client/dist'));

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

data = dataSet(2);

console.log(data);

