// controllers/newsController.js
const newsService = require('../services/newsService');

// Fetch news articles
const getNews = async (req, res) => {
  try {
    const articles = await newsService.fetchNews(); 
    res.json(articles);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch news articles' });
  }
};

module.exports = {
  getNews,
};
