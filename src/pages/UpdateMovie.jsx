import { use, useEffect, useState } from "react";
import { FaSave } from "react-icons/fa";
import { useParams } from "react-router";
import { toast } from "react-toastify";

import AuthContext from "../contexts/AuthContext";
import useCloudinaryUpload from "../hooks/useCloudinaryUpload";

const UpdateMovie = () => {
    const { id } = useParams();
    const { user } = use(AuthContext);

    const { uploadImage, uploading } = useCloudinaryUpload();

    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [updating, setUpdating] = useState(false);
    const [imageFile, setImageFile] = useState(null);

    // Get movie data
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/movies/${id}`)
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

    // Update movie
    const handleUpdateMovie = async (e) => {
        e.preventDefault();
        const form = e.target;
        try {
            setUpdating(true);
            // Old poster thakbe by default
            let posterUrl = movie.posterUrl;

            // New poster select korle Cloudinary upload hobe
            if (imageFile) {
                posterUrl = await uploadImage(imageFile);
                if (!posterUrl) {
                    toast.error("Image upload failed!");
                    return;
                }
            }
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
                posterUrl: posterUrl,
                plotSummary: form.plotSummary.value,
            };
            const response = await fetch(
                `${import.meta.env.VITE_API_URL}/movies/${id}`,
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

                // Local state update
                setMovie(prev => ({
                    ...prev,
                    ...updatedMovie,
                }));

                // New selected file clear
                setImageFile(null);
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

    // Loading
    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        );
    }

    // Movie not found
    if (!movie) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-950">
                <h2 className="text-2xl text-red-500">
                    Movie not found!
                </h2>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-950 py-10 px-4">
            <div className="max-w-4xl mx-auto">

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


                <form
                    onSubmit={handleUpdateMovie}
                    className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 space-y-6"
                >

                    {/* Title */}
                    <div>
                        <label className="label">
                            <span className="label-text text-white">
                                Movie Title
                            </span>
                        </label>

                        <input
                            type="text"
                            name="title"
                            defaultValue={movie.title}
                            required
                            className="input w-full bg-slate-950 border-slate-700 text-white"
                            placeholder="Enter movie title"
                        />
                    </div>


                    {/* Genre + Release Year */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        <div>
                            <label className="label">
                                <span className="label-text text-white">
                                    Genre
                                </span>
                            </label>

                            <input
                                type="text"
                                name="genre"
                                defaultValue={movie.genre}
                                required
                                className="input w-full bg-slate-950 border-slate-700 text-white"
                                placeholder="Action, Drama..."
                            />
                        </div>

                        <div>
                            <label className="label">
                                <span className="label-text text-white">
                                    Release Year
                                </span>
                            </label>

                            <input
                                type="number"
                                name="releaseYear"
                                defaultValue={movie.releaseYear}
                                required
                                className="input w-full bg-slate-950 border-slate-700 text-white"
                            />
                        </div>

                    </div>


                    {/* Director + Cast */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        <div>
                            <label className="label">
                                <span className="label-text text-white">
                                    Director
                                </span>
                            </label>

                            <input
                                type="text"
                                name="director"
                                defaultValue={movie.director}
                                required
                                className="input w-full bg-slate-950 border-slate-700 text-white"
                                placeholder="Director name"
                            />
                        </div>

                        <div>
                            <label className="label">
                                <span className="label-text text-white">
                                    Cast
                                </span>
                            </label>

                            <input
                                type="text"
                                name="cast"
                                defaultValue={movie.cast}
                                required
                                className="input w-full bg-slate-950 border-slate-700 text-white"
                                placeholder="Actor 1, Actor 2..."
                            />
                        </div>

                    </div>


                    {/* Rating + Duration */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        <div>
                            <label className="label">
                                <span className="label-text text-white">
                                    Rating
                                </span>
                            </label>

                            <input
                                type="number"
                                name="rating"
                                min="0"
                                max="10"
                                step="0.1"
                                defaultValue={movie.rating}
                                required
                                className="input w-full bg-slate-950 border-slate-700 text-white"
                            />
                        </div>

                        <div>
                            <label className="label">
                                <span className="label-text text-white">
                                    Duration
                                </span>
                            </label>

                            <input
                                type="text"
                                name="duration"
                                defaultValue={movie.duration}
                                required
                                className="input w-full bg-slate-950 border-slate-700 text-white"
                                placeholder="2h 30m"
                            />
                        </div>

                    </div>


                    {/* Language + Country */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        <div>
                            <label className="label">
                                <span className="label-text text-white">
                                    Language
                                </span>
                            </label>

                            <input
                                type="text"
                                name="language"
                                defaultValue={movie.language}
                                required
                                className="input w-full bg-slate-950 border-slate-700 text-white"
                                placeholder="English"
                            />
                        </div>

                        <div>
                            <label className="label">
                                <span className="label-text text-white">
                                    Country
                                </span>
                            </label>

                            <input
                                type="text"
                                name="country"
                                defaultValue={movie.country}
                                required
                                className="input w-full bg-slate-950 border-slate-700 text-white"
                                placeholder="USA"
                            />
                        </div>

                    </div>


                    {/* Current Poster */}
                    <div>
                        <label className="label">
                            <span className="label-text text-white">
                                Current Poster
                            </span>
                        </label>

                        <div className="flex items-center gap-4 bg-slate-950 border border-slate-700 rounded-xl p-4">

                            <img
                                src={movie.posterUrl}
                                alt={movie.title}
                                className="w-20 h-28 object-cover rounded-lg"
                            />

                            <div>
                                <p className="text-white font-medium">
                                    Current Movie Poster
                                </p>

                                <p className="text-sm text-slate-400">
                                    Select a new image below if you want to change it.
                                </p>
                            </div>

                        </div>
                    </div>


                    {/* New Poster */}
                    <div>
                        <label className="label">
                            <span className="label-text text-white">
                                New Poster
                            </span>
                        </label>

                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) =>
                                setImageFile(e.target.files[0])
                            }
                            className="file-input w-full bg-slate-950 border-slate-700 text-white"
                        />

                        <p className="text-sm text-slate-400 mt-2">
                            Leave empty if you want to keep the current poster.
                        </p>
                    </div>


                    {/* Plot Summary */}
                    <div>
                        <label className="label">
                            <span className="label-text text-white">
                                Plot Summary
                            </span>
                        </label>

                        <textarea
                            name="plotSummary"
                            defaultValue={movie.plotSummary}
                            required
                            rows="6"
                            className="textarea w-full bg-slate-950 border-slate-700 text-white"
                            placeholder="Write movie plot summary..."
                        ></textarea>
                    </div>


                    {/* Added By */}
                    <div>
                        <label className="label">
                            <span className="label-text text-white">
                                Added By
                            </span>
                        </label>

                        <input
                            type="email"
                            value={movie.addedBy || user?.email || ""}
                            disabled
                            readOnly
                            className="input w-full bg-slate-950 border-slate-700 text-slate-400"
                        />
                    </div>


                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={uploading || updating}
                        className="btn mt-8 h-12 w-full border-none bg-pink-500 text-white hover:bg-pink-600 disabled:bg-pink-500/50"
                    >
                        {uploading ? (
                            <>
                                <span className="loading loading-spinner loading-sm"></span>
                                Uploading Poster...
                            </>
                        ) : updating ? (
                            <>
                                <span className="loading loading-spinner loading-sm"></span>
                                Updating Movie...
                            </>
                        ) : (
                            <>
                                <FaSave />
                                Update Movie
                            </>
                        )}
                    </button>

                </form>

            </div>
        </div>
    );
};

export default UpdateMovie;