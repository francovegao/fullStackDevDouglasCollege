import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// App components
import Header from './Header';
import Home from './Home';
import About from './About';
import Teachers from './Teachers';
import Courses from './Courses';
import CSS from './courses/CSS';
import HTML from './courses/HTML';
import JavaScript from './courses/JavaScript';
import NotFound from './NotFound'

const App = () => (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About title="About" />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/courses/*" element={<Courses />}>
          {/* add the following so courses will redirect to html initially */}
          {/* Sublinks insite the main route tag */}
            <Route index element={<Navigate replace to="html" />}/>
            <Route path="css" element={<CSS />}/>
            <Route path="html" element={<HTML />}/>
            <Route path="javascript" element={<JavaScript />}/>
            {/* pay attention  to <Outlet /> in courses.js; it tells where nested routes shouold be put */}
        </Route>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </div>
);

export default App;
