import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import RoutesPage from './pages/Routes';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Safety from './pages/Safety';
import Gallery from './pages/Gallery';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/safety" element={<Safety />} />
      <Route path="/*" element={
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/events" element={<Events />} />
              <Route path="/routes" element={<RoutesPage />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/gallery" element={<Gallery />} />
            </Routes>
          </main>
          <Footer />
        </div>
      } />
    </Routes>
  );
};

export default App; 