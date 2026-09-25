

import { FaFilm, FaUsers } from "react-icons/fa";
import { Link } from "react-router";
import MovieCard from "../components/MovieCard";
import SectionTitle from "../components/SectionTitle";
import Hero from "../components/Hero";
import { use, useEffect, useState } from "react";
import AuthContext from "../contexts/AuthContext";
import Loading from "../components/Loading";


const latestMoviesPromise = fetch(`${import.meta.env.VITE_API_URL}/latest-movies`).then(res=>res.json())
const topMoviesPromise = fetch(`${import.meta.env.VITE_API_URL}/top-movies`).then(res=>res.json())

const Home = () => {
    const {loading} = use(AuthContext)
    const topMovies = use(topMoviesPromise);
    const latestMovies = use(latestMoviesPromise);

    const [statistics, setStatistics] = useState({
        totalMovies: 0,
        totalUsers: 0
    });

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/statistics`)
            .then(res => res.json())
            .then(data => {
                setStatistics(data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <div>

            {/* Hero */}
            <Hero></Hero>

            {/* Stats */}
            <section className="border-y border-slate-800 bg-slate-900/50">
                <div className="mx-auto grid max-w-7xl grid-cols-2 ">

                    <div className="border-r border-slate-800 p-8 text-center">
                        <FaFilm className="mx-auto mb-3 text-3xl text-pink-500" />
                        <h3 className="text-3xl font-bold text-white">{statistics.totalMovies}+</h3>
                        <p className="mt-1 text-slate-400">Movies</p>
                    </div>

                    <div className="border-r border-slate-800 p-8 text-center">
                        <FaUsers className="mx-auto mb-3 text-3xl text-cyan-400" />
                        <h3 className="text-3xl font-bold text-white">{statistics.totalUsers}+</h3>
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

                {loading ? <Loading></Loading> : <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {topMovies.map((movie) => (
                        <MovieCard key={movie._id} movie={movie} />
                    ))}
                </div>}

            </section>

            {/* Latest */}
            <section className="bg-slate-900/50 py-20">

                <div className="mx-auto max-w-7xl px-4">

                    <SectionTitle
                        title="Latest Movies"
                        subtitle="Freshly added movies waiting for you."
                    />
                    {loading ? <Loading></Loading> : <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
                        {latestMovies.map((movie) => (
                            <MovieCard key={movie._id} movie={movie} />
                        ))}
                    </div>}
                    
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