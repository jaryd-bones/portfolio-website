const NavItem = ({ name, to }) => (
  <a
    href={to}
    className="relative font-bold text-gray-400 transition hover:text-white after:absolute after:left-0 after:bottom-[-5px] after:h-[3px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
  >
    {name}
  </a>
)

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 border-b border-gray-500 bg-black/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-10">
        <div className="flex w-full items-center gap-6">
          <ul className="mx-auto flex w-full max-w-xs items-center justify-center gap-[clamp(0.75rem,14vw,2.75rem)] text-base font-medium text-gray-700 sm:max-w-lg sm:justify-between sm:gap-0 md:max-w-2xl lg:max-w-4xl">
            <li>
              <NavItem name="Home" to="#home" />
            </li>
            <li>
              <NavItem name="Projects" to="#projects" />
            </li>
            <li>
              <NavItem name="About" to="#about" />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
