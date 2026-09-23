import { FaStar, FaPlay, FaPlus } from "react-icons/fa";
import { Link } from "react-router";

const MovieCard = ({ movie }) => {
    return (
        <div className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-lg transition duration-300 hover:-translate-y-2 hover:border-pink-500/50 hover:shadow-pink-500/10">

            {/* Poster */}
            <div className="relative h-80 overflow-hidden">
                <img
                    src={movie.poster}
                    alt={movie.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent opacity-80" />

                {/* Rating */}
                <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-black/70 px-3 py-1 text-sm font-semibold text-yellow-400 backdrop-blur">
                    <FaStar />
                    {movie.rating}
                </div>

                {/* Genre */}
                <div className="absolute left-3 top-3 rounded-full bg-pink-500 px-3 py-1 text-xs font-semibold text-white">
                    {movie.genre}
                </div>

                {/* Bottom title */}
                <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="truncate text-xl font-bold text-white">
                        {movie.title}
                    </h3>

                    <p className="mt-1 text-sm text-slate-300">
                        {movie.year} • {movie.duration}
                    </p>
                </div>

                {/* Hover buttons */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/50 opacity-0 backdrop-blur-sm transition duration-300 group-hover:opacity-100">

                    <Link
                        to={`/movies/${movie.id}`}
                        className="btn btn-circle bg-pink-500 text-white border-none hover:bg-pink-600"
                    >
                        <FaPlay />
                    </Link>

                    <button className="btn btn-circle border border-white/30 bg-white/10 text-white hover:bg-white/20">
                        <FaPlus />
                    </button>

                </div>
            </div>

            {/* Card body */}
            <div className="p-4">
                <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-400">
                        {movie.language}
                    </span>

                    <span className="text-sm text-slate-400">
                        {movie.country}
                    </span>
                </div>

                <Link
                    to={`/movies/${movie.id}`}
                    className="mt-4 block w-full rounded-lg bg-pink-500 py-2 text-center font-semibold text-white transition hover:bg-pink-600"
                >
                    View Details
                </Link>
            </div>
        </div>
    );
};

export default MovieCard;