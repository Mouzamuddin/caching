const express = require('express');
const app = express();
const cacheRoutes = require('./routes/cacheRoute');

app.use(express.json());  // Middleware to parse JSON
app.use('/', cacheRoutes);  // Use the cache routes

module.exports = app;