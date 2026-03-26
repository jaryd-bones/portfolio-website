import { useEffect, useRef, useState } from "react"
import { certifications, education, employment } from "../../data/about"
import SectionDivider from "../../components/SectionDivider"
import CertificationCard from "./CertificationCard"
import EmploymentCard from "./EmploymentCard"

const RevealBlock = ({
  children,
  className = "",
  delayClass = "",
  hiddenClass = "translate-y-8 opacity-0",
  visibleClass = "translate-y-0 opacity-100",
  durationClass = "duration-500",
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const blockRef = useRef(null)

  useEffect(() => {
    const node = blockRef.current

    if (!node) {
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -60px 0px",
      },
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={blockRef}
      className={`transition-all ${durationClass} ${delayClass} ${className} ${
        isVisible ? visibleClass : hiddenClass
      }`}
    >
      {children}
    </div>
  )
}

const AboutSection = () => (
  <section className="px-6 py-24 text-white">
    <div className="mx-auto max-w-6xl">
      <RevealBlock
        className="mb-16"
        hiddenClass="scale-x-90 opacity-0"
        visibleClass="scale-x-100 opacity-100"
      >
        <SectionDivider label="About" />
      </RevealBlock>

      <RevealBlock className="max-w-4xl" hiddenClass="-translate-x-12 opacity-0">
        <h2 className="text-4xl font-semibold md:text-5xl">
          A little more about my background
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-gray-300">
          I got into coding at a young age, and that curiosity turned into
          something that I'm genuinely passionate about. What excites me the most is
          building full stack web applications where I get
          to think through both the user experience and the systems behind it.
          Through my development and consultation work, I&apos;ve collaborated closely
          with businesses to turn their daily needs into practical
          software. I like the balance of problem-solving, working with others, and creativity
          that comes with web development, and I&apos;m always motivated by the chance to build
          something useful.
        </p>
      </RevealBlock>

      <RevealBlock className="mt-16" hiddenClass="-translate-x-10 opacity-0">
        <h3 className="text-3xl font-semibold">Employment</h3>
        <div className="mt-8 space-y-6">
          {employment.map((job, index) => (
            <RevealBlock
              key={`${job.company}-${job.role}`}
              delayClass={index === 0 ? "delay-75" : "delay-150"}
              hiddenClass="translate-y-10 opacity-0"
            >
              <EmploymentCard
                company={job.company}
                role={job.role}
                location={job.location}
                period={job.period}
                body={job.body}
              />
            </RevealBlock>
          ))}
        </div>
      </RevealBlock>

      <RevealBlock className="mt-16" hiddenClass="translate-x-10 opacity-0">
        <h3 className="text-3xl font-semibold">Certifications</h3>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {certifications.map((certification, index) => (
            <RevealBlock
              key={certification.title}
              className="h-full"
              delayClass={
                index < 2
                  ? "delay-75"
                  : index < 4
                    ? "delay-150"
                    : index < 6
                      ? "delay-[225ms]"
                      : "delay-[300ms]"
              }
              hiddenClass={
                index % 2 === 0 ? "-translate-x-10 opacity-0" : "translate-x-10 opacity-0"
              }
            >
              <CertificationCard
                provider={certification.provider}
                title={certification.title}
                earnedOn={certification.earnedOn}
                skills={certification.skills}
                logoSrc={certification.logoSrc}
                logoAlt={certification.logoAlt}
              />
            </RevealBlock>
          ))}
        </div>
      </RevealBlock>

      <RevealBlock className="mt-16" hiddenClass="translate-x-10 opacity-0">
        <h3 className="text-3xl font-semibold">Education</h3>

        <RevealBlock delayClass="delay-75" hiddenClass="translate-y-8 opacity-0">
          <article className="mt-8 rounded-3xl border border-white/15 bg-white/5 p-8">
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-gray-400">
                  {education.school}
                </p>
                <h4 className="mt-2 text-2xl font-semibold">{education.degree}</h4>
                <p className="mt-2 text-sm text-gray-300">{education.honors}</p>
              </div>

              <p className="text-sm text-gray-300">{education.period}</p>
            </div>

            <div className="mt-6">
              <p className="text-sm uppercase tracking-[0.2em] text-gray-400">
                Coursework
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                {education.coursework.map((course, index) => (
                  <span
                    key={course}
                    className={`rounded-full border border-white/25 px-3 py-1 text-sm text-gray-200 transition-all duration-500 ${
                      index < 4
                        ? "delay-100"
                        : index < 8
                          ? "delay-150"
                          : "delay-[225ms]"
                    }`}
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </article>
        </RevealBlock>
      </RevealBlock>
    </div>
  </section>
)

export default AboutSection
