import { useEffect, useRef, useState } from "react"
import ProjectCard from "./ProjectCard"
import ProjectModal from "./ProjectModal"
import projects from "../../data/projects"

const RevealBlock = ({
  children,
  className = "",
  delayClass = "",
  hiddenClass = "translate-y-8 opacity-0",
  visibleClass = "translate-y-0 opacity-100",
  durationClass = "duration-500",
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const blockRef = useRef(null)

  useEffect(() => {
    const node = blockRef.current

    if (!node) {
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -60px 0px",
      },
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={blockRef}
      className={`transition-all ${durationClass} ${delayClass} ${className} ${
        isVisible ? visibleClass : hiddenClass
      }`}
    >
      {children}
    </div>
  )
}

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  const openProjectModal = (project) => {
    setSelectedProject(project)
  }

  const closeProjectModal = () => {
    setSelectedProject(null)
  }

  useEffect(() => {
    const originalOverflow = document.body.style.overflow
    const originalPaddingRight = document.body.style.paddingRight

    if (selectedProject) {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth

      document.body.style.overflow = "hidden"
      document.body.style.paddingRight =
        scrollbarWidth > 0 ? `${scrollbarWidth}px` : originalPaddingRight
    } else {
      document.body.style.overflow = originalOverflow || "auto"
      document.body.style.paddingRight = originalPaddingRight
    }

    return () => {
      document.body.style.overflow = originalOverflow || "auto"
      document.body.style.paddingRight = originalPaddingRight
    }
  }, [selectedProject])

  return (
    <section className="px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <RevealBlock className="max-w-4xl" hiddenClass="-translate-x-12 opacity-0">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-400">Projects</p>
          <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
            A few things I&apos;ve built...
          </h2>
        </RevealBlock>

        <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <RevealBlock
              key={project.name}
              className="h-full"
              delayClass={
                index === 0
                  ? "delay-75"
                  : index === 1
                    ? "delay-150"
                    : "delay-[225ms]"
              }
              hiddenClass={
                index % 2 === 0 ? "-translate-x-10 opacity-0" : "translate-x-10 opacity-0"
              }
            >
              <ProjectCard
                name={project.name}
                img={project.img}
                shortDescription={project.shortDescription}
                technologies={project.technologies}
                onClick={() => openProjectModal(project)}
              />
            </RevealBlock>
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
