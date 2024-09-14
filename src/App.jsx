import React from 'react'
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from'./pages/์Notfound';
import New from './pages/New';
import Manga from './pages/Manga';
import LightNovel from './pages/LightNovel';

const App = () => {
  return (
    <Router>
      
      <div className="flex flex-col min-h-screen">
        
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/news" element={<New />} />
            <Route path="/lightnovel" element={<LightNovel />} />
            <Route path="/manga" element={<Manga />} />




          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
