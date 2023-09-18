import React from 'react';
import './App.css';
import HomePage from './Pages/homePage/HomePage';
import { Route, Routes } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default App;
