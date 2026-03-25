const techBadgeMap = {
  HTML: {
    iconClass: "devicon-html5-plain colored",
    label: "HTML",
  },
  CSS: {
    iconClass: "devicon-css3-plain colored",
    label: "CSS",
  },
  JavaScript: {
    iconClass: "devicon-javascript-plain colored",
    label: "JavaScript",
  },
  React: {
    iconClass: "devicon-react-original colored",
    label: "React",
  },
  Redux: {
    iconClass: "devicon-redux-original colored",
    label: "Redux",
  },
  "Node.js": {
    iconClass: "devicon-nodejs-plain colored",
    label: "Node.js",
  },
  Express: {
    iconClass: "devicon-express-original",
    label: "Express",
  },
  MongoDB: {
    iconClass: "devicon-mongodb-plain colored",
    label: "MongoDB",
  },
  PostgreSQL: {
    iconClass: "devicon-postgresql-plain colored",
    label: "PostgreSQL",
  },
  SQL: {
    iconClass: "devicon-azuresqldatabase-plain colored",
    label: "SQL",
  },
  Git: {
    iconClass: "devicon-git-plain colored",
    label: "Git",
  },
  Bash: {
    iconClass: "devicon-bash-plain",
    label: "Bash",
  },
  Bootstrap: {
    iconClass: "devicon-bootstrap-plain colored",
    label: "Bootstrap",
  },
  Sass: {
    iconClass: "devicon-sass-original colored",
    label: "Sass",
  },
  "D3.js": {
    iconClass: "devicon-d3js-plain colored",
    label: "D3.js",
  },
  JSON: {
    iconClass: "devicon-json-plain colored",
    label: "JSON",
  },
}

const TechBadge = ({ technology, className = "" }) => {
  const badge = techBadgeMap[technology] ?? {
    iconClass: "",
    label: technology,
  }

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-sm text-gray-200 ${className}`}
    >
      {badge.iconClass ? (
        <i aria-hidden="true" className={`${badge.iconClass} text-base leading-none`} />
      ) : null}
      <span>{badge.label}</span>
    </span>
  )
}

export { techBadgeMap }

export default TechBadge
