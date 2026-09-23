import { FaGoogle, FaFilm } from "react-icons/fa";
import { Link } from "react-router";

const Register = () => {
    return (
        <div className="min-h-screen bg-slate-950 px-4 py-12">

            <div className="mx-auto max-w-lg">

                <div className="mb-8 text-center">

                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-pink-500 text-2xl text-white">
                        <FaFilm />
                    </div>

                    <h1 className="mt-5 text-3xl font-bold text-white">
                        Create Your Account
                    </h1>

                    <p className="mt-2 text-slate-400">
                        Join MovieMaster and start your movie journey.
                    </p>

                </div>

                <form className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-2xl md:p-8">

                    <div className="space-y-5">

                        <div>
                            <label className="mb-2 block text-sm text-slate-300">
                                Full Name
                            </label>

                            <input
                                type="text"
                                placeholder="Your name"
                                className="input h-12 w-full border-slate-700 bg-slate-950 text-white"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-sm text-slate-300">
                                Email
                            </label>

                            <input
                                type="email"
                                placeholder="you@example.com"
                                className="input h-12 w-full border-slate-700 bg-slate-950 text-white"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-sm text-slate-300">
                                Photo URL
                            </label>

                            <input
                                type="url"
                                placeholder="https://..."
                                className="input h-12 w-full border-slate-700 bg-slate-950 text-white"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block text-sm text-slate-300">
                                Password
                            </label>

                            <input
                                type="password"
                                placeholder="••••••••"
                                className="input h-12 w-full border-slate-700 bg-slate-950 text-white"
                            />

                            <p className="mt-2 text-xs text-slate-500">
                                Minimum 6 characters with uppercase and lowercase letters.
                            </p>
                        </div>

                        <button className="btn h-12 w-full border-none bg-pink-500 text-white hover:bg-pink-600">
                            Create Account
                        </button>

                    </div>

                    <div className="divider my-7 text-slate-600">
                        OR
                    </div>

                    <button
                        type="button"
                        className="btn h-12 w-full border-slate-700 bg-slate-950 text-white"
                    >
                        <FaGoogle className="text-red-500" />
                        Continue with Google
                    </button>

                    <p className="mt-7 text-center text-sm text-slate-400">
                        Already have an account?{" "}
                        <Link
                            to="/login"
                            className="font-semibold text-pink-500 hover:underline"
                        >
                            Login
                        </Link>
                    </p>

                </form>

            </div>
        </div>
    );
};

export default Register;