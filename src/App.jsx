import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Analytics } from '@vercel/analytics/react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Jazz from './pages/Jazz'
import portfolioData from '../portfolio-data.json'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true'
    setDarkMode(isDark)
    if (isDark) {
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark')
    localStorage.setItem('darkMode', !darkMode)
  }

  return (
    <Router>
      <Routes>
        {/* Jazz's special page */}
        <Route path="/jazz" element={<Jazz />} />
        
        {/* Main portfolio */}
        <Route path="/" element={
          <div className="min-h-screen">
            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} data={portfolioData} />
            <Hero data={portfolioData} />
            <About data={portfolioData} />
            <Skills data={portfolioData} />
            <Experience data={portfolioData} />
            <Achievements data={portfolioData} />
            <Projects data={portfolioData} />
            <Contact data={portfolioData} />
            <Footer data={portfolioData} />
            <ScrollToTop />
            <Analytics />
          </div>
        } />
      </Routes>
    </Router>
  )
}

export default App
