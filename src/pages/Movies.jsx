import { useState } from "react";
import { FaSearch, FaSlidersH, FaStar } from "react-icons/fa";
import MovieCard from "../components/MovieCard";

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
        id: 3,
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
    {
        id: 4,
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
    {
        id: 5,
        title: "Avatar",
        genre: "Fantasy",
        year: 2009,
        rating: 8.1,
        duration: "2h 42m",
        language: "English",
        country: "USA",
        poster:
            "https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg",
    },
    {
        id: 6,
        title: "Avengers",
        genre: "Action",
        year: 2012,
        rating: 8.0,
        duration: "2h 23m",
        language: "English",
        country: "USA",
        poster:
            "https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
    },
];

const Movies = () => {
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
                        Showing <span className="font-bold text-white">1250</span> movies
                    </p>

                    <div className="flex items-center gap-2 text-yellow-400">
                        <FaStar />
                        <span className="text-sm text-slate-400">
                            Top rated collection
                        </span>
                    </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {movies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>

            </section>
        </div>
    );
};

export default Movies;