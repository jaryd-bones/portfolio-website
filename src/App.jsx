import "./App.css"
import Navbar from "./components/layout/Navbar.jsx"
import HomeSection from "./sections/HomeSection/HomeSection.jsx"
import ProjectsSection from "./sections/ProjectsSection/ProjectsSection.jsx"
import AboutSection from "./sections/AboutSection/AboutSection.jsx"

function App() {
  return (
    <>
      <Navbar />

      <main>
        <section id="home">
          <HomeSection />
        </section>

        <section id="projects">
          <ProjectsSection />
        </section>

        <section id="about">
          <AboutSection />
        </section>
      </main>
    </>
  )
}

export default App