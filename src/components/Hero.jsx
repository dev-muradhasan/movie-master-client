import { useEffect, useState } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import {
    FaArrowRight,
    FaPlay,
    FaStar,
    FaChevronLeft,
    FaChevronRight,
} from "react-icons/fa";

// const featuredMovies = [
//     {
//         id: 1,
//         title: "The Dark Knight",
//         genre: "Action",
//         year: 2008,
//         rating: 9.0,
//         duration: "2h 32m",
//         description:
//             "When a dangerous criminal threatens Gotham City, Batman must face one of his greatest challenges.",
//         image:
//             "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
//     },
//     {
//         id: 2,
//         title: "Interstellar",
//         genre: "Sci-Fi",
//         year: 2014,
//         rating: 8.7,
//         duration: "2h 49m",
//         description:
//             "A team of explorers travels through a mysterious wormhole in search of a new home for humanity.",
//         image:
//             "https://image.tmdb.org/t/p/original/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
//     },
//     {
//         id: 3,
//         title: "Inception",
//         genre: "Thriller",
//         year: 2010,
//         rating: 8.8,
//         duration: "2h 28m",
//         description:
//             "A skilled thief who steals secrets through dreams receives a mission that could change everything.",
//         image:
//             "https://image.tmdb.org/t/p/original/8ZTVqvKDQ8emSGUEMjsS4yHAwrp.jpg",
//     },
//     {
//         id: 4,
//         title: "Avengers: Endgame",
//         genre: "Action",
//         year: 2019,
//         rating: 8.4,
//         duration: "3h 1m",
//         description:
//             "The Avengers assemble once again for their final battle to restore what was lost.",
//         image:
//             "https://image.tmdb.org/t/p/original/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg",
//     },
// ];

const Hero = () => {
    const [featuredMovies, setFeaturedMovies] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(1);
    const [loading, setLoading] = useState(true)

    
    useEffect(() => {
        fetch("http://localhost:3000/movies")
        .then((res) => res.json())
        .then((data) => {
            setFeaturedMovies(data);
            setLoading(false);
            console.log(data);
        })
        .catch((error) => {
            console.error(error);
            setLoading(false);
        });
    }, []);

    const movie = featuredMovies[currentIndex];

    // Auto slide
    useEffect(() => {
        const interval = setInterval(() => {
            setDirection(1);

            setCurrentIndex((prev) => {
                return (prev + 1) % featuredMovies.length;
            });
        }, 5000);

        return () => clearInterval(interval);
    }, [featuredMovies.length]);
  

    // Next
    const nextMovie = () => {
        setDirection(1);

        setCurrentIndex((prev) => {
            return (prev + 1) % featuredMovies.length;
        });
    };

    // Previous
    const previousMovie = () => {
        setDirection(-1);

        setCurrentIndex((prev) => {
            return (
                (prev - 1 + featuredMovies.length) %
                featuredMovies.length
            );
        });
    };

    if (loading) {
        return (
            <section className="relative flex h-124 items-center justify-center overflow-hidden bg-slate-950">
                <span className="loading loading-spinner loading-lg text-pink-500"></span>
            </section>
        );
    }

    if (featuredMovies.length === 0) {
        return (
            <section className="relative flex h-124 items-center justify-center overflow-hidden bg-slate-950">
                <p className="text-lg text-slate-400">No movies found.</p>
            </section>
        );
    }

    return (
        <main>

            {/* ================= HERO ================= */}
            <section className="relative max-h-124 overflow-hidden">

                {/* Background Image */}
                <AnimatePresence mode="wait">
                    <motion.img
                        key={movie._id}
                        src={movie.posterUrl}
                        alt={movie.title}
                        initial={{
                            opacity: 0,
                            scale: 1.08,
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                        }}
                        exit={{
                            opacity: 0,
                            scale: 1.02,
                        }}
                        transition={{
                            duration: 1,
                            ease: "easeInOut",
                        }}
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                </AnimatePresence>

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-950/90 to-slate-950/20" />

                {/* Bottom Gradient */}
                <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-slate-950 to-transparent" />

                {/* Hero Content */}
                <div className="relative mx-auto flex max-h-124 py-20 max-w-7xl items-center px-4">

                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.div
                            key={movie._id}
                            custom={direction}
                            initial={{
                                opacity: 0,
                                x: direction * 50,
                            }}
                            animate={{
                                opacity: 1,
                                x: 0,
                            }}
                            exit={{
                                opacity: 0,
                                x: direction * -50,
                            }}
                            transition={{
                                duration: 0.7,
                                ease: "easeOut",
                            }}
                            className="max-w-2xl"
                        >

                            
                            <span className="mb-3 inline-block rounded-full bg-pink-500/20 px-4 py-2 text-sm font-semibold text-pink-400 backdrop-blur-sm">
                                FEATURED MOVIE
                            </span>

                            {/* Title */}
                            <h1 className="text-4xl font-black leading-tight text-white md:text-6xl">
                                {movie.title}
                            </h1>

                            {/* Movie Info */}
                            <div className="mt-5 flex flex-wrap items-center gap-4">

                                {/* Rating */}
                                <div className="flex items-center gap-2 text-yellow-400">
                                    <FaStar />
                                    <span className="font-bold text-white">
                                        {movie.rating}
                                    </span>
                                </div>

                                {/* Year */}
                                <span className="text-slate-300">
                                    {movie.releaseYear}
                                </span>

                                {/* Duration */}
                                <span className="text-slate-300">
                                    {movie.duration}
                                </span>

                                {/* Genre */}
                                <span className="rounded-full border border-pink-500/40 bg-pink-500/10 px-3 py-1 text-sm text-pink-400">
                                    {movie.genre}
                                </span>

                            </div>

                            {/* Description */}
                            <p className="mt-6 max-w-xl text-lg line-clamp-2 leading-8 text-slate-300">
                                {movie.plotSummary}
                            </p>

                            {/* Buttons */}
                            <div className="mt-8 flex flex-wrap gap-4">

                                <Link
                                    to={`/movies/${movie._id}`}
                                    className="btn border-none bg-pink-500 px-7 text-white hover:bg-pink-600"
                                >
                                    View Details
                                    <FaArrowRight />
                                </Link>

                                <button className="btn btn-outline border-white/30 px-7 text-white hover:bg-white hover:text-slate-950">
                                    <FaPlay />
                                    Watch Trailer
                                </button>

                            </div>

                        </motion.div>
                    </AnimatePresence>

                </div>

                {/* Carousel Controls */}
                <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-3">

                    {/* Previous */}
                    <button
                        onClick={previousMovie}
                        className="btn btn-circle border border-white/20 bg-white/10 text-white backdrop-blur-md hover:border-pink-500 hover:bg-pink-500"
                    >
                        <FaChevronLeft />
                    </button>

                    {/* Dots */}
                    <div className="flex items-center gap-2 px-2">

                        {featuredMovies.map((item, index) => (
                            <button
                                key={item._id}
                                onClick={() => {
                                    setDirection(
                                        index > currentIndex ? 1 : -1
                                    );

                                    setCurrentIndex(index);
                                }}
                                className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                        ? "w-8 bg-pink-500"
                                        : "w-2 bg-white/40 hover:bg-white/70"
                                    }`}
                            />
                        ))}

                    </div>

                    {/* Next */}
                    <button
                        onClick={nextMovie}
                        className="btn btn-circle border border-white/20 bg-white/10 text-white backdrop-blur-md hover:border-pink-500 hover:bg-pink-500"
                    >
                        <FaChevronRight />
                    </button>

                </div>

            </section>

        </main>
    );
};

export default Hero;