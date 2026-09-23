import { FaExclamationTriangle, FaRedo } from "react-icons/fa";

const ErrorPage = () => {
    return (
        <div className="flex min-h-screen items-center justify-center bg-slate-950 px-4">

            <div className="max-w-md text-center">

                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-red-500/10 text-4xl text-red-500">
                    <FaExclamationTriangle />
                </div>

                <h1 className="mt-7 text-3xl font-bold text-white">
                    Something Went Wrong
                </h1>

                <p className="mt-4 text-slate-400">
                    We couldn't load this page. Please try again.
                </p>

                <button
                    onClick={() => window.location.reload()}
                    className="btn mt-7 border-none bg-pink-500 text-white hover:bg-pink-600"
                >
                    <FaRedo />
                    Try Again
                </button>

            </div>

        </div>
    );
};

export default ErrorPage;