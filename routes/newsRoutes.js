// routes/newsRoutes.js
const express = require('express');
const router = express.Router();
const newsController = require('../controllers/newsController');

// Define the news API route
router.get('/news', newsController.getNews);

module.exports = router;
