import { FaSave } from "react-icons/fa";

const UpdateMovie = () => {
    return (
        <div className="min-h-screen bg-slate-950 px-4 py-16">

            <div className="mx-auto max-w-4xl">

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

                <form className="rounded-3xl border border-slate-800 bg-slate-900 p-6 md:p-10">

                    <div className="grid gap-6 md:grid-cols-2">

                        {[
                            ["Movie Title", "The Dark Knight"],
                            ["Genre", "Action"],
                            ["Release Year", "2008"],
                            ["Director", "Christopher Nolan"],
                            ["Cast", "Christian Bale, Heath Ledger"],
                            ["Rating", "9.0"],
                            ["Duration", "2h 32m"],
                            ["Language", "English"],
                            ["Country", "USA"],
                            [
                                "Poster URL",
                                "https://image.tmdb.org/t/p/w500/example.jpg",
                            ],
                        ].map(([label, value]) => (
                            <div key={label}>
                                <label className="mb-2 block text-sm text-slate-300">
                                    {label}
                                </label>

                                <input
                                    type="text"
                                    defaultValue={value}
                                    className="input h-12 w-full border-slate-700 bg-slate-950 text-white"
                                />
                            </div>
                        ))}

                        {/* Added By */}
                        <div>
                            <label className="mb-2 block text-sm text-slate-300">
                                Added By
                            </label>

                            <input
                                type="text"
                                value="murad@example.com"
                                disabled
                                readOnly
                                className="input h-12 w-full border-slate-800 bg-slate-950 text-slate-500"
                            />
                        </div>

                        {/* Plot */}
                        <div className="md:col-span-2">

                            <label className="mb-2 block text-sm text-slate-300">
                                Plot Summary
                            </label>

                            <textarea
                                rows="5"
                                defaultValue="When the menace known as the Joker wreaks havoc and chaos on the people of Gotham..."
                                className="textarea w-full border-slate-700 bg-slate-950 text-white"
                            />

                        </div>

                    </div>

                    <button className="btn mt-8 h-12 w-full border-none bg-pink-500 text-white hover:bg-pink-600">
                        <FaSave />
                        Save Changes
                    </button>

                </form>
            </div>
        </div>
    );
};

export default UpdateMovie;