import { FaFilm, FaPlus } from "react-icons/fa";

const AddMovie = () => {
    return (
        <div className="min-h-screen bg-slate-950 px-4 py-16">

            <div className="mx-auto max-w-4xl">

                <div className="mb-10 text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-pink-500/10 text-3xl text-pink-500">
                        <FaFilm />
                    </div>

                    <h1 className="mt-5 text-4xl font-bold text-white">
                        Add New Movie
                    </h1>

                    <p className="mt-3 text-slate-400">
                        Add a movie to your personal collection.
                    </p>
                </div>

                <form className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-2xl md:p-10">

                    <div className="grid gap-6 md:grid-cols-2">

                        {/* Title */}
                        <div className="md:col-span-2">
                            <label className="mb-2 block text-sm text-slate-300">
                                Movie Title *
                            </label>

                            <input
                                type="text"
                                placeholder="Enter movie title"
                                className="input h-12 w-full border-slate-700 bg-slate-950 text-white"
                            />
                        </div>

                        {/* Genre */}
                        <div>
                            <label className="mb-2 block text-sm text-slate-300">
                                Genre *
                            </label>

                            <select className="select h-12 w-full border-slate-700 bg-slate-950 text-white">
                                <option>Select Genre</option>
                                <option>Action</option>
                                <option>Drama</option>
                                <option>Comedy</option>
                                <option>Horror</option>
                                <option>Sci-Fi</option>
                            </select>
                        </div>

                        {/* Year */}
                        <div>
                            <label className="mb-2 block text-sm text-slate-300">
                                Release Year *
                            </label>

                            <input
                                type="number"
                                placeholder="2026"
                                className="input h-12 w-full border-slate-700 bg-slate-950 text-white"
                            />
                        </div>

                        {/* Director */}
                        <div>
                            <label className="mb-2 block text-sm text-slate-300">
                                Director *
                            </label>

                            <input
                                type="text"
                                placeholder="Director name"
                                className="input h-12 w-full border-slate-700 bg-slate-950 text-white"
                            />
                        </div>

                        {/* Cast */}
                        <div>
                            <label className="mb-2 block text-sm text-slate-300">
                                Cast *
                            </label>

                            <input
                                type="text"
                                placeholder="Actor names"
                                className="input h-12 w-full border-slate-700 bg-slate-950 text-white"
                            />
                        </div>

                        {/* Rating */}
                        <div>
                            <label className="mb-2 block text-sm text-slate-300">
                                Rating *
                            </label>

                            <input
                                type="number"
                                min="0"
                                max="10"
                                step="0.1"
                                placeholder="8.5"
                                className="input h-12 w-full border-slate-700 bg-slate-950 text-white"
                            />
                        </div>

                        {/* Duration */}
                        <div>
                            <label className="mb-2 block text-sm text-slate-300">
                                Duration *
                            </label>

                            <input
                                type="text"
                                placeholder="2h 30m"
                                className="input h-12 w-full border-slate-700 bg-slate-950 text-white"
                            />
                        </div>

                        {/* Language */}
                        <div>
                            <label className="mb-2 block text-sm text-slate-300">
                                Language *
                            </label>

                            <input
                                type="text"
                                placeholder="English"
                                className="input h-12 w-full border-slate-700 bg-slate-950 text-white"
                            />
                        </div>

                        {/* Country */}
                        <div>
                            <label className="mb-2 block text-sm text-slate-300">
                                Country *
                            </label>

                            <input
                                type="text"
                                placeholder="USA"
                                className="input h-12 w-full border-slate-700 bg-slate-950 text-white"
                            />
                        </div>

                        {/* Poster */}
                        <div className="md:col-span-2">
                            <label className="mb-2 block text-sm text-slate-300">
                                Poster URL *
                            </label>

                            <input
                                type="url"
                                placeholder="https://..."
                                className="input h-12 w-full border-slate-700 bg-slate-950 text-white"
                            />
                        </div>

                        {/* Plot */}
                        <div className="md:col-span-2">
                            <label className="mb-2 block text-sm text-slate-300">
                                Plot Summary *
                            </label>

                            <textarea
                                rows="5"
                                placeholder="Write movie summary..."
                                className="textarea w-full border-slate-700 bg-slate-950 text-white"
                            />
                        </div>

                    </div>

                    <button
                        type="button"
                        className="btn mt-8 h-12 w-full border-none bg-pink-500 text-white hover:bg-pink-600"
                    >
                        <FaPlus />
                        Add Movie
                    </button>

                </form>
            </div>
        </div>
    );
};

export default AddMovie;