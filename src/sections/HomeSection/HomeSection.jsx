import { useEffect, useLayoutEffect, useRef, useState } from "react"
import {
  GithubLogoIcon,
  LinkedinLogoIcon,
  EnvelopeIcon,
  ArrowDownIcon,
  DownloadSimpleIcon,
} from "@phosphor-icons/react"

const IconLink = ({ href, ariaLabel, tooltipText, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={ariaLabel}
    className="group relative text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:text-white"
  >
    {children}

    <span className="pointer-events-none absolute left-1/2 top-full mt-1 -translate-x-1/2 whitespace-nowrap rounded-md bg-white px-3 py-1 text-sm text-black opacity-0 transition-opacity duration-500 group-hover:delay-200 group-hover:opacity-100">
      {tooltipText}
    </span>
  </a>
)

const MIN_CONTENT_TOP_SPACE = 16
const MIN_ARROW_GAP = 12
const ARROW_BOTTOM_SPACE = 8

const HomeSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)
  const [homeLayout, setHomeLayout] = useState({
    shouldFillScreen: false,
    minHeight: 0,
    contentTopSpace: MIN_CONTENT_TOP_SPACE,
    arrowGap: MIN_ARROW_GAP,
  })
  const homeRef = useRef(null)
  const contentRef = useRef(null)
  const arrowIconRef = useRef(null)

  useLayoutEffect(() => {
    const homeNode = homeRef.current
    const contentNode = contentRef.current
    const arrowIconNode = arrowIconRef.current

    if (!homeNode || !contentNode || !arrowIconNode) return

    const measureHome = () => {
      const headerHeight =
        document.querySelector("header")?.getBoundingClientRect().height ?? 0
      const availableHeight = Math.max(window.innerHeight - headerHeight, 0)
      const contentHeight = contentNode.getBoundingClientRect().height
      const arrowHeight = arrowIconNode.getBoundingClientRect().height
      const requiredHeight =
        MIN_CONTENT_TOP_SPACE +
        contentHeight +
        MIN_ARROW_GAP +
        arrowHeight +
        ARROW_BOTTOM_SPACE
      const shouldFillScreen = availableHeight >= requiredHeight
      let contentTopSpace = MIN_CONTENT_TOP_SPACE
      let arrowGap = MIN_ARROW_GAP

      if (shouldFillScreen) {
        const centeredTopSpace = (availableHeight - contentHeight) / 2
        const centeredArrowGap =
          centeredTopSpace - arrowHeight - ARROW_BOTTOM_SPACE

        if (centeredArrowGap >= MIN_ARROW_GAP) {
          contentTopSpace = centeredTopSpace
          arrowGap = centeredArrowGap
        } else {
          contentTopSpace =
            availableHeight -
            contentHeight -
            MIN_ARROW_GAP -
            arrowHeight -
            ARROW_BOTTOM_SPACE
        }
      }

      const nextLayout = {
        shouldFillScreen,
        minHeight: Math.round(availableHeight),
        contentTopSpace: Math.round(Math.max(contentTopSpace, 0)),
        arrowGap: Math.round(Math.max(arrowGap, MIN_ARROW_GAP)),
      }

      setHomeLayout((currentLayout) =>
        currentLayout.shouldFillScreen === nextLayout.shouldFillScreen &&
        currentLayout.minHeight === nextLayout.minHeight &&
        currentLayout.contentTopSpace === nextLayout.contentTopSpace &&
        currentLayout.arrowGap === nextLayout.arrowGap
          ? currentLayout
          : nextLayout,
      )
    }

    measureHome()
    window.addEventListener("resize", measureHome)

    let resizeObserver
    if ("ResizeObserver" in window) {
      resizeObserver = new ResizeObserver(measureHome)
      resizeObserver.observe(homeNode)
      resizeObserver.observe(contentNode)
      resizeObserver.observe(arrowIconNode)
    }

    return () => {
      window.removeEventListener("resize", measureHome)
      resizeObserver?.disconnect()
    }
  }, [])

  useEffect(() => {
    const animationFrame = window.requestAnimationFrame(() => {
      setIsVisible(true)
    })

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasScrolled(true)
      } else {
        setHasScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => {
      window.cancelAnimationFrame(animationFrame)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div
      ref={homeRef}
      className="relative flex flex-col items-center px-6 text-white"
      style={
        homeLayout.shouldFillScreen
          ? { minHeight: `${homeLayout.minHeight}px` }
          : undefined
      }
    >
      <div
        ref={contentRef}
        className="w-full max-w-2xl"
        style={{ marginTop: `${homeLayout.contentTopSpace}px` }}
      >
        <h1
          className={`mx-auto block w-fit max-w-full text-center whitespace-nowrap text-[clamp(2.35rem,13vw,6rem)] font-bold transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          Jaryd Bones
        </h1>

        <p
          className={`mt-6 text-center text-lg leading-relaxed transition-all duration-700 delay-200 sm:text-left ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          I'm a full stack developer and software implementation consultant who
          enjoys building practical applications that solves real world problems.
        </p>

        <div
          className={`mt-8 flex justify-center transition-all duration-700 delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <div className="relative transition-all duration-300 hover:-translate-y-1">
            <span className="pointer-events-none absolute left-3.5 top-[calc(50%-1px)] flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-emerald-400 text-black shadow-[0_0_20px_rgba(52,211,153,0.95)]">
              <DownloadSimpleIcon size={16} weight="bold" />
            </span>
            <a
              href="/jaryd_bones_resume.pdf"
              download="Jaryd_Bones_Resume.pdf"
              className="relative inline-flex items-center justify-center rounded-full border-1 border-white/20 bg-white/10 py-3 pl-[3.6rem] pr-[1.35rem] text-center text-sm font-semibold tracking-wide text-white transition-all duration-300 hover:border-white/40 hover:bg-white/20"
            >
              <span className="translate-x-0.5">Download Resume</span>
            </a>
          </div>
        </div>

        <div
          className={`mt-5 flex justify-center gap-7 transition-all duration-700 delay-[400ms] ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-6 opacity-0"
          }`}
        >
          <IconLink
            href="https://linkedin.com/in/jaryd-bones-825135212"
            ariaLabel="LinkedIn"
            tooltipText="LinkedIn"
          >
            <LinkedinLogoIcon size={28} />
          </IconLink>

          <IconLink
            href="https://github.com/jaryd-bones"
            ariaLabel="GitHub"
            tooltipText="GitHub"
          >
            <GithubLogoIcon size={28} />
          </IconLink>

          <IconLink
            href="mailto:jaryd.bones@gmail.com"
            ariaLabel="Email"
            tooltipText="Email"
          >
            <EnvelopeIcon size={28} />
          </IconLink>
        </div>
      </div>

      <div
        className={`flex justify-center text-gray-400 transition-opacity duration-500 ${
          hasScrolled ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
        style={{
          marginTop: `${homeLayout.arrowGap}px`,
          paddingBottom: `${ARROW_BOTTOM_SPACE}px`,
        }}
      >
        <span ref={arrowIconRef} className="inline-flex">
          <ArrowDownIcon size={30} className="animate-bounce" />
        </span>
      </div>
    </div>
  )
}

export default HomeSection
