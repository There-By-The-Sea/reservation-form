const express = require('express');

const app = express();
const PORT = 3000;

//serve up the react client
app.use(express.static(__dirname + '/../client/dist'));

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});