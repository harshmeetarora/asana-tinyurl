const express = require('express');
const bodyparser = require('body-parser');

var port = process.env.PORT || 3000;
const app = express();
app.get('/', function (req, res) {
    res.status(301).redirect('https://asana.com/jobs/university-recruiting#jobs')
  })
app.listen(port, () => console.log("SERVER STARTED..."));