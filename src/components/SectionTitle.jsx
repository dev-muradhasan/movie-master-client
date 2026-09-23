const SectionTitle = ({ title, subtitle }) => {
    return (
        <div className="mb-10 text-center">
            <div className="mx-auto mb-4 h-1 w-16 rounded-full bg-pink-500" />

            <h2 className="text-3xl font-bold text-white md:text-4xl">
                {title}
            </h2>

            {subtitle && (
                <p className="mx-auto mt-3 max-w-2xl text-slate-400">
                    {subtitle}
                </p>
            )}
        </div>
    );
};

export default SectionTitle;