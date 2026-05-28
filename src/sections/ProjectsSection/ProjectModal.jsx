import { useEffect, useRef, useState } from "react"
import { XIcon, ArrowRightIcon, GithubLogoIcon } from "@phosphor-icons/react"
import ResponsiveImage from "../../components/ResponsiveImage"
import TechBadge from "../../components/TechBadge"

const ProjectModal = ({
  name,
  image,
  fullDescription,
  technologies = [],
  link,
  githubLink,
  onClose,
}) => {
  const scrollContainerRef = useRef(null)
  const [hasOverflow, setHasOverflow] = useState(false)

  useEffect(() => {
    const node = scrollContainerRef.current

    if (!node) {
      return undefined
    }

    const updateOverflowState = () => {
      setHasOverflow(node.scrollHeight > node.clientHeight)
    }

    updateOverflowState()

    const resizeObserver = new ResizeObserver(() => {
      updateOverflowState()
    })

    resizeObserver.observe(node)
    window.addEventListener("resize", updateOverflowState)

    return () => {
      resizeObserver.disconnect()
      window.removeEventListener("resize", updateOverflowState)
    }
  }, [name, image, fullDescription, technologies, link, githubLink])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-6"
      onClick={onClose}
    >
      <div className="flex w-full max-w-[calc(48rem+3rem)] items-start justify-center gap-3">
        <div
          className={`relative max-h-[90vh] w-full max-w-3xl overflow-hidden bg-[#1a1a1a] shadow-2xl ${
            hasOverflow ? "rounded-l-3xl" : "rounded-3xl"
          }`}
          onClick={(event) => event.stopPropagation()}
        >
          <div
            ref={scrollContainerRef}
            className="project-modal-scrollbar max-h-[90vh] overflow-y-auto"
          >
            <div className="border-b border-white/10 bg-black/30 px-6 py-8">
              <div className="mx-auto flex max-w-2xl items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-black/40">
                <ResponsiveImage
                  image={image}
                  alt={name}
                  sizes="(min-width: 768px) 672px, calc(100vw - 5rem)"
                  pictureClassName="flex max-w-full justify-center"
                  className="max-h-[420px] w-auto max-w-full object-contain"
                  loading="eager"
                />
              </div>
            </div>

            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-semibold text-white md:text-3xl">
                {name}
              </h3>

              <p className="mt-4 text-justify text-sm leading-relaxed text-gray-300 md:text-base">
                {fullDescription}
              </p>

              {(link || githubLink) && (
                <div className="mt-6 flex flex-wrap items-center justify-end gap-4">
                  {link && (
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-emerald-400 transition hover:text-emerald-300"
                    >
                      View Project <ArrowRightIcon />
                    </a>
                  )}

                  {githubLink && (
                    <a
                      href={githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-emerald-400 transition hover:text-emerald-300"
                    >
                      GitHub <GithubLogoIcon />
                    </a>
                  )}
                </div>
              )}

              {technologies.length > 0 && (
                <div className="mt-6">
                  <h4 className="text-sm font-medium uppercase tracking-wide text-gray-400">
                    Tech Stack
                  </h4>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {technologies.map((technology) => (
                      <TechBadge
                        key={technology}
                        technology={technology}
                        className="rounded-md bg-[#2a2a2a]"
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close project modal"
          className="pt-2 text-2xl text-gray-400 transition hover:text-white"
        >
          <XIcon />
        </button>
      </div>
    </div>
  )
}

export default ProjectModal
