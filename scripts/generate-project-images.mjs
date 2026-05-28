import { mkdir } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"
import sharp from "sharp"

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const screenshotDir = path.join(rootDir, "src", "assets", "project_screenshots")
const outputDir = path.join(screenshotDir, "generated")

const imageJobs = [
  {
    slug: "legacy-mortgage",
    variant: "card",
    source: "legacy-mortgage-sm.jpg",
    widths: [480, 768, 960],
  },
  {
    slug: "legacy-mortgage",
    variant: "modal",
    source: "legacy-mortgage-full.jpg",
    widths: [768, 1024, 1366],
  },
  {
    slug: "california-reverse-mortgages",
    variant: "card",
    source: "california-reverse-mortgages-sm.jpg",
    widths: [480, 768, 960],
  },
  {
    slug: "california-reverse-mortgages",
    variant: "modal",
    source: "california-reverse-mortgages-full.jpg",
    widths: [768, 1024, 1366],
  },
]

const formats = [
  {
    extension: "avif",
    encode: (pipeline) => pipeline.avif({ quality: 48, effort: 6 }),
  },
  {
    extension: "webp",
    encode: (pipeline) => pipeline.webp({ quality: 78 }),
  },
  {
    extension: "jpg",
    encode: (pipeline) => pipeline.jpeg({ quality: 82, mozjpeg: true }),
  },
]

await mkdir(outputDir, { recursive: true })

const generatedFiles = []

for (const job of imageJobs) {
  const sourcePath = path.join(screenshotDir, job.source)

  for (const width of job.widths) {
    for (const format of formats) {
      const outputName = `${job.slug}-${job.variant}-${width}.${format.extension}`
      const outputPath = path.join(outputDir, outputName)
      const pipeline = sharp(sourcePath).resize({
        width,
        withoutEnlargement: true,
      })

      await format.encode(pipeline).toFile(outputPath)
      generatedFiles.push(outputName)
    }
  }
}

for (const file of generatedFiles) {
  console.log(`Generated ${file}`)
}
