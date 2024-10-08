import React, { useState } from 'react';
import axios from 'axios';

const QuestionGenerator = () => {
  const [topic, setTopic] = useState('');
  const [questions, setQuestions] = useState([]); // Use an array to store questions
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const generateQuestions = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.post('http://localhost:5000/generate-questions', {
        topic
      });
      // Assuming the response contains an array of questions
      setQuestions(response.data.questions.split('\n')); // Split string into array if necessary
    } catch (err) {
      setError('Failed to generate questions');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Generate Quiz Questions</h1>
      <input
        type="text"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        placeholder="Enter a topic"
      />
      <button onClick={generateQuestions} disabled={loading}>
        {loading ? 'Generating...' : 'Generate Questions'}
      </button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {questions.length > 0 && (
        <div>
          <h2>Generated Questions:</h2>
          <ul>
            {questions.map((question, index) => (
              <li key={index}>{question}</li> // Display each question in a list item
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default QuestionGenerator;


