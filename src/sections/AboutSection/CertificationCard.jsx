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
    <div className="flex items-start justify-between gap-6">
      <div className="min-w-0 flex-1 space-y-3">
        <p className="text-xs uppercase tracking-[0.2em] text-gray-400 sm:text-sm">{provider}</p>
        <h4 className="text-xl font-semibold sm:text-2xl">{title}</h4>
        <p className="text-sm text-gray-300">Earned: {earnedOn}</p>
      </div>

      <div className="flex h-14 w-18 min-w-18 flex-none items-center justify-center rounded-2xl border border-white/40 bg-white/5 text-sm uppercase tracking-[0.2em] text-gray-400 sm:h-20 sm:w-28 sm:min-w-28">
        {logoSrc ? (
          <img src={logoSrc} alt={logoAlt} className="max-h-10 max-w-[88%] object-contain sm:max-h-14" />
        ) : (
          "Logo"
        )}
      </div>
    </div>

    <div className="mt-6">
      <p className="text-xs uppercase tracking-[0.2em] text-gray-400 sm:text-sm">
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
