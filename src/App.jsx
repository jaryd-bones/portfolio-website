import './App.css'
import Navbar from './components/layout/Navbar.jsx'
import HomePage from './pages/HomePage/HomePage.jsx'
import ProjectsPage from './pages/ProjectsPage/ProjectsPage.jsx'
import AboutPage from './pages/AboutPage/AboutPage.jsx'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
    </>
  )
}

export default App
