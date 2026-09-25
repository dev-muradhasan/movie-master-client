
import { use, useEffect, useState } from "react";
import { FaBookmark, FaTrash } from "react-icons/fa";
import MovieCard from "../components/MovieCard";
import AuthContext from "../contexts/AuthContext";
import { toast } from "react-toastify";

const Watchlist = () => {
    const { user } = use(AuthContext);

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!user?.email) return;

        fetch(`${import.meta.env.VITE_API_URL}/watchlist?email=${user.email}`)
            .then((res) => res.json())
            .then((data) => {
                setMovies(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                toast.error("Failed to load watchlist!");
                setLoading(false);
            });
    }, [user?.email]);

    const handleDelete = async (movieId) => {
        try {
            const response = await fetch(
                `${import.meta.env.VITE_API_URL}/watchlist?movieId=${movieId}&email=${user.email}`,
                {
                    method: "DELETE",
                }
            );

            const data = await response.json();

            if (response.ok) {
                setMovies((prev) =>
                    prev.filter((movie) => movie._id !== movieId)
                );

                toast.success("Removed from watchlist!");
            } else {
                toast.error(data.message || "Failed to remove movie!");
            }
        } catch (error) {
            console.error(error);
            toast.error("Something went wrong!");
        }
    };

    if (loading) {
        return (
            <section className="flex min-h-[70vh] items-center justify-center bg-slate-950">
                <span className="loading loading-spinner loading-lg text-pink-500"></span>
            </section>
        );
    }

    return (
        <section className="min-h-screen bg-slate-950 px-4 py-16">
            <div className="mx-auto max-w-7xl px-4">
                {/* Header */}
                <div className="mb-10">
                    <div className="mb-3 flex items-center gap-3">
                        <FaBookmark className="text-2xl text-pink-500" />

                        <h1 className="text-3xl font-bold text-white md:text-4xl">
                            My Watchlist
                        </h1>
                    </div>

                    <p className="text-slate-400">
                        Movies you saved to watch later
                    </p>
                </div>

                {/* Empty State */}
                {movies.length === 0 ? (
                    <div className="flex min-h-[40vh] flex-col items-center justify-center">
                        <FaBookmark className="mb-5 text-5xl text-slate-700" />

                        <h2 className="text-2xl font-semibold text-white">
                            Your watchlist is empty
                        </h2>

                        <p className="mt-2 text-slate-400">
                            Add some movies to your watchlist.
                        </p>
                    </div>
                ) : (
                    /* Movie Grid */
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {movies.map((movie) => (
                            <div
                                key={movie._id}
                                className="relative"
                            >
                                {/* Delete Button */}
                                <button
                                    onClick={() =>
                                        handleDelete(movie._id)
                                    }
                                    className="absolute right-3 top-12 z-10 btn btn-circle btn-sm border-none bg-red-500 text-white hover:bg-red-600"
                                    title="Remove from watchlist"
                                >
                                    <FaTrash size={20}/>
                                </button>

                                <MovieCard movie={movie} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Watchlist;