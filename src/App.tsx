import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import SkillsMarquee from './components/SkillsMarquee';
import Leadership from './components/Leadership';
import Contact from './components/Contact';
import LeadershipPage from './pages/LeadershipPage';

function HomePage() {
  return (
    <div className="min-h-screen bg-bg text-fg font-sans relative">
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <SkillsMarquee />
        <Leadership />
      </main>
      <Contact />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/leadership" element={<LeadershipPage />} />
      </Routes>
    </Router>
  );
}

export default App;
