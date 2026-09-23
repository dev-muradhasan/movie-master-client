const Loading = () => {
    return (
        <div className="flex min-h-[60vh] items-center justify-center bg-slate-950">

            <div className="text-center">

                <span className="loading loading-spinner loading-lg text-pink-500" />

                <p className="mt-4 text-sm text-slate-400">
                    Loading movies...
                </p>

            </div>

        </div>
    );
};

export default Loading;