const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/invoicer')
const db = mongoose.connection;

const app = express();
const port = 3000;


// Enable CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");   // default allow get, post
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Client folder
app.use(express.static(__dirname + '/client'));

// Body parser
app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.send('Please use /api/');
});

// Routes
const customers = require('./routes/customers');
const invoices = require('./routes/invoices');

// Path
app.use('/api/customers', customers); 
app.use('/api/invoices', invoices); 


app.listen(port, () => {
    console.log('Server started on Port ' + port);
});