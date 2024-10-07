// services/newsService.js
const axios = require('axios');
const cheerio = require('cheerio');

// Your NewsAPI key
const API_KEY = '823dc80eb4af4afea8ec1bf696ea0671';



const fetchNews = async () => {
  const url = `https://newsapi.org/v2/everything?q=India&apiKey=${API_KEY}`;

  try {
      const response = await axios.get(url);
      const articles = response.data.articles;

      // Iterate through the articles and display combined content
      await articles.forEach(async (article) => {
          const combinedContent = `${article.description} ${article.content}`;
          console.log(`Title: ${article.title}`);
          console.log(`Content: ${combinedContent}`);
          
          // Optionally fetch full content from the article URL
          const fullContent = await fetchFullArticle(article.url);
          console.log(`Full Content: ${fullContent}`);
      });

      return articles;

  } catch (error) {
      console.error('Error fetching news:', error);
      throw new Error('Failed to fetch news');
  }
};

// Fetch the full article by scraping the actual article URL using Cheerio
const fetchFullArticle = async (articleUrl) => {
  try {
      const { data } = await axios.get(articleUrl);
      const $ = cheerio.load(data);

      // Example: Fetch the full article body (HTML structure depends on the website)
      const fullContent = $('article').text(); // Adjust selector based on the site's HTML structure
      return fullContent.trim(); // Return the full content
  } catch (error) {
      console.error('Error fetching full article:', error);
      return 'Full article could not be fetched';
  }
};



// const fetchNews = async () => {
// //   const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;
// //   const url = `https://newsapi.org/v2/everything?q=latest&apiKey=${API_KEY}`;
// const url = `https://newsapi.org/v2/everything?q=India&apiKey=${API_KEY}`;


  
//   const response = await axios.get(url);
//   return response.data.articles;
// };

module.exports = {
  fetchNews,
};
