import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import QuestionGenerator from './components/QuestionGenerator';

function MainRouter() {
  return (
    <Router>
      <Routes>
        {/* This is the base route that renders the App component */}
        <Route path="/" element={<App />}>
          {/* This route will render the QuestionGenerator component */}
          <Route path="generate" element={<QuestionGenerator />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default MainRouter;
