const express = require('express');
const app = express();
const api = require('./Api');

app.use(api());

app.listen(5003, () => {
  console.log(`Server listening on port 80`);
});