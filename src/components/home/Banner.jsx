
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    const [showLogo, setShowLogo] = useState(true);

    return (
        <section className="relative isolate overflow-hidden bg-[#080D1A] text-white">

            {/* Background Glow */}
            <div className="pointer-events-none absolute -left-20 top-20 -z-10 h-72 w-72 rounded-full bg-[#E63946]/15 blur-[100px]" />

            <div className="pointer-events-none absolute -right-20 bottom-10 -z-10 h-80 w-80 rounded-full bg-blue-500/10 blur-[100px]" />

            {/* Main Content */}
            <div className="mx-auto grid min-h-162.5 max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:px-10 lg:gap-16 lg:px-16">

                {/* Left Side */}
                <div className="relative z-10">

                    <p className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#E63946]/30 bg-[#E63946]/10 px-4 py-2 text-xs font-bold tracking-[0.2em] text-[#FF6873]">
                        <span className="h-2 w-2 animate-pulse rounded-full bg-[#E63946]" />
                        BUILD • CODE • INNOVATE
                    </p>

                    <h1 className="max-w-xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                        Engineering the Future,
                        <span className="mt-2 block text-[#E63946]">
                            One Robot at a Time.
                        </span>
                    </h1>

                    <p className="mt-6 max-w-lg text-base leading-8 text-slate-300 md:text-lg">
                        Explore robotics, artificial intelligence, and
                        hands-on projects with a community that builds
                        beyond the classroom.
                    </p>

                    {/* Buttons */}
                    <div className="mt-9 flex flex-wrap gap-4">

                        <Link
                            to="/events"
                            className="rounded-lg bg-[#E63946] px-6 py-3.5 font-semibold text-white shadow-lg shadow-red-950/30 transition duration-300 hover:-translate-y-1 hover:bg-[#ff4b58]"
                        >
                            Explore Events
                            <span className="ml-2">↗</span>
                        </Link>

                        <Link
                            to="/how-to-join"
                            className="rounded-lg border border-white/20 bg-white/5 px-6 py-3.5 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:border-[#E63946] hover:bg-[#E63946]/10"
                        >
                            Join Our Club
                        </Link>

                    </div>

                    {/* Bottom Text */}
                    <div className="mt-12 flex items-center gap-3 text-xs font-medium tracking-widest text-slate-400">
                        <span className="h-px w-10 bg-[#E63946]" />
                        COMILLA UNIVERSITY ROBO ICT SOCIETY
                    </div>

                </div>

                {/* Right Side: Robotics Image */}
                <div className="relative z-10 mx-auto w-full max-w-lg">

                    {/* Red Glow Behind Image */}
                    <div className="pointer-events-none absolute inset-8 rounded-full bg-[#E63946]/20 blur-3xl" />

                    {/* Image Card */}
                    <div
                        className="group relative rounded-3xl border border-white/10 bg-[#111827] p-3 shadow-2xl shadow-black/40 transition duration-500 hover:border-[#E63946]/40"
                        onMouseEnter={() => setShowLogo(false)}
                        onMouseLeave={() => setShowLogo(true)}
                    >

                        {/* Image Area */}
                        <div className="relative h-80 overflow-hidden rounded-2xl sm:h-105">

                            <img
                                src="/src/image/banner/banner.jpg"
                                alt="Robotic arm in an engineering laboratory"
                                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 "
                            />

                            {/* Dark Image Overlay */}
                            <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#080D1A]/90 via-transparent to-[#080D1A]/10" />

                            {/* Club Logo Hover Layer */}
                            <div
                                className={`absolute inset-0 flex flex-col items-center justify-center bg-[#080D1A]/90 backdrop-blur-sm transition-all duration-500 ${showLogo
                                    ? 'scale-100 opacity-100'
                                    : 'pointer-events-none scale-95 opacity-0'
                                    }`}
                            >

                                <div className="flex h-11/12 w-3/4  items-center justify-center rounded-2xl border border-[#E63946]/40 bg-white/5 p-4 shadow-lg shadow-red-950/30">
                                    <img
                                        src="/src/image/banner/bannerLogo.png"
                                        alt="Robotics Club logo"
                                        className="h-full w-full object-contain  rounded-2xl"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Separate Floating Badge */}
                    <div className="mt-5 flex justify-end">
                        <div className="animate-[float_3s_ease-in-out_infinite] rounded-xl border border-white/10 bg-[#111827] px-5 py-3">
                            <p className="text-xs text-slate-400">
                                THINK. BUILD. CREATE.
                            </p>

                            <p className="mt-1 font-bold text-[#FF6873]">
                                The Future Is Robotic
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Border */}
            <div className="h-px bg-linear-to-r from-transparent via-[#E63946]/50 to-transparent" />

            {/* Floating Animation */}
            <style>{`
                @keyframes float {
                    0%, 100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-8px);
                    }
                }
            `}</style>

        </section>
    );
};

export default Banner;
