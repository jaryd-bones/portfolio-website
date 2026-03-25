import { useEffect, useState } from "react"
import ProjectCard from "./ProjectCard"
import ProjectModal from "./ProjectModal"
import projects from "../../data/projects"

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  const openProjectModal = (project) => {
    setSelectedProject(project)
  }

  const closeProjectModal = () => {
    setSelectedProject(null)
  }

  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "auto"

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [selectedProject])

  return (
    <section className="px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-4xl font-semibold text-white md:text-5xl">
          Some Projects I've Built...
        </h2>

        <div className="mt-9 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.name}
              name={project.name}
              img={project.img}
              shortDescription={project.shortDescription}
              onClick={() => openProjectModal(project)}
            />
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          name={selectedProject.name}
          img={selectedProject.img}
          fullDescription={selectedProject.fullDescription}
          technologies={selectedProject.technologies}
          link={selectedProject.link}
          onClose={closeProjectModal}
        />
      )}
    </section>
  )
}

export default ProjectsSection
