const EmploymentCard = ({
  company,
  role,
  location,
  period,
  body,
  className = "",
}) => (
  <article
    className={`rounded-3xl border border-white/15 bg-white/5 p-8 ${className}`}
  >
    <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
      <div>
        <p className="text-sm uppercase tracking-[0.2em] text-gray-400">{company}</p>
        <h4 className="mt-2 text-2xl font-semibold">{role}</h4>
        <p className="mt-2 text-sm text-gray-300">{location}</p>
      </div>

      <p className="text-sm text-gray-300">{period}</p>
    </div>

    <p className="mt-6 leading-relaxed text-gray-200">{body}</p>
  </article>
)

export default EmploymentCard
