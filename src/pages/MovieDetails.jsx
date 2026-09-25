import { use } from "react";
import {
    FaStar,
    FaClock,
    FaCalendar,
    FaGlobe,
    FaLanguage,
    FaUser,
    FaEdit,
    FaTrash,
    FaPlus,
} from "react-icons/fa";
import { Link, useLoaderData } from "react-router";
import { toast } from "react-toastify";
import AuthContext from "../contexts/AuthContext";

const MovieDetails = () => {
    const {user} = use(AuthContext)
    const movie = useLoaderData();

    const {
        _id,
        title,
        genre,
        releaseYear,
        director,
        cast,
        rating,
        duration,
        plotSummary,
        posterUrl,
        language,
        country,
        addedBy,
    } = movie;

    const handleAddToWatchlist = async () => {
        const watchlistMovie = {
            movieId: movie._id,
            addedBy: user.email,
        };
        const response = await fetch(`${import.meta.env.VITE_API_URL}/watchlist`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(watchlistMovie),
        });
        const data = await response.json();
        if (response.ok) {
            toast.success("Added to watchlist!");
        } else {
            toast.error(data.message || "Failed to add!");
        }
    };

    return (
        <div className="min-h-screen bg-slate-950">

            {/* Hero */}
            <section className="relative overflow-hidden">

                {/* Background */}
                <div className="absolute inset-0">
                    <img
                        src={posterUrl}
                        className="h-full w-full object-cover opacity-20 blur-sm"
                        alt={title}
                    />

                    <div className="absolute inset-0 bg-linear-to-b from-slate-950/50 via-slate-950 to-slate-950" />
                </div>

                <div className="relative mx-auto max-w-7xl px-4 py-16">

                    <div className="grid gap-10 md:grid-cols-[300px_1fr]">

                        {/* Poster */}
                        <div>
                            <img
                                src={posterUrl}
                                className="w-full rounded-2xl shadow-2xl"
                                alt={title}
                            />
                        </div>

                        {/* Details */}
                        <div className="flex flex-col justify-center">

                            {/* Genre */}
                            <span className="w-fit rounded-full bg-pink-500 px-4 py-2 text-sm font-semibold text-white">
                                {genre}
                            </span>

                            {/* Title */}
                            <h1 className="mt-5 text-4xl font-black text-white md:text-6xl">
                                {title}
                            </h1>

                            {/* Rating / Year / Duration */}
                            <div className="mt-5 flex flex-wrap gap-5 text-slate-300">

                                <span className="flex items-center gap-2">
                                    <FaStar className="text-yellow-400" />
                                    {rating}
                                </span>

                                <span className="flex items-center gap-2">
                                    <FaCalendar />
                                    {releaseYear}
                                </span>

                                <span className="flex items-center gap-2">
                                    <FaClock />
                                    {duration} min
                                </span>

                            </div>

                            {/* Plot */}
                            <p className="mt-7 max-w-3xl leading-8 text-slate-400">
                                {plotSummary}
                            </p>

                            {/* Buttons */}
                            <div className="mt-8 flex flex-wrap gap-3">

                                <button onClick={handleAddToWatchlist} className="btn border-none bg-pink-500 text-white hover:bg-pink-600">
                                    <FaPlus />
                                    Add to Watchlist
                                </button>

                                <Link
                                    to={`/movies/update/${_id}`}
                                    className="btn btn-outline border-slate-700 text-white"
                                >
                                    <FaEdit />
                                    Edit
                                </Link>

                                <button className="btn btn-outline border-red-500/40 text-red-400">
                                    <FaTrash />
                                    Delete
                                </button>

                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* Information */}
            <section className="mx-auto max-w-7xl px-4 pb-20">

                <div className="grid gap-6 md:grid-cols-2">

                    {/* Movie Information */}
                    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

                        <h2 className="mb-6 text-xl font-bold text-white">
                            Movie Information
                        </h2>

                        <div className="space-y-5">

                            {/* Director */}
                            <div className="flex items-center gap-4">
                                <FaUser className="text-pink-500" />

                                <div>
                                    <p className="text-xs text-slate-500">
                                        Director
                                    </p>

                                    <p className="text-white">
                                        {director}
                                    </p>
                                </div>
                            </div>

                            {/* Language */}
                            <div className="flex items-center gap-4">
                                <FaLanguage className="text-pink-500" />

                                <div>
                                    <p className="text-xs text-slate-500">
                                        Language
                                    </p>

                                    <p className="text-white">
                                        {language}
                                    </p>
                                </div>
                            </div>

                            {/* Country */}
                            <div className="flex items-center gap-4">
                                <FaGlobe className="text-pink-500" />

                                <div>
                                    <p className="text-xs text-slate-500">
                                        Country
                                    </p>

                                    <p className="text-white">
                                        {country}
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Cast */}
                    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

                        <h2 className="mb-6 text-xl font-bold text-white">
                            Cast
                        </h2>

                        <div className="flex flex-wrap gap-3">

                            {cast.split(",").map((actor) => (
                                <span
                                    key={actor}
                                    className="rounded-full border border-slate-700 bg-slate-950 px-4 py-2 text-sm text-slate-300"
                                >
                                    {actor.trim()}
                                </span>
                            ))}

                        </div>
                    </div>

                </div>

                {/* Added By */}
                <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900 p-6">

                    <p className="text-sm text-slate-500">
                        Added By
                    </p>

                    <div className="mt-3 flex items-center gap-3">

                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-500 text-lg font-bold text-white">
                            {addedBy?.charAt(0).toUpperCase()}
                        </div>

                        <div>
                            <p className="font-semibold text-white">
                                {addedBy}
                            </p>

                            <p className="text-sm text-slate-500">
                                Movie Contributor
                            </p>
                        </div>

                    </div>

                </div>

            </section>

        </div>
    );
};

export default MovieDetails;