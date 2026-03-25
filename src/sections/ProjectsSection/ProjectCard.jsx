import TechBadge from "../../components/TechBadge"

const ProjectCard = ({ name, img, shortDescription, technologies = [], onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="group flex h-full w-full cursor-pointer flex-col overflow-hidden rounded-3xl border border-white/15 bg-white/5 text-left text-white transition duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/[0.07]"
  >
    <div className="bg-black/30 px-4 pt-4 pb-2">
      <div className="overflow-hidden rounded-2xl border border-white/10">
        <img
          src={img}
          alt={name}
          className="aspect-video w-full object-cover transition duration-500 group-hover:scale-[1.03]"
        />
      </div>
    </div>

    <div className="flex flex-1 flex-col px-6 pt-4 pb-6">
      <h3 className="text-xl font-semibold md:text-2xl">{name}</h3>

      <p className="mt-4 text-sm leading-relaxed text-gray-300 md:text-base">
        {shortDescription}
      </p>

      {technologies.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2">
          {technologies.slice(0, 4).map((technology) => (
            <TechBadge
              key={technology}
              technology={technology}
            />
          ))}
        </div>
      )}
    </div>
  </button>
)

export default ProjectCard
