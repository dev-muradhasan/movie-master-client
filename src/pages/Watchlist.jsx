import { FaBookmark, FaTrash } from "react-icons/fa";
import MovieCard from "../components/MovieCard";

const Watchlist = () => {
    const movies = [
        {
            id: 1,
            title: "Interstellar",
            genre: "Sci-Fi",
            year: 2014,
            rating: 8.7,
            duration: "2h 49m",
            language: "English",
            country: "USA",
            poster:
                "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
        },
        {
            id: 2,
            title: "Joker",
            genre: "Drama",
            year: 2019,
            rating: 8.4,
            duration: "2h 2m",
            language: "English",
            country: "USA",
            poster:
                "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
        },
    ];

    return (
        <div className="min-h-screen bg-slate-950 px-4 py-16">

            <div className="mx-auto max-w-7xl">

                <div className="mb-10">
                    <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500/10 text-xl text-pink-500">
                            <FaBookmark />
                        </div>

                        <div>
                            <h1 className="text-4xl font-bold text-white">
                                My Watchlist
                            </h1>

                            <p className="mt-1 text-slate-400">
                                Movies you want to watch later.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

                    {movies.map((movie) => (
                        <div key={movie.id} className="relative">

                            <MovieCard movie={movie} />

                            <button className="absolute right-3 top-3 z-10 btn btn-circle btn-sm border-none bg-red-500 text-white">
                                <FaTrash />
                            </button>

                        </div>
                    ))}

                </div>

            </div>
        </div>
    );
};

export default Watchlist;