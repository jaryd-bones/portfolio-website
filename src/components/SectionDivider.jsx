const SectionDivider = ({ label, className = "" }) => (
  <div className={`flex items-center gap-4 ${className}`}>
    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/45 to-white/10" />
    <div className="rounded-full border border-white/15 bg-white/5 px-4 py-1 text-[0.9rem] uppercase tracking-[0.35em] text-gray-400">
      {label}
    </div>
    <div className="h-px flex-1 bg-gradient-to-l from-transparent via-white/45 to-white/10" />
  </div>
)

export default SectionDivider
