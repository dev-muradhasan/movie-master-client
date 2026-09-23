import {
    FaStar,
    FaClock,
    FaCalendar,
    FaGlobe,
    FaLanguage,
    FaUser,
    FaEdit,
    FaTrash,
    FaPlus,
} from "react-icons/fa";

const MovieDetails = () => {
    return (
        <div className="min-h-screen bg-slate-950">

            {/* Hero */}
            <section className="relative overflow-hidden">

                <div className="absolute inset-0">
                    <img
                        src="https://image.tmdb.org/t/p/original/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
                        className="h-full w-full object-cover opacity-20 blur-sm"
                        alt=""
                    />

                    <div className="absolute inset-0 bg-linear-to-b from-slate-950/50 via-slate-950 to-slate-950" />
                </div>

                <div className="relative mx-auto max-w-7xl px-4 py-16">

                    <div className="grid gap-10 md:grid-cols-[300px_1fr]">

                        {/* Poster */}
                        <div>
                            <img
                                src="https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
                                className="w-full rounded-2xl shadow-2xl"
                                alt="The Dark Knight"
                            />
                        </div>

                        {/* Details */}
                        <div className="flex flex-col justify-center">

                            <span className="w-fit rounded-full bg-pink-500 px-4 py-2 text-sm font-semibold text-white">
                                Action
                            </span>

                            <h1 className="mt-5 text-4xl font-black text-white md:text-6xl">
                                The Dark Knight
                            </h1>

                            <div className="mt-5 flex flex-wrap gap-5 text-slate-300">

                                <span className="flex items-center gap-2">
                                    <FaStar className="text-yellow-400" />
                                    9.0
                                </span>

                                <span className="flex items-center gap-2">
                                    <FaCalendar />
                                    2008
                                </span>

                                <span className="flex items-center gap-2">
                                    <FaClock />
                                    2h 32m
                                </span>

                            </div>

                            <p className="mt-7 max-w-3xl leading-8 text-slate-400">
                                When the menace known as the Joker wreaks havoc and chaos
                                on the people of Gotham, Batman must accept one of the
                                greatest psychological and physical tests of his ability
                                to fight injustice.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-3">

                                <button className="btn border-none bg-pink-500 text-white hover:bg-pink-600">
                                    <FaPlus />
                                    Add to Watchlist
                                </button>

                                <button className="btn btn-outline border-slate-700 text-white">
                                    <FaEdit />
                                    Edit
                                </button>

                                <button className="btn btn-outline border-red-500/40 text-red-400">
                                    <FaTrash />
                                    Delete
                                </button>

                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* Information */}
            <section className="mx-auto max-w-7xl px-4 pb-20">

                <div className="grid gap-6 md:grid-cols-2">

                    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
                        <h2 className="mb-6 text-xl font-bold text-white">
                            Movie Information
                        </h2>

                        <div className="space-y-5">

                            <div className="flex items-center gap-4">
                                <FaUser className="text-pink-500" />
                                <div>
                                    <p className="text-xs text-slate-500">Director</p>
                                    <p className="text-white">Christopher Nolan</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <FaLanguage className="text-pink-500" />
                                <div>
                                    <p className="text-xs text-slate-500">Language</p>
                                    <p className="text-white">English</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <FaGlobe className="text-pink-500" />
                                <div>
                                    <p className="text-xs text-slate-500">Country</p>
                                    <p className="text-white">United States</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

                        <h2 className="mb-6 text-xl font-bold text-white">
                            Cast
                        </h2>

                        <div className="flex flex-wrap gap-3">

                            {[
                                "Christian Bale",
                                "Heath Ledger",
                                "Aaron Eckhart",
                                "Gary Oldman",
                                "Morgan Freeman",
                            ].map((actor) => (
                                <span
                                    key={actor}
                                    className="rounded-full border border-slate-700 bg-slate-950 px-4 py-2 text-sm text-slate-300"
                                >
                                    {actor}
                                </span>
                            ))}

                        </div>
                    </div>

                </div>

                {/* Added by */}
                <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900 p-6">

                    <p className="text-sm text-slate-500">
                        Added By
                    </p>

                    <div className="mt-3 flex items-center gap-3">

                        <img
                            src="https://i.pravatar.cc/100?img=12"
                            className="h-12 w-12 rounded-full"
                            alt=""
                        />

                        <div>
                            <p className="font-semibold text-white">
                                Murad Hasan
                            </p>

                            <p className="text-sm text-slate-500">
                                murad@example.com
                            </p>
                        </div>

                    </div>

                </div>

            </section>

        </div>
    );
};

export default MovieDetails;