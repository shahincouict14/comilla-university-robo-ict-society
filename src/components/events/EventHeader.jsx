
const EventHeader = ({ totalEvents, divisions, handleDivisionChange, selectedDivision }) => {
    const pad = (n) => String(n).padStart(2, "0")
    return (
        <section className="mb-10  bg-[#101827] px-6 py-10 text-white md:px-10">

            <div className="mx-auto max-w-3xl text-center">

                <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-red-400 sm:text-sm">
                    Discover • Build • Innovate
                </p>

                <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
                    Explore Our{' '}
                    <span className="text-red-400">Events</span>
                </h2>

                <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
                    From hands-on workshops to exciting robotics competitions,
                    discover opportunities to learn, build, and innovate
                    with our community.
                </p>

                <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-red-500" />
            </div>


            <div className="mt-7 flex flex-wrap gap-3 justify-center">
                <button onClick={() => { handleDivisionChange("All") }} className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-300
                  ${selectedDivision === 'All'
                        ? "border-red-500 bg-red-600 text-white shadow-lg shadow-red-500/20"
                        : "border-slate-600 bg-slate-800/70 text-slate-300 hover:border-red-500 hover:bg-red-500 hover:text-white hover:shadow-lg hover:shadow-red-500/20"
                    }`}>
                    All Events
                </button>
                {
                    divisions.map((division) =>
                        <button onClick={() => { handleDivisionChange(division) }} key={division}
                            className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-300
                             ${selectedDivision === division
                                    ? "border-red-500 bg-red-600 text-white shadow-lg shadow-red-500/20"
                                    : "border-slate-600 bg-slate-800/70 text-slate-300 hover:border-red-500 hover:bg-red-500 hover:text-white hover:shadow-lg hover:shadow-red-500/20"
                                }`}
                        >
                            {division}
                        </button>)
                }
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-xl border border-slate-700 bg-slate-800/70 p-4">
                    <p className="text-2xl font-bold text-red-400">{pad(totalEvents)}+</p>
                    <p className="mt-1 text-sm text-slate-300">
                        Planned Events
                    </p>
                </div>

                <div className="rounded-xl border border-slate-700 bg-slate-800/70 p-4">
                    <p className="text-2xl font-bold text-red-400">{pad(divisions.length)}</p>
                    <p className="mt-1 text-sm text-slate-300">
                        Technical Divisions
                    </p>
                </div>
            </div>

        </section>
    );
};

export default EventHeader;