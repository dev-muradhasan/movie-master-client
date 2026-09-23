import { useState } from "react";
import { NavLink, Link } from "react-router";
import {
    FaFilm,
    FaBars,
    FaTimes,
    FaSearch,
    FaMoon,
    FaSun,
} from "react-icons/fa";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [theme, setTheme] = useState("dark");

    const handleThemeChange = () => {
        const newTheme = theme === "dark" ? "light" : "dark";

        setTheme(newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
    };

    const navItems = [
        { name: "Home", path: "/" },
        { name: "All Movies", path: "/movies" },
        { name: "My Collection", path: "/my-collection" },
        { name: "Watchlist", path: "/watchlist" },
    ];

    const navLink = ({ isActive }) =>
        `transition hover:text-pink-400 ${isActive
            ? "text-pink-500 font-semibold"
            : "text-slate-300"
        }`;

    return (
        <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/60 backdrop-blur-xl">

            <div className="mx-auto max-w-7xl px-4">

                {/* Navbar Top */}
                <div className="flex items-center justify-between py-4 lg:py-5">

                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3">

                        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-pink-500 text-white shadow-lg shadow-pink-500/20 lg:h-11 lg:w-11">
                            <FaFilm size={20} />
                        </div>

                        <div>
                            <h1 className="text-md font-bold text-white lg:text-xl">
                                Movie
                                <span className="text-pink-500">Master</span>
                            </h1>

                            <p className="hidden text-[10px] tracking-[3px] text-slate-500 sm:block">
                                MOVIE MANAGEMENT
                            </p>
                        </div>

                    </Link>


                    {/* Desktop Navigation */}
                    <nav className="hidden items-center gap-7 lg:flex">

                        {navItems.map((item) => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                className={navLink}
                            >
                                {item.name}
                            </NavLink>
                        ))}

                    </nav>


                    {/* Desktop Right */}
                    <div className="hidden items-center gap-3 lg:flex">

                        {/* Search */}
                        <div className="relative">
                            <FaSearch className="absolute left-3 z-10 top-1/2 -translate-y-1/2 text-slate-400" />

                            <input
                                type="text"
                                placeholder="Search movies..."
                                className="input w-52 rounded-full border-slate-700 bg-slate-900 pl-10 text-white placeholder:text-slate-500 focus:border-pink-500"
                            />
                        </div>


                        {/* Theme */}
                        <button
                            onClick={handleThemeChange}
                            className="btn btn-circle btn-ghost text-slate-300"
                        >
                            {theme === "dark" ? (
                                <FaSun />
                            ) : (
                                <FaMoon />
                            )}
                        </button>


                        {/* Login */}
                        <Link
                            to="/login"
                            className="rounded-lg border border-pink-500 px-4 py-2 font-semibold text-pink-400 transition hover:bg-pink-500 hover:text-white"
                        >
                            Login
                        </Link>


                        {/* Register */}
                        <Link
                            to="/register"
                            className="rounded-lg bg-pink-500 px-4 py-2 font-semibold text-white transition hover:bg-pink-600"
                        >
                            Register
                        </Link>

                    </div>


                    {/* Mobile Right */}
                    <div className="flex items-center gap-1 lg:hidden">

                        {/* Mobile Search */}
                        <div className="relative">

                            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />

                            <input
                                type="text"
                                placeholder="Search"
                                className="w-28 rounded-full border border-slate-700 bg-slate-900 py-2 pl-9 pr-3 text-sm text-white outline-none focus:border-pink-500"
                            />

                        </div>


                        {/* Mobile Theme */}
                        <button
                            onClick={handleThemeChange}
                            className="btn btn-circle btn-ghost text-slate-300"
                        >
                            {theme === "dark" ? (
                                <FaSun />
                            ) : (
                                <FaMoon />
                            )}
                        </button>


                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setOpen(!open)}
                            className="btn btn-circle btn-ghost text-white"
                        >
                            {open ? (
                                <FaTimes size={20} />
                            ) : (
                                <FaBars size={20} />
                            )}
                        </button>

                    </div>

                </div>


                {/* Mobile Menu */}
                {open && (
                    <div className="border-t border-slate-800 py-5 lg:hidden">

                        <nav className="flex flex-col gap-4">

                            {navItems.map((item) => (
                                <NavLink
                                    key={item.path}
                                    to={item.path}
                                    onClick={() => setOpen(false)}
                                    className={navLink}
                                >
                                    {item.name}
                                </NavLink>
                            ))}


                            {/* Add Movie */}
                            <Link
                                to="/movies/add"
                                onClick={() => setOpen(false)}
                                className="rounded-lg bg-pink-500 px-4 py-2 text-center font-semibold text-white transition hover:bg-pink-600"
                            >
                                Add Movie
                            </Link>


                            {/* login */}
                            <Link
                                to="/login"
                                onClick={() => setOpen(false)}
                                className="rounded-lg border border-pink-500 px-4 py-2 text-center font-semibold text-pink-400 transition hover:bg-pink-500 hover:text-white"
                            >
                                Login
                            </Link>


                            {/* Register */}
                            <Link
                                to="/register"
                                onClick={() => setOpen(false)}
                                className="rounded-lg bg-pink-500 px-4 py-2 text-center font-semibold text-white transition hover:bg-pink-600"
                            >
                                Register
                            </Link>



                        </nav>

                    </div>
                )}

            </div>

        </header>
    );
};

export default Navbar;