const express = require('express');
const axios = require('axios');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
console.log('API Key:', process.env.OPENAI_API_KEY);


const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

// Route to generate quiz questions
app.post('/generate-questions', async (req, res) => {
  const { topic } = req.body; // Get topic from request

  if (!topic) {
    return res.status(400).json({ message: 'Topic is required' });
  }

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: `Generate 5 multiple-choice quiz questions about ${topic}.` }],
        max_tokens: 200,
        temperature: 0.7,
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );
    
    
    const generatedQuestions = response.data.choices[0].text.trim();
    res.json({ questions: generatedQuestions });
  } catch (error) {
    console.error('Error generating questions:', error.response ? error.response.data : error.message);
    res.status(500).json({ message: 'Failed to generate questions' });
  }
  
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
