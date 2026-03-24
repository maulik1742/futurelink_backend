const axios = require('axios');

const askAI = async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ message: 'Please provide a prompt' });
    }

    const response = await axios.post(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        model: 'google/gemma-3-4b-it:free',
        messages: [
          {
            role: 'user',
            content: prompt,
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': 'https://github.com/Antigravity', // Optional, for OpenRouter tracking
          'X-Title': 'FutureBlink Demo', // Optional, for OpenRouter tracking
        },
      }
    );

    const answer = response.data.choices[0].message.content;

    res.status(200).json({
      message: 'AI response received',
      answer: answer,
    });
  } catch (error) {
    console.error('AI Error:', error.response ? error.response.data : error.message);
    res.status(500).json({
      message: 'Error communicating with AI',
      error: error.response ? error.response.data : error.message,
    });
  }
};

module.exports = {
  askAI,
};
