import { NavLink } from "react-router-dom"

const NavItem = ({ name, to }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `relative font-bold transition hover:text-gray-900 ${
        isActive ? "text-gray-900" : "text-gray-400"
      }
      after:absolute after:left-0 after:bottom-[-5px] after:h-[3px]
      after:w-0 after:bg-gray-900
      after:transition-all after:duration-300
      hover:after:w-full`
    }
  >
    {name}
  </NavLink>
)

const Navbar = () => {
  return (
    <header className="border-b border-gray-200">
      <nav className="mx-auto flex max-w-6xel items-center justify-between px-10 py-4">
        <div className="flex w-full items-center gap-6">
          <ul className="flex w-full items-center justify-center gap-[clamp(1rem,30vw,20rem)] text-base font-medium text-gray-700">
            <li>
              <NavItem name="Home" to="/" />
            </li>
            <li>
              <NavItem name="Projects" to="/projects" />
            </li>
            <li>
              <NavItem name="About" to="/about" />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar;