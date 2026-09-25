import { use } from "react";
import { FaGoogle, FaUser, FaEnvelope, FaCamera, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import AuthContext from "../contexts/AuthContext";
import { toast } from "react-toastify";

const Register = () => {
    const navigate = useNavigate();
    const { createUser, updateProfileFunc, googleSignIn, setLoading, setUser } = use(AuthContext);

    const handleSignUp = (e) => {
        e.preventDefault();

        const displayName = e.target.displayName.value;
        const email = e.target.email.value;
        const photoURL = e.target.photoURL.value;
        const password = e.target.password.value;

        createUser(email, password)
            .then(() => {
                updateProfileFunc(displayName, photoURL)
                    .then(async() => {
                        const userData = {
                            name: displayName,
                            email: email,
                            photoURL: photoURL
                        };
                        await fetch(`${import.meta.env.VITE_API_URL}/users`, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(userData)
                        });
                        toast.success(
                            "User Created Successfully. Please Login!"
                        );
                        navigate("/login");
                    })
                    .catch((err) => {
                        console.log(err);
                        toast.error(err.message);
                    });

            })
            .catch((error) => {
                if (error.code === "auth/invalid-email") {
                    toast.error("Please enter a valid email.");
                } else if (error.code === "auth/invalid-credential") {
                    toast.error("Invalid email or password.");
                } else if (error.code === "auth/email-already-in-use") {
                    toast.error("This email is already registered.");
                } else if (error.code === "auth/weak-password") {
                    toast.error(
                        "Password must be at least 6 characters long."
                    );
                } else {
                    toast.error(error.message);
                }
            });
    };

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(async(result)=>{
            const user = result.user;
            const userData = {
                name: user.displayName,
                email: user.email,
                photoURL: user.photoURL
            };
            await fetch(`${import.meta.env.VITE_API_URL}/users`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userData)
            });
            setLoading(false)
            navigate('/')
            toast.success("Sign In Successful!");
            setUser(result.user)
        }).catch(err=>{
            setLoading(false)
            toast.error(err.message)
            console.log(err.message);
        })
    }

    return (
        <div className="min-h-screen bg-slate-950 px-4 py-10">

            <div className="mx-auto flex min-h-175 max-w-6xl overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl">

                {/* ================= LEFT IMAGE ================= */}
                <div className="relative hidden w-1/2 lg:block">

                    <img
                        src="https://res.cloudinary.com/hy4urdfq/image/upload/v1790333378/l5irwiccqtbo68zsrk2e.webp"
                        alt="Movie theater"
                        className="absolute inset-0 h-full w-full object-cover"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/60 to-slate-950/10" />

                    {/* Content */}
                    <div className="relative flex h-full flex-col justify-end p-10">

                        <div className="mb-5 flex h-14 w-14 rounded-2xl">
                            <img src="/favicon.png" alt="Logo" />
                        </div>

                        <h2 className="text-4xl font-black text-white">
                            Welcome to
                            <span className="block text-pink-500">
                                MovieMaster Pro
                            </span>
                        </h2>

                        <p className="mt-4 max-w-md text-base leading-7 text-slate-300">
                            Create your account, discover amazing movies,
                            manage your collection and keep track of your
                            favorite films.
                        </p>

                    </div>

                </div>


                {/* ================= RIGHT FORM ================= */}
                <div className="flex w-full items-center justify-center p-6 sm:p-10 lg:w-1/2 lg:p-12">

                    <div className="w-full max-w-md">

                        {/* Header */}
                        <div className="mb-7">

                            <div className="mb-4 flex items-center gap-3 lg:hidden">

                                <div className="h-11 w-11 rounded-xl">
                                    <img src="/favicon.png" alt="Logo" />
                                </div>

                                <h2 className="text-xl font-bold text-white">
                                    Movie
                                    <span className="text-pink-500">
                                        Master
                                    </span>
                                </h2>

                            </div>

                            <h1 className="text-3xl font-bold text-white">
                                Create Your Account
                            </h1>

                            <p className="mt-2 text-sm leading-6 text-slate-400">
                                Join MovieMaster Pro and start your movie
                                journey today.
                            </p>

                        </div>


                        {/* Form */}
                        <form
                            onSubmit={handleSignUp}
                            className="space-y-4"
                        >

                            {/* Full Name */}
                            <div>

                                <label className="mb-2 block text-sm font-medium text-slate-300">
                                    Full Name
                                </label>

                                <div className="relative">

                                    <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />

                                    <input
                                        type="text"
                                        name="displayName"
                                        placeholder="Enter your full name"
                                        className="input h-12 w-full border-slate-700 bg-slate-950 pl-11 text-white placeholder:text-slate-600 outline-none focus:border-pink-500"
                                    />

                                </div>

                            </div>


                            {/* Email */}
                            <div>

                                <label className="mb-2 block text-sm font-medium text-slate-300">
                                    Email Address
                                </label>

                                <div className="relative">

                                    <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />

                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="you@example.com"
                                        className="input h-12 w-full border-slate-700 bg-slate-950 pl-11 text-white placeholder:text-slate-600 outline-none focus:border-pink-500"
                                    />

                                </div>

                            </div>


                            {/* Photo URL */}
                            <div>

                                <label className="mb-2 block text-sm font-medium text-slate-300">
                                    Photo URL
                                </label>

                                <div className="relative">

                                    <FaCamera className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />

                                    <input
                                        type="url"
                                        name="photoURL"
                                        placeholder="https://..."
                                        className="input h-12 w-full border-slate-700 bg-slate-950 pl-11 text-white placeholder:text-slate-600 outline-none focus:border-pink-500"
                                    />

                                </div>

                            </div>


                            {/* Password */}
                            <div>

                                <label className="mb-2 block text-sm font-medium text-slate-300">
                                    Password
                                </label>

                                <div className="relative">

                                    <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />

                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="••••••••"
                                        className="input h-12 w-full border-slate-700 bg-slate-950 pl-11 text-white placeholder:text-slate-600 outline-none focus:border-pink-500"
                                    />

                                </div>

                                <p className="mt-2 text-xs text-slate-500">
                                    Minimum 6 characters with uppercase and lowercase letters.
                                </p>

                            </div>


                            {/* Register */}
                            <button
                                type="submit"
                                className="btn mt-2 h-12 w-full border-none bg-pink-500 text-base font-semibold text-white transition hover:bg-pink-600 hover:shadow-lg hover:shadow-pink-500/20"
                            >
                                Create Account
                            </button>

                        </form>


                        {/* Divider */}
                        <div className="divider my-6 text-xs text-slate-600">
                            OR
                        </div>


                        {/* Google */}
                        <button
                            onClick={handleGoogleSignIn}
                            type="button"
                            className="btn h-12 w-full border border-slate-700 bg-slate-950 text-white transition hover:border-slate-600 hover:bg-slate-800"
                        >
                            <FaGoogle className="text-red-500" />
                            Continue with Google
                        </button>


                        {/* Login */}
                        <p className="mt-6 text-center text-sm text-slate-400">

                            Already have an account?{" "}

                            <Link
                                to="/login"
                                className="font-semibold text-pink-500 transition hover:text-pink-400 hover:underline"
                            >
                                Login
                            </Link>

                        </p>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Register;