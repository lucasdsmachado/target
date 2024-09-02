// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import FibonacciPage from './pages/FibonacciPage';
import InversaoPage from './pages/InversaoPage';
import PercentualPage from './pages/PercentualPage';
import FaturamentoPage from './pages/FaturamentoPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <Link to="/fibonacci" className="nav-button">Fibonacci</Link>
          <Link to="/inversao" className="nav-button">Inversão</Link>
          <Link to="/percentual" className="nav-button">Percentual</Link>
          <Link to="/faturamento" className="nav-button">Faturamento</Link>
        </nav>
        <div className="container">
          <Routes>
            <Route path="/fibonacci" element={<FibonacciPage />} />
            <Route path="/inversao" element={<InversaoPage />} />
            <Route path="/percentual" element={<PercentualPage />} />
            <Route path="/faturamento" element={<FaturamentoPage />} />
            <Route path="/" element={<div>Home Page</div>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
