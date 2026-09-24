import { use, useState } from "react";
import { NavLink, Link, useNavigate } from "react-router";
import {
    FaBars,
    FaTimes,
    FaSearch,
    FaMoon,
    FaSun,
    FaSignOutAlt,
    FaUser,
    FaPlus,
} from "react-icons/fa";
import AuthContext from "../contexts/AuthContext";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [theme, setTheme] = useState("dark");
    const [profileOpen, setProfileOpen] = useState(false);

    const { user, loading, signOutFunc } = use(AuthContext);

    const navigate = useNavigate();

    const handleThemeChange = () => {
        const newTheme = theme === "dark" ? "light" : "dark";

        setTheme(newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
    };

    const handleSignOut = () => {
        signOutFunc()
            .then(() => {
                setProfileOpen(false);
                setOpen(false);
                navigate("/login");
            })
            .catch((error) => {
                console.log(error);
            });
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
        <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur-xl">

            <div className="mx-auto max-w-7xl px-4">

                {/* Navbar Top */}
                <div className="flex items-center justify-between py-4 lg:py-5">

                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3">

                        <div className="h-8 w-8 rounded-xl lg:h-11 lg:w-11">
                            <img
                                src="/favicon.png"
                                alt="MovieMaster Logo"
                                className="h-full w-full rounded-xl object-cover"
                            />
                        </div>

                        <div>
                            <h1 className="text-md font-bold text-white lg:text-xl">
                                Movie
                                <span className="text-pink-500">
                                    Master
                                </span>
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

                            <FaSearch className="absolute left-3 top-1/2 z-10 -translate-y-1/2 text-slate-400" />

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


                        {/* User Section */}
                        {loading ? (
                            <span className="loading loading-spinner loading-sm"></span>
                        ) : user ? (

                            <div className="relative">

                                {/* Profile Picture */}
                                <button
                                    onClick={() =>
                                        setProfileOpen(!profileOpen)
                                    }
                                    className="rounded-full"
                                >
                                    <img
                                        className="h-11 w-11 rounded-full border-2 border-pink-500 object-cover transition hover:border-pink-400"
                                        src={
                                            user.photoURL ||
                                            "https://i.ibb.co/5GzXkwq/user.png"
                                        }
                                        alt={
                                            user.displayName ||
                                            "User"
                                        }
                                    />
                                </button>


                                {/* Profile Dropdown */}
                                {profileOpen && (
                                    <div className="absolute right-0 top-14 z-50 w-60 overflow-hidden rounded-xl border border-slate-700 bg-slate-900 shadow-2xl">

                                        {/* User Information */}
                                        <div className="border-b border-slate-700 px-4 py-4">

                                            <div className="flex items-center gap-3">

                                                <img
                                                    className="h-10 w-10 rounded-full border border-pink-500 object-cover"
                                                    src={
                                                        user.photoURL ||
                                                        "https://i.ibb.co/5GzXkwq/user.png"
                                                    }
                                                    alt={
                                                        user.displayName ||
                                                        "User"
                                                    }
                                                />

                                                <div className="min-w-0">

                                                    <p className="truncate font-semibold text-white">
                                                        {user.displayName ||
                                                            "User"}
                                                    </p>

                                                    <p className="truncate text-xs text-slate-400">
                                                        {user.email}
                                                    </p>

                                                </div>

                                            </div>

                                        </div>


                                        {/* Profile */}
                                        <Link
                                            to="/profile"
                                            onClick={() =>
                                                setProfileOpen(false)
                                            }
                                            className="flex items-center gap-3 px-4 py-3 text-sm text-slate-300 transition hover:bg-slate-800 hover:text-pink-400"
                                        >
                                            <FaUser />
                                            Profile
                                        </Link>


                                        {/* My Collection */}
                                        <Link
                                            to="/my-collection"
                                            onClick={() =>
                                                setProfileOpen(false)
                                            }
                                            className="flex items-center gap-3 px-4 py-3 text-sm text-slate-300 transition hover:bg-slate-800 hover:text-pink-400"
                                        >
                                            <FaUser />
                                            My Collection
                                        </Link>


                                        {/* Watchlist */}
                                        <Link
                                            to="/watchlist"
                                            onClick={() =>
                                                setProfileOpen(false)
                                            }
                                            className="flex items-center gap-3 px-4 py-3 text-sm text-slate-300 transition hover:bg-slate-800 hover:text-pink-400"
                                        >
                                            <FaUser />
                                            Watchlist
                                        </Link>
                                        <Link
                                            to="/movies/add"
                                            onClick={() => setProfileOpen(false)}
                                            className="flex items-center gap-3 px-4 py-3 text-sm text-slate-300 transition hover:bg-slate-800 hover:text-pink-400"
                                        >
                                             <FaPlus />
                                            Add Movie
                                        </Link>



                                        {/* Logout */}
                                        <button
                                            onClick={handleSignOut}
                                            className="flex w-full items-center gap-3 border-t border-slate-700 px-4 py-3 text-sm text-red-400 transition hover:bg-slate-800 hover:text-red-300"
                                        >
                                            <FaSignOutAlt />
                                            Logout
                                        </button>

                                    </div>
                                )}

                            </div>

                        ) : (

                            <div className="flex gap-3">

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

                        )}

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

                            {/* Navigation Links */}
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


                            {/* Mobile User Section */}
                            {loading ? (
                                <span className="loading loading-spinner loading-sm"></span>
                            ) : user ? (

                                <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900 p-3">

                                    {/* Profile */}
                                    <div className="flex items-center gap-3">

                                        <img
                                            className="h-11 w-11 rounded-full border-2 border-pink-500 object-cover"
                                            src={
                                                user.photoURL || 'User'
                                            }
                                            alt={
                                                user.displayName ||
                                                "User"
                                            }
                                        />

                                        <div className="max-w-37.5">

                                            <p className="truncate font-semibold text-white">
                                                {user.displayName ||
                                                    "User"}
                                            </p>

                                            <p className="truncate text-xs text-slate-400">
                                                {user.email}
                                            </p>

                                        </div>

                                    </div>


                                    {/* Mobile Logout */}
                                    <button
                                        onClick={handleSignOut}
                                        className="flex items-center gap-2 rounded-lg border border-red-500/50 px-3 py-2 text-sm font-semibold text-red-400 transition hover:bg-red-500 hover:text-white"
                                    >
                                        <FaSignOutAlt />
                                        Logout
                                    </button>

                                </div>

                            ) : (

                                <div className="flex gap-3">

                                    <Link
                                        to="/login"
                                        onClick={() => setOpen(false)}
                                        className="flex-1 rounded-lg border border-pink-500 px-4 py-2 text-center font-semibold text-pink-400 transition hover:bg-pink-500 hover:text-white"
                                    >
                                        Login
                                    </Link>

                                    <Link
                                        to="/register"
                                        onClick={() => setOpen(false)}
                                        className="flex-1 rounded-lg bg-pink-500 px-4 py-2 text-center font-semibold text-white transition hover:bg-pink-600"
                                    >
                                        Register
                                    </Link>

                                </div>

                            )}

                        </nav>

                    </div>
                )}

            </div>

        </header>
    );
};

export default Navbar;