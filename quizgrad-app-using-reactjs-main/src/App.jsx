import React from 'react';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <h1>Welcome to the App</h1>
      {/* This is where the nested routes (Home, Quiz, QuestionGenerator) will be rendered */}
      <Outlet />
    </div>
  );
}

export default App;
