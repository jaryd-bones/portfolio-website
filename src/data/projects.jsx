const projectImageAssets = import.meta.glob(
  "../assets/project_screenshots/generated/*.{avif,webp,jpg}",
  { eager: true, import: "default", query: "?url" },
)

const createProjectImageSet = (slug, variant, widths) => {
  const sourcePath = (width, extension) =>
    `../assets/project_screenshots/generated/${slug}-${variant}-${width}.${extension}`
  const sourcesFor = (extension) =>
    widths
      .map((width) => ({
        src: projectImageAssets[sourcePath(width, extension)],
        width,
      }))
      .filter(({ src }) => Boolean(src))

  return {
    avif: sourcesFor("avif"),
    webp: sourcesFor("webp"),
    jpg: sourcesFor("jpg"),
  }
}

const projects = [
  {
    name: "Legacy Mortgage",
    cardImage: createProjectImageSet("legacy-mortgage", "card", [
      480, 768, 960,
    ]),
    modalImage: createProjectImageSet("legacy-mortgage", "modal", [
      768, 1024, 1366,
    ]),
    shortDescription: "A full stack website for a California mortgage company",
    fullDescription:
      "A full stack website built for Legacy Real Estate Services Inc with public mortgage education pages, custom lead forms, a mortgage calculator, blog publishing, an AI assistant, secure admin tools, submission management, and analytics dashboards.",
    technologies: ["React", "Node.js", "Express", "PostgreSQL", "Bootstrap"],
    link: "https://www.legacyresinc.com/",
  },
  {
    name: "California Reverse Mortgages",
    cardImage: createProjectImageSet("california-reverse-mortgages", "card", [
      480, 768, 960,
    ]),
    modalImage: createProjectImageSet("california-reverse-mortgages", "modal", [
      768, 1024, 1366,
    ]),
    shortDescription: "A full stack website for reverse mortgages",
    fullDescription:
      "A full stack website built for a reverse mortgage company with informational pages, custom forms, an admin dashboard, appointment scheduling, and analytics features.",
    technologies: ["React", "Node.js", "Express", "PostgreSQL", "Bootstrap"],
    link: "https://www.california-reverse-mortgages.com",
  }
]

export default projects
