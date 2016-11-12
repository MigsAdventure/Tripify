// CONSTANTS
const PORT = process.env.PORT || 8000;

// REQUIRES
const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
require('dotenv').config({ silent: true });

// INITIALIZE SERVER
const app = express();
const server = require('http').createServer(app);

server.listen(PORT, (err) => {
  console.log(err || `Express listening on port ${PORT}`);
});

// MIDDLEWARE
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));
require('./config/webpack')(app);

// ERROR/SEND HANDLE
app.use((req, res, next) => {
  res.handleSend = (err, data) => res.status(err ? 400 : 200).send(err || data);
  next();
});

// ROUTING
app.use('/api', require('./routes/api'));

// ALLOW REACT ROUTING
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});
