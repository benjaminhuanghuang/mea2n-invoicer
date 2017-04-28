const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// Client folder
app.use(express.static(__dirname + '/client'));

// Body parser
app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.send('Please use /api/');
});


app.listen(port, () => {
    console.log('Server started on Port ' + port);
});