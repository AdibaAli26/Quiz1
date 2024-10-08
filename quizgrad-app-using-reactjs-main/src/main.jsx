import React from 'react';
import ReactDOM from 'react-dom/client'; // Import ReactDOM
import './index.css'; // Import your CSS file
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // Import router components
import App from './App'; // Import your main App component
import Home from './components/Home'; // Import Home component
import Quiz from './components/Quiz'; // Import Quiz component
import QuestionGenerator from './components/QuestionGenerator'; // Import QuestionGenerator

// Create the router
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'quiz',  // Updated path for /quiz
        element: <Quiz />
      },
      {
        path: 'generate',  // Updated path for /generate
        element: <QuestionGenerator />
      }
    ]
  },
]);

// Render the application
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} /> {/* Use RouterProvider with the router */}
  </React.StrictMode>
);
