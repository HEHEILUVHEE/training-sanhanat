import React from 'react'
import Home from './pages/Home';
import Contact from './pages/Contact';
import Course from './pages/Course'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from'./pages/์Notfound';

const App = () => {
  return (
    <Router>
      
      <div className="flex flex-col min-h-screen">
        
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/course" element={<Course />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
