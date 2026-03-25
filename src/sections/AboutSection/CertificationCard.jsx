import TechBadge from "../../components/TechBadge"

const CertificationCard = ({
  provider,
  title,
  earnedOn,
  skills,
  logoSrc,
  logoAlt,
  className = "",
}) => (
  <article
    className={`flex h-full flex-col rounded-3xl border-2 border-white bg-black p-6 text-white ${className}`}
  >
    <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.2em] text-gray-400">{provider}</p>
        <h4 className="text-2xl font-semibold">{title}</h4>
        <p className="text-sm text-gray-300">Earned: {earnedOn}</p>
      </div>

      <div className="flex h-20 w-full items-center justify-center rounded-2xl border border-white/40 bg-white/5 text-sm uppercase tracking-[0.2em] text-gray-400 sm:w-28 sm:min-w-28 sm:flex-none">
        {logoSrc ? (
          <img src={logoSrc} alt={logoAlt} className="max-h-14 max-w-[88%] object-contain" />
        ) : (
          "Logo"
        )}
      </div>
    </div>

    <div className="mt-6">
      <p className="text-sm uppercase tracking-[0.2em] text-gray-400">
        Skills Covered
      </p>

      <div className="mt-4 flex flex-1 flex-wrap content-start gap-3">
        {skills.map((skill) => (
          <TechBadge
            key={skill}
            technology={skill}
            className="border-white/30"
          />
        ))}
      </div>
    </div>
  </article>
)

export default CertificationCard
