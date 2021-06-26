const express = require('express');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');

app.use(cors());
app.use(express.json());

dotenv.config();

// TODO add testing for routes
app.use('/auth', require('./routes/route.auth'));

module.exports = app;
