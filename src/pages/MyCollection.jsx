import { use, useEffect, useState } from "react";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import { Link } from "react-router";
import MovieCard from "../components/MovieCard";
import AuthContext from "../contexts/AuthContext";

const MyCollection = () => {
    const { user } = use(AuthContext);
    const [watchlistCount, setWatchlistCount] = useState(0)
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!user?.email) return;

        fetch(`${import.meta.env.VITE_API_URL}/movies?email=${user.email}`)
            .then((res) => res.json())
            .then((data) => {
                setMovies(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setLoading(false);
            });
    }, [user?.email]);
    useEffect(() => {
        if (!user?.email) return;

        fetch(`${import.meta.env.VITE_API_URL}/watchlist?email=${user.email}`)
            .then((res) => res.json())
            .then((data) => {
                setWatchlistCount(data.length);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [user?.email]);

    if (loading) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-slate-950">
                <span className="loading loading-spinner loading-lg text-pink-500"></span>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-950 px-4 py-16">

            <div className="mx-auto max-w-7xl px-4">

                <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">

                    <div>
                        <p className="text-sm font-semibold uppercase tracking-widest text-pink-500">
                            MY MOVIES
                        </p>

                        <h1 className="mt-3 text-4xl font-black text-white">
                            My Collection
                        </h1>

                        <p className="mt-3 text-slate-400">
                            Manage movies that you have added.
                        </p>
                    </div>

                    <Link
                        to="/movies/add"
                        className="btn border-none bg-pink-500 text-white hover:bg-pink-600"
                    >
                        <FaPlus />
                        Add Movie
                    </Link>

                </div>

                <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4">

                    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
                        <p className="text-sm text-slate-500">
                            Total Movies
                        </p>

                        <h3 className="mt-2 text-3xl font-bold text-white">
                            {movies.length}
                        </h3>
                    </div>

                    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
                        <p className="text-sm text-slate-500">
                            Average Rating
                        </p>

                        <h3 className="mt-2 text-3xl font-bold text-yellow-400">
                            {movies.length
                                ? (
                                    movies.reduce(
                                        (sum, movie) =>
                                            sum + Number(movie.rating || 0),
                                        0
                                    ) / movies.length
                                ).toFixed(1)
                                : "0.0"}
                        </h3>
                    </div>

                    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
                        <p className="text-sm text-slate-500">
                            Genres
                        </p>

                        <h3 className="mt-2 text-3xl font-bold text-pink-500">
                            {new Set(movies.map((movie) => movie.genre)).size}
                        </h3>
                    </div>

                    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
                        <p className="text-sm text-slate-500">
                            Watchlist
                        </p>

                        <h3 className="mt-2 text-3xl font-bold text-cyan-400">
                            {watchlistCount}
                        </h3>
                    </div>

                </div>

                {movies.length === 0 ? (
                    <div className="py-20 text-center">
                        <p className="text-lg text-slate-400">
                            You haven't added any movies yet.
                        </p>

                        <Link
                            to="/movies/add"
                            className="btn mt-5 border-none bg-pink-500 text-white hover:bg-pink-600"
                        >
                            <FaPlus />
                            Add Your First Movie
                        </Link>
                    </div>
                ) : (
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

                        {movies.map((movie) => (
                            <div
                                key={movie._id}
                                className="relative"
                            >

                                <MovieCard movie={movie} />

                                <div className="absolute right-3 top-3 z-10 flex gap-2">

                                    <Link
                                        to={`/movies/update/${movie._id}`}
                                        className="btn btn-circle btn-sm border-none bg-cyan-500 text-white"
                                    >
                                        <FaEdit />
                                    </Link>

                                    <button className="btn btn-circle btn-sm border-none bg-red-500 text-white">
                                        <FaTrash />
                                    </button>

                                </div>

                            </div>
                        ))}

                    </div>
                )}

            </div>

        </div>
    );
};

export default MyCollection;