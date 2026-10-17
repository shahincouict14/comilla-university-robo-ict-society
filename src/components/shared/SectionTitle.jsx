const SectionTitle = ({ eyebrow, title, description }) => {
    return (
        <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#E63946]">
                {eyebrow}
            </p>

            <h2 className="mt-2 text-3xl font-bold md:text-4xl">
                {title}
            </h2>

            {description && (
                <p className="mt-3 leading-7 text-slate-400">
                    {description}
                </p>
            )}
        </div>
    );
};

export default SectionTitle;