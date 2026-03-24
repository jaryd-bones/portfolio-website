const ProjectCard = ({ name, img, shortDescription, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="group flex h-full w-full flex-col overflow-hidden rounded-lg bg-[#1a1a1a] text-left transition duration-300 hover:-translate-y-1 hover:bg-[#222222]"
  >
    <div className="aspect-video w-full overflow-hidden">
      <img
        src={img}
        alt={name}
        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
      />
    </div>

    <div className="flex flex-col gap-3 p-5">
      <h3 className="text-lg font-semibold text-white md:text-xl">
        {name}
      </h3>

      <p className="text-sm leading-relaxed text-gray-400 md:text-base">
        {shortDescription}
      </p>
    </div>
  </button>
)

export default ProjectCard