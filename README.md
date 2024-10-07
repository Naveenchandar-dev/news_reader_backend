## Project Overview
This is the backend for the Flutter News Reader App. It serves as an API handler and processes news article data from external sources like NewsAPI.

## Features
- **API Proxying**: Fetches news articles from third-party APIs and serves them to the Flutter app.
- **Data Processing**: Any required data formatting or handling can be done here.

## Project Structure
- **routes/**: Contains API routes.
- **controllers/**: Handles the logic for fetching and processing data.
- **services/**: External API services like NewsAPI.

## Setup Instructions

### Prerequisites
- Install Node.js and npm: [Node.js Installation](https://nodejs.org/en/download/)

### Steps to Run

1. Clone the repository:
   ```bash
   git clone <https://github.com/Naveenchandar-dev/news_reader_backend.git>

   2.Navigate to the project directory:

   cd node-news-api-backend

3.Install dependencies:

npm install


4.Run the server:

npm start

Environment Variables

API_KEY=823dc80eb4af4afea8ec1bf696ea0671
PORT=3000

Dependencies
express: For building the API server.
axios: For making HTTP requests to external APIs.
dotenv: For managing environment variables.

How to Use
Once the server is running, it will listen on http://localhost:5002 (or another port if specified). The Flutter app can send requests to this backend for fetching news articles.

Error Handling
If the external API request fails, the server returns a user-friendly error response that can be handled by the Flutter app.