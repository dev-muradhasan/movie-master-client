import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaYoutube,
    FaFilm,
} from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
    return (
        <footer className="border-t border-slate-800 bg-slate-950">

            <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-2 lg:grid-cols-4">

                {/* Logo */}
                <div>
                    <div className="flex items-center gap-3">
                        {/* <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-pink-500 text-white">
                            <FaFilm />
                        </div> */}
                        <div className="h-11 w-11 rounded-xl">
                            <img src="/favicon.png" alt="Logo" />
                        </div>

                        <h2 className="text-xl font-bold text-white">
                            Movie<span className="text-pink-500">Master</span>
                        </h2>
                    </div>

                    <p className="mt-5 leading-7 text-slate-400">
                        Discover, organize and manage your favorite movies
                        in one beautiful platform.
                    </p>

                    <div className="mt-5 flex gap-3">
                        {[FaFacebookF, FaInstagram, FaTwitter, FaYoutube].map(
                            (Icon, index) => (
                                <button
                                    key={index}
                                    className="btn btn-circle btn-sm border-slate-700 bg-slate-900 text-slate-300 hover:border-pink-500 hover:bg-pink-500 hover:text-white"
                                >
                                    <Icon />
                                </button>
                            )
                        )}
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="mb-5 font-semibold text-white">
                        Quick Links
                    </h3>

                    <div className="flex flex-col gap-3 text-slate-400">
                        <Link className="hover:text-pink-500" to="/">
                            Home
                        </Link>
                        <Link className="hover:text-pink-500" to="/movies">
                            All Movies
                        </Link>
                        <Link className="hover:text-pink-500" to="/watchlist">
                            Watchlist
                        </Link>
                        <Link className="hover:text-pink-500" to="/my-collection">
                            My Collection
                        </Link>
                    </div>
                </div>

                {/* Categories */}
                <div>
                    <h3 className="mb-5 font-semibold text-white">
                        Genres
                    </h3>

                    <div className="grid grid-cols-2 gap-3 text-slate-400">
                        <span>Action</span>
                        <span>Drama</span>
                        <span>Comedy</span>
                        <span>Thriller</span>
                        <span>Horror</span>
                        <span>Romance</span>
                    </div>
                </div>

                {/* Newsletter */}
                <div>
                    <h3 className="mb-5 font-semibold text-white">
                        Stay Updated
                    </h3>

                    <p className="mb-4 text-sm text-slate-400">
                        Get updates about latest movies.
                    </p>

                    <div className="join w-full">
                        <input
                            className="input join-item w-full border-slate-700 bg-slate-900"
                            placeholder="Your email"
                        />

                        <button className="btn join-item bg-pink-500 text-white hover:bg-pink-600">
                            Join
                        </button>
                    </div>
                </div>
            </div>

            <div className="border-t border-slate-800 py-5 text-center text-sm text-slate-500">
                © 2026 MovieMaster Pro. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;