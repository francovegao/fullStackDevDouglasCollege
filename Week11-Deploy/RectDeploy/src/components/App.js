import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// App components
import Header from './Header';
import Home from './Home';
import About from './About';
import Teachers from './Teachers';
import Courses from './Courses';

const App = () => (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About title="About" />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/courses/*" element={<Courses />}>
          {/* Write routes here... */}
          {/* <Route index element={<Navigate replace to="html" />} />
          <Route path="/courses/html" element={<HTML />} />
          <Route path="/courses/css" element={<CSS />} />
          <Route path="/courses/javascript" element={<JavaScript />} /> */}
        </Route>
      </Routes>
    </div>
);

export default App;
