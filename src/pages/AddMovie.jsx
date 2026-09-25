import { use, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { toast } from "react-toastify";

import AuthContext from "../contexts/AuthContext";
import useCloudinaryUpload from "../hooks/useCloudinaryUpload";

const AddMovie = () => {
    const { user } = use(AuthContext);

    const { uploadImage, uploading } = useCloudinaryUpload();

    const [imageFile, setImageFile] = useState(null);

    const handleAddMovie = async (e) => {
        e.preventDefault();

        if (!user?.email) {
            toast.error("Please login first!");
            return;
        }

        if (!imageFile) {
            toast.error("Please select a movie poster!");
            return;
        }

        const form = e.target;

        try {
            // Cloudinary image upload
            const posterUrl = await uploadImage(imageFile);

            if (!posterUrl) {
                toast.error("Image upload failed!");
                return;
            }

            // Movie data
            const movieData = {
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
                addedBy: user.email,
                createdAt: new Date(),
            };

            // Send movie data to backend
            const response = await fetch(
                `http://localhost:3000/movies`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(movieData),
                }
            );

            const data = await response.json();

            // Duplicate movie
            if (response.status === 409) {
                toast.error(data.message || "Movie already exists!");
                return;
            }

            // Successfully added
            if (response.ok) {
                toast.success("Movie added successfully!");

                form.reset();
                setImageFile(null);
            } else {
                toast.error(data.message || "Failed to add movie!");
            }

        } catch (error) {
            console.error(error);
            toast.error("Something went wrong!");
        }
    };

    return (
        <div className="min-h-screen bg-slate-950 px-4 py-16">

            <div className="mx-auto max-w-4xl">

                <div className="mb-10 text-center">

                    <div className="mx-auto h-16 w-16 rounded-2xl">
                        <img src="/favicon.png" alt="" />
                    </div>

                    <h1 className="mt-5 text-4xl font-bold text-white">
                        Add New Movie
                    </h1>

                    <p className="mt-3 text-slate-400">
                        Add a movie to your personal collection.
                    </p>

                </div>


                <form
                    onSubmit={handleAddMovie}
                    className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-2xl md:p-10"
                >

                    <div className="grid gap-6 md:grid-cols-2">

                        {/* Title */}
                        <div className="md:col-span-2">

                            <label className="mb-2 block text-sm text-slate-300">
                                Movie Title *
                            </label>

                            <input
                                name="title"
                                type="text"
                                placeholder="Enter movie title"
                                required
                                className="input h-12 w-full border-slate-700 bg-slate-950 text-white"
                            />

                        </div>


                        {/* Genre */}
                        <div>

                            <label className="mb-2 block text-sm text-slate-300">
                                Genre *
                            </label>

                            <select
                                name="genre"
                                defaultValue=""
                                required
                                className="select h-12 w-full border-slate-700 bg-slate-950 text-white"
                            >
                                <option value="" disabled>
                                    Select Genre
                                </option>

                                <option value="Action">Action</option>
                                <option value="Drama">Drama</option>
                                <option value="Comedy">Comedy</option>
                                <option value="Horror">Horror</option>
                                <option value="Sci-Fi">Sci-Fi</option>
                                <option value="Thriller">Thriller</option>
                                <option value="Romance">Romance</option>
                                <option value="Animation">Animation</option>
                            </select>

                        </div>


                        {/* Release Year */}
                        <div>

                            <label className="mb-2 block text-sm text-slate-300">
                                Release Year *
                            </label>

                            <input
                                name="releaseYear"
                                type="number"
                                placeholder="2026"
                                min="1900"
                                max="2100"
                                required
                                className="input h-12 w-full border-slate-700 bg-slate-950 text-white"
                            />

                        </div>


                        {/* Director */}
                        <div>

                            <label className="mb-2 block text-sm text-slate-300">
                                Director *
                            </label>

                            <input
                                name="director"
                                type="text"
                                placeholder="Director name"
                                required
                                className="input h-12 w-full border-slate-700 bg-slate-950 text-white"
                            />

                        </div>


                        {/* Cast */}
                        <div>

                            <label className="mb-2 block text-sm text-slate-300">
                                Cast *
                            </label>

                            <input
                                name="cast"
                                type="text"
                                placeholder="Actor names"
                                required
                                className="input h-12 w-full border-slate-700 bg-slate-950 text-white"
                            />

                        </div>


                        {/* Rating */}
                        <div>

                            <label className="mb-2 block text-sm text-slate-300">
                                Rating *
                            </label>

                            <input
                                name="rating"
                                type="number"
                                min="0"
                                max="10"
                                step="0.1"
                                placeholder="8.5"
                                required
                                className="input h-12 w-full border-slate-700 bg-slate-950 text-white"
                            />

                        </div>


                        {/* Duration */}
                        <div>

                            <label className="mb-2 block text-sm text-slate-300">
                                Duration *
                            </label>

                            <input
                                name="duration"
                                type="text"
                                placeholder="2h 30m"
                                required
                                className="input h-12 w-full border-slate-700 bg-slate-950 text-white"
                            />

                        </div>


                        {/* Language */}
                        <div>

                            <label className="mb-2 block text-sm text-slate-300">
                                Language *
                            </label>

                            <input
                                name="language"
                                type="text"
                                placeholder="English"
                                required
                                className="input h-12 w-full border-slate-700 bg-slate-950 text-white"
                            />

                        </div>


                        {/* Country */}
                        <div>

                            <label className="mb-2 block text-sm text-slate-300">
                                Country *
                            </label>

                            <input
                                name="country"
                                type="text"
                                placeholder="USA"
                                required
                                className="input h-12 w-full border-slate-700 bg-slate-950 text-white"
                            />

                        </div>


                        {/* Poster */}
                        <div className="md:col-span-2">

                            <label className="mb-2 block text-sm text-slate-300">
                                Movie Poster *
                            </label>

                            <input
                                type="file"
                                accept="image/*"
                                required
                                onChange={(e) => {
                                    setImageFile(e.target.files[0]);
                                }}
                                className="file-input w-full border-slate-700 bg-slate-950 text-white"
                            />

                            <p className="mt-2 text-xs text-slate-500">
                                Select a movie poster image.
                            </p>

                        </div>


                        {/* Plot Summary */}
                        <div className="md:col-span-2">

                            <label className="mb-2 block text-sm text-slate-300">
                                Plot Summary *
                            </label>

                            <textarea
                                name="plotSummary"
                                rows="5"
                                placeholder="Write movie summary..."
                                required
                                className="textarea w-full border-slate-700 bg-slate-950 text-white"
                            />

                        </div>

                    </div>


                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={uploading}
                        className="btn mt-8 h-12 w-full border-none bg-pink-500 text-white hover:bg-pink-600 disabled:bg-pink-500/50"
                    >

                        {uploading ? (
                            <>
                                <span className="loading loading-spinner loading-sm"></span>
                                Uploading...
                            </>
                        ) : (
                            <>
                                <FaPlus />
                                Add Movie
                            </>
                        )}

                    </button>

                </form>

            </div>

        </div>
    );
};

export default AddMovie;