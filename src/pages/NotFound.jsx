import { FaFilm, FaHome } from "react-icons/fa";
import { Link } from "react-router";

const NotFound = () => {
    return (
        <div className="flex min-h-screen items-center justify-center bg-slate-950 px-4">

            <div className="text-center">

                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl bg-pink-500/10 text-5xl text-pink-500">
                    <FaFilm />
                </div>

                <h1 className="mt-8 text-8xl font-black text-white">
                    404
                </h1>

                <h2 className="mt-4 text-3xl font-bold text-white">
                    Movie Not Found
                </h2>

                <p className="mx-auto mt-4 max-w-md text-slate-400">
                    Looks like this page disappeared from our movie universe.
                </p>

                <Link
                    to="/"
                    className="btn mt-8 border-none bg-pink-500 text-white hover:bg-pink-600"
                >
                    <FaHome />
                    Back to Home
                </Link>

            </div>

        </div>
    );
};

export default NotFound;