import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import { Link } from "react-router";
import MovieCard from "../components/MovieCard";

const movies = [
    {
        id: 1,
        title: "The Dark Knight",
        genre: "Action",
        year: 2008,
        rating: 9.0,
        duration: "2h 32m",
        language: "English",
        country: "USA",
        poster:
            "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    },
    {
        id: 2,
        title: "Inception",
        genre: "Sci-Fi",
        year: 2010,
        rating: 8.8,
        duration: "2h 28m",
        language: "English",
        country: "USA",
        poster:
            "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
    },
];

const MyCollection = () => {
    return (
        <div className="min-h-screen bg-slate-950 px-4 py-16">

            <div className="mx-auto max-w-7xl">

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
                        <p className="text-sm text-slate-500">Total Movies</p>
                        <h3 className="mt-2 text-3xl font-bold text-white">
                            24
                        </h3>
                    </div>

                    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
                        <p className="text-sm text-slate-500">Average Rating</p>
                        <h3 className="mt-2 text-3xl font-bold text-yellow-400">
                            8.6
                        </h3>
                    </div>

                    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
                        <p className="text-sm text-slate-500">Genres</p>
                        <h3 className="mt-2 text-3xl font-bold text-pink-500">
                            8
                        </h3>
                    </div>

                    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
                        <p className="text-sm text-slate-500">Watchlist</p>
                        <h3 className="mt-2 text-3xl font-bold text-cyan-400">
                            12
                        </h3>
                    </div>

                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {movies.map((movie) => (
                        <div key={movie.id} className="relative">

                            <MovieCard movie={movie} />

                            <div className="absolute right-3 top-3 z-10 flex gap-2">

                                <Link
                                    to={`/movies/update/${movie.id}`}
                                    className="btn btn-circle btn-sm bg-cyan-500 text-white border-none"
                                >
                                    <FaEdit />
                                </Link>

                                <button className="btn btn-circle btn-sm bg-red-500 text-white border-none">
                                    <FaTrash />
                                </button>

                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default MyCollection;