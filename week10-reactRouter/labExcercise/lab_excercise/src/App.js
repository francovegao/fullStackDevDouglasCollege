import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// App components
import Header from './Header';
import Index from './index';
import Team from './team';
import Home from '/.home';

function App() {
  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/index" element={<Index />} />
       </Routes>
    </>
  );
}

export default App;
