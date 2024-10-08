// src/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5000'; // Replace with your backend URL

export const generateQuestions = async (topic) => {
  try {
    const response = await axios.post(`${API_URL}/generate-questions`, { topic });
    return response.data.questions; // Return the questions from the response
  } catch (error) {
    console.error('Error generating questions:', error.message);
    throw error; // Re-throw the error to handle it in the component
  }
};
