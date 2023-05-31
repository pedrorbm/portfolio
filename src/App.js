import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Portfolio from './pages/Portfolio';
import './App.css';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Portfolio />} />
    </Routes>
  );
}

export default App;
