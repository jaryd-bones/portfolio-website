const ProjectModal = ({
  name,
  img,
  fullDescription,
  technologies = [],
  link,
  onClose,
}) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-6"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-lg bg-[#1a1a1a] shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close project modal"
          className="absolute right-4 top-4 text-2xl text-gray-400 transition hover:text-white"
        >
          ×
        </button>

        <div className="aspect-video w-full overflow-hidden rounded-t-lg">
          <img
            src={img}
            alt={name}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="p-6 md:p-8">
          <h3 className="text-2xl font-semibold text-white md:text-3xl">
            {name}
          </h3>

          <p className="mt-4 text-sm leading-relaxed text-gray-300 md:text-base">
            {fullDescription}
          </p>

          {technologies.length > 0 && (
            <div className="mt-6">
              <h4 className="text-sm font-medium uppercase tracking-wide text-gray-400">
                Technologies
              </h4>

              <div className="mt-3 flex flex-wrap gap-2">
                {technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-md bg-[#2a2a2a] px-3 py-1 text-sm text-gray-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          )}

          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block text-sm font-medium text-gray-300 transition hover:text-white"
            >
              View Project →
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectModal