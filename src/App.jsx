import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="flex bg-navy text-slate">
        <Routes>
          <Route 
            path="/*" 
            element={
              <>
                <Navbar />
                <main className="ml-[33.333%] w-[66.667%] p-12">
                  <Routes>
                    <Route
                      path="/"
                      element={
                        <>
                          <Header />
                          <About />
                          <Experience />
                          <Projects />
                          <Contact />
                        </>
                      }
                    />
                  </Routes>
                </main>
              </>
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;