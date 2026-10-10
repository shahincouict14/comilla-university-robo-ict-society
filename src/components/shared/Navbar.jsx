
import { Link, NavLink } from 'react-router-dom'
import { FaBars, FaRobot } from 'react-icons/fa'

const Navbar = () => {
    const links = (
        <>
            <li>
                <NavLink
                    to="/"
                    end
                    className={({ isActive }) =>
                        isActive
                            ? 'text-[#E63946] font-semibold bg-[#dfe9f3]'
                            : 'text-[#F8FAFC] hover:text-[#E63946] transition-colors'
                    }
                >
                    Home
                </NavLink>
            </li>

            <li>
                <NavLink
                    to="/events"
                    className={({ isActive }) =>
                        isActive
                            ? 'text-[#E63946] font-semibold bg-[#dfe9f3]'
                            : 'text-[#F8FAFC] hover:text-[#E63946] transition-colors'
                    }
                >
                    Events
                </NavLink>
            </li>

            <li>
                <NavLink
                    to="/how-to-join"
                    className={({ isActive }) =>
                        isActive
                            ? 'text-[#E63946] font-semibold bg-[#dfe9f3]'
                            : 'text-[#F8FAFC] hover:text-[#E63946] transition-colors'
                    }
                >
                    How to Join
                </NavLink>
            </li>

            <li>
                <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                        isActive
                            ? 'text-[#E63946] font-semibold bg-[#dfe9f3]'
                            : 'text-[#F8FAFC] hover:text-[#E63946] transition-colors'
                    }
                >
                    Dashboard
                </NavLink>
            </li>
        </>
    )

    return (
        <header className="sticky top-0 z-50 border-b border-[#25304A] bg-[#0B132B] text-[#F8FAFC]">
            <div className="navbar mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Left: hamburger and logo */}
                <div className="navbar-start">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost px-2 text-[#F8FAFC] hover:bg-[#1C2742] hover:text-[#E63946] lg:hidden"
                        >
                            <FaBars className="text-lg" />
                        </div>

                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content z-10 mt-3 w-52 rounded-box border border-[#25304A] bg-[#0B132B] p-2 text-[#F8FAFC] shadow-xl"
                        >
                            {links}
                        </ul>
                    </div>

                    <Link
                        to="/"
                        className="flex items-center gap-2 text-lg font-bold text-[#F8FAFC] transition-colors hover:text-[#E63946] sm:text-xl"
                    >
                         <img className='w-10' src="/src/assets/logos/logo.svg"></img>
                        CRIS
                    </Link>
                </div>

                {/* Center: desktop navigation */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal gap-1 px-1">
                        {links}
                    </ul>
                </div>

                {/* Right: login button */}
                <div className="navbar-end">
                    <Link
                        to="/login"
                        className="btn btn-sm border-[#E63946] bg-[#E63946] text-white shadow-sm transition-all hover:border-[#C92332] hover:bg-[#C92332] md:btn-md"
                    >
                        Login
                    </Link>
                </div>

            </div>
        </header>
    )
}

export default Navbar
