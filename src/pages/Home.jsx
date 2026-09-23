

import { FaFilm, FaUsers } from "react-icons/fa";
import { Link } from "react-router";
import MovieCard from "../components/MovieCard";
import SectionTitle from "../components/SectionTitle";
import Hero from "../components/Hero";

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
        id: 5,
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
    {
        id: 6,
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

const Home = () => {
    return (
        <div>

            {/* Hero */}
            {/* <section className="relative min-h-162.5 overflow-hidden">

                <img
                    src="https://image.tmdb.org/t/p/original/6LFc5x2b6N9p5dKQ9fVQjKf9X.jpg"
                    alt="hero"
                    className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-950/90 to-transparent" />

                <div className="relative mx-auto flex min-h-162.5 max-w-7xl items-center px-4">

                    <div className="max-w-2xl">

                        <span className="mb-5 inline-block rounded-full bg-pink-500/20 px-4 py-2 text-sm font-semibold text-pink-400">
                            FEATURED MOVIE
                        </span>

                        <h1 className="text-5xl font-black leading-tight text-white md:text-7xl">
                            Discover Your
                            <span className="block text-pink-500">
                                Next Favorite
                            </span>
                            Movie
                        </h1>

                        <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                            Explore thousands of movies, build your personal
                            collection and keep track of everything you love watching.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4">

                            <Link
                                to="/movies"
                                className="btn border-none bg-pink-500 px-7 text-white hover:bg-pink-600"
                            >
                                Explore Movies
                                <FaArrowRight />
                            </Link>

                            <button className="btn btn-outline border-white/30 px-7 text-white hover:bg-white hover:text-slate-950">
                                <FaPlay />
                                Watch Trailer
                            </button>

                        </div>
                    </div>
                </div>
            </section> */}
            <Hero></Hero>

            {/* Stats */}
            <section className="border-y border-slate-800 bg-slate-900/50">
                <div className="mx-auto grid max-w-7xl grid-cols-2 ">

                    <div className="border-r border-slate-800 p-8 text-center">
                        <FaFilm className="mx-auto mb-3 text-3xl text-pink-500" />
                        <h3 className="text-3xl font-bold text-white">1,250+</h3>
                        <p className="mt-1 text-slate-400">Movies</p>
                    </div>

                    <div className="border-r border-slate-800 p-8 text-center">
                        <FaUsers className="mx-auto mb-3 text-3xl text-cyan-400" />
                        <h3 className="text-3xl font-bold text-white">8,500+</h3>
                        <p className="mt-1 text-slate-400">Users</p>
                    </div>

                </div>
            </section>

            {/* Top Rated */}
            <section className="mx-auto max-w-7xl px-4 py-20">

                <SectionTitle
                    title="Top Rated Movies"
                    subtitle="Explore the highest rated movies loved by our community."
                />

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {movies.slice(0, 3).map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>

            </section>

            {/* Latest */}
            <section className="bg-slate-900/50 py-20">

                <div className="mx-auto max-w-7xl px-4">

                    <SectionTitle
                        title="Latest Movies"
                        subtitle="Freshly added movies waiting for you."
                    />

                    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
                        {movies.map((movie) => (
                            <MovieCard key={movie.id} movie={movie} />
                        ))}
                    </div>

                </div>

            </section>

            {/* Genres */}
            <section className="mx-auto max-w-7xl px-4 py-20">

                <SectionTitle
                    title="Browse By Genre"
                    subtitle="Find movies according to your mood."
                />

                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">

                    {[
                        "Action",
                        "Drama",
                        "Comedy",
                        "Thriller",
                        "Horror",
                        "Romance",
                    ].map((genre) => (
                        <Link
                            key={genre}
                            to="/movies"
                            className="group rounded-2xl border border-slate-800 bg-slate-900 p-6 text-center transition hover:-translate-y-1 hover:border-pink-500"
                        >
                            <FaFilm className="mx-auto mb-4 text-3xl text-pink-500 transition group-hover:scale-110" />

                            <h3 className="font-semibold text-white">
                                {genre}
                            </h3>

                            <p className="mt-1 text-sm text-slate-500">
                                Explore
                            </p>
                        </Link>
                    ))}

                </div>
            </section>

            {/* About */}
            <section className="bg-linear-to-r from-pink-950/30 to-slate-950 py-20">

                <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:grid-cols-2">

                    <div>
                        <span className="text-sm font-semibold uppercase tracking-widest text-pink-500">
                            About MovieMaster
                        </span>

                        <h2 className="mt-4 text-4xl font-bold text-white">
                            Your Personal Movie Universe
                        </h2>

                        <p className="mt-5 leading-8 text-slate-400">
                            MovieMaster Pro helps movie lovers discover new films,
                            organize their personal collection, create watchlists
                            and manage their favorite movies from one place.
                        </p>

                        <Link
                            to="/movies"
                            className="btn mt-7 border-none bg-pink-500 text-white hover:bg-pink-600"
                        >
                            Explore Platform
                        </Link>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
                            <h3 className="text-4xl font-bold text-pink-500">
                                1K+
                            </h3>
                            <p className="mt-2 text-slate-400">Movies</p>
                        </div>

                        <div className="mt-8 rounded-3xl border border-slate-800 bg-slate-900 p-8">
                            <h3 className="text-4xl font-bold text-cyan-400">
                                8K+
                            </h3>
                            <p className="mt-2 text-slate-400">Members</p>
                        </div>

                        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
                            <h3 className="text-4xl font-bold text-purple-400">
                                24
                            </h3>
                            <p className="mt-2 text-slate-400">Genres</p>
                        </div>

                        <div className="mt-8 rounded-3xl border border-slate-800 bg-slate-900 p-8">
                            <h3 className="text-4xl font-bold text-green-400">
                                99%
                            </h3>
                            <p className="mt-2 text-slate-400">Satisfaction</p>
                        </div>
                    </div>

                </div>
            </section>

        </div>
    );
};

export default Home;