# FutureBlink Backend

A modular Node.js/Express backend integrated with MongoDB and OpenRouter AI, designed for the FutureBlink interactive flow application.

## Features

- **Express Server**: Lightweight and fast RESTful API.
- **MongoDB Integration**: Persistence for user prompts and AI responses using Mongoose.
- **AI Integration**: Powered by OpenRouter with the `google/gemma-3-4b-it:free` model.
- **CORS Enabled**: Ready for frontend integration.
- **Environment Driven**: Fully configurable via `.env` file.

## Tech Stack

- **Node.js**: Runtime environment.
- **Express**: Web framework.
- **Mongoose**: MongoDB object modeling.
- **Axios**: HTTP client for AI API calls.
- **Dotenv**: Environment variable management.

## Getting Started

### Prerequisites

- Node.js installed.
- MongoDB running locally or a remote URI.
- OpenRouter API Key.

### Installation

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Environment Configuration

Create a `.env` file in the root of the `backend/` directory and add the following variables:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/futureblink_demo
OPENROUTER_API_KEY=your_openrouter_api_key_here
```

| Variable | Description |
|----------|-------------|
| `PORT` | The port on which the server will run (default: 5000). |
| `MONGO_URI` | Your MongoDB connection string. |
| `OPENROUTER_API_KEY` | Your secret API key from [OpenRouter](https://openrouter.ai/). |

### Running the Server

- **Development Mode** (with Nodemon):
  ```bash
  npm run dev
  ```
- **Production Mode**:
  ```bash
  npm start
  ```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/ask-ai` | Send a prompt to the AI and receive a response. |
| `POST` | `/test` | Save a prompt and response to the MongoDB database. |
| `GET` | `/test` | Retrieve all saved entries from the database. |
| `GET` | `/` | Health check route. |

## Project Structure

```text
backend/
├── src/
│   ├── config/      # Database configuration
│   ├── controllers/ # Request handling logic
│   ├── models/      # Mongoose schemas
│   ├── routes/       # API route definitions
│   └── index.js     # Entry point
├── .env             # Environment variables
├── .gitignore       # Git ignore rules
└── package.json     # Dependencies and scripts
```
