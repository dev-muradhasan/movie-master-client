import { use, useState } from "react";
import { FaSearch, FaSlidersH, FaStar } from "react-icons/fa";
import MovieCard from "../components/MovieCard";
import { useLoaderData } from "react-router";
import AuthContext from "../contexts/AuthContext";
import Loading from "../components/Loading";


const Movies = () => {
    const {loading} = use(AuthContext);
    const allMovies = useLoaderData();
    const [filterOpen, setFilterOpen] = useState(false);
    return (
        <div className="min-h-screen">

            {/* Header */}
            <section className="border-b border-slate-800 bg-linear-to-b from-slate-900 to-slate-950 px-4 py-16">

                <div className="mx-auto max-w-7xl text-center">

                    <p className="text-sm font-semibold uppercase tracking-[4px] text-pink-500">
                        MOVIE LIBRARY
                    </p>

                    <h1 className="mt-4 text-4xl font-black text-white md:text-5xl">
                        Explore All Movies
                    </h1>

                    <p className="mx-auto mt-4 max-w-2xl text-slate-400">
                        Search, filter and discover movies from our growing collection.
                    </p>

                </div>
            </section>

            {/* Search / Filter */}
            <section className="mx-auto max-w-7xl px-4 py-8">

                <div className="flex flex-col gap-4 lg:flex-row">

                    <div className="relative flex-1">
                        <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />

                        <input
                            type="text"
                            placeholder="Search movies by title..."
                            className="input h-14 w-full border-slate-700 bg-slate-900 pl-12 text-white"
                        />
                    </div>

                    <button
                        onClick={() => setFilterOpen(!filterOpen)}
                        className="btn h-14 border-slate-700 bg-slate-900 px-6 text-white hover:border-pink-500"
                    >
                        <FaSlidersH />
                        Filters
                    </button>

                    <select className="select h-14 border-slate-700 bg-slate-900 text-white">
                        <option>Sort by Rating</option>
                        <option>Newest</option>
                        <option>Oldest</option>
                        <option>Title A-Z</option>
                    </select>

                </div>

                {/* Filter Panel */}
                {filterOpen && (
                    <div className="mt-5 rounded-2xl border border-slate-800 bg-slate-900 p-6">

                        <div className="grid gap-6 md:grid-cols-3">

                            <div>
                                <label className="mb-3 block text-sm text-slate-400">
                                    Genres
                                </label>

                                <div className="flex flex-wrap gap-2">
                                    {["Action", "Drama", "Comedy", "Horror", "Sci-Fi"].map(
                                        (genre) => (
                                            <label
                                                key={genre}
                                                className="flex cursor-pointer items-center gap-2 rounded-lg border border-slate-700 px-3 py-2 text-sm text-slate-300"
                                            >
                                                <input
                                                    type="checkbox"
                                                    className="checkbox checkbox-sm checkbox-secondary"
                                                />
                                                {genre}
                                            </label>
                                        )
                                    )}
                                </div>
                            </div>

                            <div>
                                <label className="mb-3 block text-sm text-slate-400">
                                    Minimum Rating
                                </label>

                                <input
                                    type="range"
                                    min="0"
                                    max="10"
                                    step="0.1"
                                    className="range range-secondary"
                                />
                            </div>

                            <div>
                                <label className="mb-3 block text-sm text-slate-400">
                                    Release Year
                                </label>

                                <select className="select w-full border-slate-700 bg-slate-950 text-white">
                                    <option>All Years</option>
                                    <option>2026</option>
                                    <option>2025</option>
                                    <option>2024</option>
                                    <option>2023</option>
                                </select>
                            </div>

                        </div>

                    </div>
                )}
            </section>

            {/* Movies */}
            <section className="mx-auto max-w-7xl px-4 pb-20">

                <div className="mb-7 flex items-center justify-between">
                    <p className="text-slate-400">
                        Showing <span className="font-bold text-white">{allMovies.length}</span> movies
                    </p>

                    <div className="flex items-center gap-2 text-yellow-400">
                        <FaStar />
                        <span className="text-sm text-slate-400">
                            Top rated collection
                        </span>
                    </div>
                </div>

                {loading ? <Loading></Loading> : <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {allMovies.map((movie) => (
                        <MovieCard key={movie._id} movie={movie} />
                    ))}
                </div> }
               
                
            </section>
        </div>
    );
};

export default Movies;



