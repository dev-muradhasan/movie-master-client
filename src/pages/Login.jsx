import { FaGoogle, FaFilm, FaEnvelope, FaLock } from "react-icons/fa";
import { Link } from "react-router";

const Login = () => {
    return (
        <div className="min-h-screen bg-slate-950 px-4 py-10">
            <div className="mx-auto flex min-h-175 max-w-6xl overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl">

                {/* LEFT IMAGE */}
                <div className="relative hidden w-1/2 lg:block">
                    <img
                        src="https://image.tmdb.org/t/p/original/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
                        alt="The Dark Knight"
                        className="absolute inset-0 h-full w-full object-cover"
                    />

                    <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/60 to-slate-950/10" />

                    <div className="relative flex h-full flex-col justify-end p-10">

                        <div className="mb-5 flex h-14 w-14 rounded-2xl">
                            <img src="/favicon.png" alt="Logo" />
                        </div>

                        <h2 className="text-4xl font-black text-white">
                            Welcome Back to
                            <span className="block text-pink-500">
                                MovieMaster Pro
                            </span>
                        </h2>

                        <p className="mt-4 max-w-md text-base leading-7 text-slate-300">
                            Discover amazing movies, manage your collection
                            and keep track of everything you love watching.
                        </p>

                    </div>
                </div>

                {/* RIGHT FORM */}
                <div className="flex w-full items-center justify-center p-6 sm:p-10 lg:w-1/2 lg:p-12">

                    <div className="w-full max-w-md">

                        {/* Mobile Logo */}
                        <div className="mb-7 lg:hidden">
                            <div className="mb-4 flex items-center gap-3">
                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-pink-500 text-white">
                                    <FaFilm />
                                </div>

                                <h2 className="text-xl font-bold text-white">
                                    Movie
                                    <span className="text-pink-500">
                                        Master
                                    </span>
                                </h2>
                            </div>
                        </div>

                        {/* Heading */}
                        <div className="mb-7">
                            <h1 className="text-3xl font-bold text-white">
                                Welcome Back
                            </h1>

                            <p className="mt-2 text-sm leading-6 text-slate-400">
                                Sign in to continue to MovieMaster Pro.
                            </p>
                        </div>

                        {/* Form */}
                        <form className="space-y-5">

                            {/* Email */}
                            <div>
                                <label className="mb-2 block text-sm font-medium text-slate-300">
                                    Email Address
                                </label>

                                <div className="relative">
                                    <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />

                                    <input
                                        type="email"
                                        placeholder="you@example.com"
                                        className="input h-12 w-full border-slate-700 bg-slate-950 pl-11 text-white placeholder:text-slate-600 outline-none focus:border-pink-500"
                                    />
                                </div>
                            </div>

                            {/* Password */}
                            <div>
                                <div className="mb-2 flex items-center justify-between">

                                    <label className="text-sm font-medium text-slate-300">
                                        Password
                                    </label>

                                    <button
                                        type="button"
                                        className="text-xs font-medium text-pink-500 transition hover:text-pink-400 hover:underline"
                                    >
                                        Forgot password?
                                    </button>

                                </div>

                                <div className="relative">
                                    <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />

                                    <input
                                        type="password"
                                        placeholder="••••••••"
                                        className="input h-12 w-full border-slate-700 bg-slate-950 pl-11 text-white placeholder:text-slate-600 outline-none focus:border-pink-500"
                                    />
                                </div>
                            </div>

                            {/* Login Button */}
                            <button
                                type="submit"
                                className="btn mt-2 h-12 w-full border-none bg-pink-500 text-base font-semibold text-white transition hover:bg-pink-600 hover:shadow-lg hover:shadow-pink-500/20"
                            >
                                Login
                            </button>

                        </form>

                        {/* Divider */}
                        <div className="divider my-6 text-xs text-slate-600">
                            OR
                        </div>

                        {/* Google */}
                        <button
                            type="button"
                            className="btn h-12 w-full border border-slate-700 bg-slate-950 text-white transition hover:border-slate-600 hover:bg-slate-800"
                        >
                            <FaGoogle className="text-red-500" />
                            Continue with Google
                        </button>

                        {/* Register */}
                        <p className="mt-6 text-center text-sm text-slate-400">
                            Don't have an account?{" "}
                            <Link
                                to="/register"
                                className="font-semibold text-pink-500 transition hover:text-pink-400 hover:underline"
                            >
                                Register
                            </Link>
                        </p>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;