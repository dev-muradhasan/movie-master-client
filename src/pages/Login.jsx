import { FaGoogle, FaFilm } from "react-icons/fa";
import { Link } from "react-router";

const Login = () => {
    return (
        <div className="flex min-h-screen max-w-7xl mx-auto bg-slate-950">

            {/* Left */}
            <div className="relative hidden overflow-hidden lg:block lg:w-1/2">

                <img
                    src="https://image.tmdb.org/t/p/original/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
                    className="absolute inset-0 h-full w-full object-cover"
                    alt=""
                />

                <div className="absolute inset-0 bg-linear-to-r from-slate-950/90 to-pink-950/60" />

                <div className="relative flex h-full items-center p-16">

                    <div>
                        <div className="flex items-center gap-3">
                            <div className="rounded-xl bg-pink-500 p-4 text-white">
                                <FaFilm />
                            </div>

                            <h1 className="text-3xl font-bold text-white">
                                MovieMaster
                            </h1>
                        </div>

                        <h2 className="mt-10 max-w-lg text-5xl font-black text-white">
                            Your Movies.
                            <br />
                            Your Collection.
                            <br />
                            Your Universe.
                        </h2>

                        <p className="mt-6 max-w-lg text-lg text-slate-300">
                            Discover movies and organize everything you love watching.
                        </p>
                    </div>

                </div>
            </div>

            {/* Form */}
            <div className="flex w-full items-center justify-center px-5 py-12 lg:w-1/2">

                <div className="w-full max-w-md">

                   <div>
                        <div className="mb-8 lg:hidden">
                            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-pink-500 text-white">
                                <FaFilm />
                            </div>
                        </div>

                        <h1 className="text-3xl font-bold text-white">
                            Welcome Back
                        </h1>

                        <p className="mt-2 text-slate-400">
                            Sign in to continue to MovieMaster.
                        </p>
                   </div>

                    <form className="mt-8 space-y-5">

                        <div>
                            <label className="mb-2 block text-sm text-slate-300">
                                Email
                            </label>

                            <input
                                type="email"
                                placeholder="you@example.com"
                                className="input h-13 w-full border-slate-700 bg-slate-900 text-white"
                            />
                        </div>

                        <div>
                            <div className="mb-2 flex justify-between">
                                <label className="text-sm text-slate-300">
                                    Password
                                </label>

                                <button type="button" className="text-sm text-pink-500 hover:underline">
                                    Forgot password?
                                </button>
                            </div>

                            <input
                                type="password"
                                placeholder="••••••••"
                                className="input h-13 w-full border-slate-700 bg-slate-900 text-white"
                            />
                        </div>

                        <button className="btn h-13 w-full border-none bg-pink-500 text-white hover:bg-pink-600">
                            Login
                        </button>

                    </form>

                    <div className="divider my-7 text-slate-600">
                        OR
                    </div>

                    <button className="btn h-13 w-full border-slate-700 bg-slate-900 text-white hover:bg-slate-800">
                        <FaGoogle className="text-red-500" />
                        Continue with Google
                    </button>

                    <p className="mt-8 text-center text-slate-400">
                        Don't have an account?{" "}
                        <Link
                            to="/register"
                            className="font-semibold text-pink-500 hover:underline"
                        >
                            Register
                        </Link>
                    </p>

                </div>
            </div>

        </div>
    );
};

export default Login;