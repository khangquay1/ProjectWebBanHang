const express = require('express');
const route = express.Router();

const productController = require('../app/controllers/ProductController');

// "/"
route.use('/', productController.index);

module.exports = route;