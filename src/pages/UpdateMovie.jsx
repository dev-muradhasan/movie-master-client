import { use, useEffect, useState } from "react";
import { FaSave } from "react-icons/fa";
import { useParams } from "react-router";
import { toast } from "react-toastify";

import AuthContext from "../contexts/AuthContext";

const UpdateMovie = () => {

    const { id } = useParams();

    const { user } = use(AuthContext);

    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [updating, setUpdating] = useState(false);


    // Get movie from database
    useEffect(() => {

        fetch(`http://localhost:3000/movies/${id}`)
            .then(res => res.json())
            .then(data => {

                setMovie(data);
                setLoading(false);

            })
            .catch(error => {

                console.error(error);
                toast.error("Failed to load movie!");
                setLoading(false);

            });

    }, [id]);


    // Loading
    if (loading) {
        return (
            <div className="min-h-screen bg-slate-950 flex items-center justify-center">

                <span className="loading loading-spinner loading-lg text-pink-500"></span>

            </div>
        );
    }


    // Movie not found
    if (!movie) {
        return (
            <div className="min-h-screen bg-slate-950 flex items-center justify-center">

                <h2 className="text-2xl font-bold text-white">
                    Movie not found
                </h2>

            </div>
        );
    }


    // Update movie
    const handleUpdateMovie = async (e) => {

        e.preventDefault();

        const form = e.target;

        const updatedMovie = {

            title: form.title.value,

            genre: form.genre.value,

            releaseYear: Number(form.releaseYear.value),

            director: form.director.value,

            cast: form.cast.value,

            rating: Number(form.rating.value),

            duration: form.duration.value,

            language: form.language.value,

            country: form.country.value,

            posterUrl: form.posterUrl.value,

            plotSummary: form.plotSummary.value,

        };


        try {

            setUpdating(true);


            const response = await fetch(
                `http://localhost:3000/movies/${id}`,
                {
                    method: "PATCH",

                    headers: {
                        "Content-Type": "application/json",
                    },

                    body: JSON.stringify(updatedMovie),
                }
            );


            const data = await response.json();


            if (response.ok) {

                toast.success("Movie updated successfully!");

                setMovie({
                    ...movie,
                    ...updatedMovie
                });

            } else {

                toast.error(
                    data.message || "Failed to update movie!"
                );

            }

        } catch (error) {

            console.error(error);

            toast.error("Something went wrong!");

        } finally {

            setUpdating(false);

        }

    };


    return (
        <div className="min-h-screen bg-slate-950 px-4 py-16">

            <div className="mx-auto max-w-4xl">


                {/* Header */}

                <div className="mb-10">

                    <p className="text-sm font-semibold uppercase tracking-widest text-pink-500">
                        MOVIE MANAGEMENT
                    </p>

                    <h1 className="mt-3 text-4xl font-bold text-white">
                        Update Movie
                    </h1>

                    <p className="mt-3 text-slate-400">
                        Update the information of your movie.
                    </p>

                </div>


                {/* Form */}

                <form
                    onSubmit={handleUpdateMovie}
                    className="rounded-3xl border border-slate-800 bg-slate-900 p-6 md:p-10"
                >

                    <div className="grid gap-6 md:grid-cols-2">


                        {/* Movie Title */}

                        <div className="md:col-span-2">

                            <label className="mb-2 block text-sm text-slate-300">
                                Movie Title
                            </label>

                            <input
                                name="title"
                                type="text"
                                defaultValue={movie.title}
                                required
                                className="input h-12 w-full border-slate-700 bg-slate-950 text-white"
                            />

                        </div>


                        {/* Genre */}

                        <div>

                            <label className="mb-2 block text-sm text-slate-300">
                                Genre
                            </label>

                            <input
                                name="genre"
                                type="text"
                                defaultValue={movie.genre}
                                required
                                className="input h-12 w-full border-slate-700 bg-slate-950 text-white"
                            />

                        </div>


                        {/* Release Year */}

                        <div>

                            <label className="mb-2 block text-sm text-slate-300">
                                Release Year
                            </label>

                            <input
                                name="releaseYear"
                                type="number"
                                defaultValue={movie.releaseYear}
                                required
                                min="1900"
                                max="2100"
                                className="input h-12 w-full border-slate-700 bg-slate-950 text-white"
                            />

                        </div>


                        {/* Director */}

                        <div>

                            <label className="mb-2 block text-sm text-slate-300">
                                Director
                            </label>

                            <input
                                name="director"
                                type="text"
                                defaultValue={movie.director}
                                required
                                className="input h-12 w-full border-slate-700 bg-slate-950 text-white"
                            />

                        </div>


                        {/* Cast */}

                        <div>

                            <label className="mb-2 block text-sm text-slate-300">
                                Cast
                            </label>

                            <input
                                name="cast"
                                type="text"
                                defaultValue={movie.cast}
                                required
                                className="input h-12 w-full border-slate-700 bg-slate-950 text-white"
                            />

                        </div>


                        {/* Rating */}

                        <div>

                            <label className="mb-2 block text-sm text-slate-300">
                                Rating
                            </label>

                            <input
                                name="rating"
                                type="number"
                                defaultValue={movie.rating}
                                min="0"
                                max="10"
                                step="0.1"
                                required
                                className="input h-12 w-full border-slate-700 bg-slate-950 text-white"
                            />

                        </div>


                        {/* Duration */}

                        <div>

                            <label className="mb-2 block text-sm text-slate-300">
                                Duration
                            </label>

                            <input
                                name="duration"
                                type="text"
                                defaultValue={movie.duration}
                                required
                                className="input h-12 w-full border-slate-700 bg-slate-950 text-white"
                            />

                        </div>


                        {/* Language */}

                        <div>

                            <label className="mb-2 block text-sm text-slate-300">
                                Language
                            </label>

                            <input
                                name="language"
                                type="text"
                                defaultValue={movie.language}
                                required
                                className="input h-12 w-full border-slate-700 bg-slate-950 text-white"
                            />

                        </div>


                        {/* Country */}

                        <div>

                            <label className="mb-2 block text-sm text-slate-300">
                                Country
                            </label>

                            <input
                                name="country"
                                type="text"
                                defaultValue={movie.country}
                                required
                                className="input h-12 w-full border-slate-700 bg-slate-950 text-white"
                            />

                        </div>


                        {/* Poster URL */}

                        <div className="md:col-span-2">

                            <label className="mb-2 block text-sm text-slate-300">
                                Poster URL
                            </label>

                            <input
                                name="posterUrl"
                                type="url"
                                defaultValue={movie.posterUrl}
                                required
                                className="input h-12 w-full border-slate-700 bg-slate-950 text-white"
                            />

                        </div>


                        {/* Added By */}

                        <div>

                            <label className="mb-2 block text-sm text-slate-300">
                                Added By
                            </label>

                            <input
                                type="text"
                                value={movie.addedBy || user?.email || ""}
                                disabled
                                readOnly
                                className="input h-12 w-full border-slate-800 bg-slate-950 text-slate-500"
                            />

                        </div>


                        {/* Plot Summary */}

                        <div className="md:col-span-2">

                            <label className="mb-2 block text-sm text-slate-300">
                                Plot Summary
                            </label>

                            <textarea
                                name="plotSummary"
                                rows="5"
                                defaultValue={movie.plotSummary}
                                required
                                className="textarea w-full border-slate-700 bg-slate-950 text-white"
                            />

                        </div>

                    </div>


                    {/* Save Button */}

                    <button
                        type="submit"
                        disabled={updating}
                        className="btn mt-8 h-12 w-full border-none bg-pink-500 text-white hover:bg-pink-600 disabled:bg-pink-500/50"
                    >

                        {updating ? (
                            <>
                                <span className="loading loading-spinner loading-sm"></span>
                                Updating...
                            </>
                        ) : (
                            <>
                                <FaSave />
                                Save Changes
                            </>
                        )}

                    </button>

                </form>

            </div>

        </div>
    );
};

export default UpdateMovie;