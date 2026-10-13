
import { Link, useLoaderData } from 'react-router-dom'
import { FaArrowLeft, FaCalendarAlt, FaMapMarkerAlt, FaPhoneAlt, FaArrowRight, FaRobot, FaRegClock, } from 'react-icons/fa'
import { statusStyle } from '../utils/statusColor'

const EventDetails = () => {
    const event = useLoaderData()

    const formattedDate = event.date
        ? new Date(event.date).toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        })
        : null

    const eventStatus = (event.status || '').toLowerCase()

    const statusClass =
        statusStyle[eventStatus] ||
        'border-red-500/30 bg-red-500/10 text-red-400'

    return (
        <main className="min-h-screen bg-[#0F1726] text-[#F8FAFC]">

            {/* Subtle Background Decoration */}
            <div className="pointer-events-none absolute left-0 top-40 h-72 w-72 rounded-full bg-red-500/6 blur-[100px]" />
            <div className="pointer-events-none absolute right-0 top-120 h-72 w-72 rounded-full bg-red-500/4 blur-[120px]" />

            <div className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">

                {/* Back Navigation */}
                <Link
                    to="/events"
                    className="group mb-8 inline-flex items-center gap-3 text-sm font-semibold text-slate-300 transition hover:text-[#FF4D57]"
                >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-[#182437] transition group-hover:border-red-500/50 group-hover:bg-red-500/10">
                        <FaArrowLeft className="transition-transform group-hover:-translate-x-1" />
                    </span>
                    Back to Events
                </Link>

                {/* Main Event Section */}
                <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-10">

                    {/* Left: Image and Highlights */}
                    <div className="lg:col-span-7">

                        <div className="group relative overflow-hidden rounded-2xl border border-slate-700/80 bg-[#182437] shadow-2xl shadow-black/20">

                            <img
                                src={event.image}
                                alt={event.title}
                                className="aspect-4/3 w-full object-cover transition duration-700 group-hover:scale-[1.025]"
                            />

                            <div className="absolute inset-0 bg-linear-to-t from-[#0F1726]/80 via-transparent to-black/10" />

                            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3 sm:bottom-6 sm:left-6 sm:right-6">
                                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#0F1726]/85 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
                                    <FaRobot className="text-[#FF4D57]" />
                                    CRIS Robotics Club
                                </span>

                                <span className={`rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-wider ${statusClass}`}>
                                    {event.status}
                                </span>
                            </div>
                        </div>

                        {/* Quick Highlights */}
                        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">

                            <div className="flex items-center gap-3 rounded-xl border border-slate-700/70 bg-[#182437] p-4 transition hover:border-red-500/40">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-500/10 text-[#FF4D57]">
                                    <FaRobot size={19} />
                                </div>
                                <div>
                                    <p className="font-semibold text-white">Robotics</p>
                                    <p className="mt-1 text-xs text-slate-400">Build and explore</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 rounded-xl border border-slate-700/70 bg-[#182437] p-4 transition hover:border-red-500/40">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-500/10 text-[#FF4D57]">
                                    <FaRegClock size={18} />
                                </div>
                                <div>
                                    <p className="font-semibold text-white">Learn</p>
                                    <p className="mt-1 text-xs text-slate-400">New skills</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 rounded-xl border border-slate-700/70 bg-[#182437] p-4 transition hover:border-red-500/40">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-500/10 text-[#FF4D57]">
                                    <FaArrowRight size={17} />
                                </div>
                                <div>
                                    <p className="font-semibold text-white">Innovate</p>
                                    <p className="mt-1 text-xs text-slate-400">Create solutions</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Right: Event Details */}
                    <div className="lg:col-span-5">

                        {/* Eyebrow */}
                        <p className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-[#FF4D57] sm:text-sm">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#FF4D57]" />
                            Discover · Build · Innovate
                        </p>

                        {/* Status and Division */}
                        <div className="mb-5 flex flex-wrap items-center gap-3">

                            <span className={`rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-wide ${statusClass}`}>
                                {event.status}
                            </span>

                            <span className="rounded-full border border-slate-600/70 bg-[#182437] px-4 py-2 text-sm font-medium text-slate-300">
                                {event.division}
                            </span>

                        </div>

                        {/* Information Card */}
                        <section className="mt-8 rounded-2xl border border-slate-700/80 bg-linear-to-br from-[#182437] to-[#121D2E] p-5 shadow-xl shadow-black/10 sm:p-6">

                            <div className="mb-6 flex items-center gap-3">
                                <div className="h-8 w-1 rounded-full bg-[#FF3B4A]" />
                                <h2 className="text-xl font-bold text-white">
                                    Event Information
                                </h2>
                            </div>

                            <div className="space-y-5">

                                {formattedDate && (
                                    <div className="flex items-start gap-4">
                                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-red-500/15 bg-red-500/10 text-[#FF4D57]">
                                            <FaCalendarAlt size={18} />
                                        </div>

                                        <div className="min-w-0 flex-1 pt-0.5">
                                            <p className="text-sm text-slate-400">
                                                Date
                                            </p>
                                            <p className="mt-1 font-semibold text-white">
                                                {formattedDate}
                                            </p>
                                        </div>
                                    </div>
                                )}

                                {event.venue && (
                                    <div className="flex items-start gap-4">
                                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-red-500/15 bg-red-500/10 text-[#FF4D57]">
                                            <FaMapMarkerAlt size={18} />
                                        </div>

                                        <div className="min-w-0 flex-1 pt-0.5">
                                            <p className="text-sm text-slate-400">
                                                Venue
                                            </p>
                                            <p className="mt-1 font-semibold leading-6 text-white">
                                                {event.venue}
                                            </p>
                                        </div>
                                    </div>
                                )}

                                {event.contactInfo && (
                                    <div className="flex items-start gap-4">
                                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-red-500/15 bg-red-500/10 text-[#FF4D57]">
                                            <FaPhoneAlt size={17} />
                                        </div>

                                        <div className="min-w-0 flex-1 pt-0.5">
                                            <p className="text-sm text-slate-400">
                                                Contact Information
                                            </p>
                                            <p className="mt-1 wrap-break-word font-semibold leading-6 text-white">
                                                {typeof event.contactInfo === 'string'
                                                    ? event.contactInfo
                                                    : JSON.stringify(event.contactInfo)}
                                            </p>
                                        </div>
                                    </div>
                                )}

                            </div>

                            {/* Division Label */}
                            <div className="mt-6 border-t border-slate-700/80 pt-5">
                                <p className="text-sm text-slate-400">
                                    Organized by
                                </p>
                                <p className="mt-1 font-semibold text-white">
                                    CRIS Robotics Club
                                </p>
                            </div>
                        </section>

                        {/* Registration CTA */}
                        {eventStatus !== 'completed' && (
                            <div className="mt-6">
                                <Link
                                    href="#registration"
                                    className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#FF3B4A] px-6 py-4 font-bold text-white shadow-lg shadow-red-950/20 transition duration-300 hover:-translate-y-0.5 hover:bg-[#E92E3D] hover:shadow-red-900/30 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-[#0F1726]"
                                >
                                    Explore Registration
                                    <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                                </Link>

                                <p className="mt-3 text-center text-xs leading-5 text-slate-500">
                                    Join us and be part of the next innovation.
                                </p>
                            </div>
                        )}

                    </div>
                </div>

                {/* About the Event */}
                <section className="mt-12 overflow-hidden rounded-2xl border border-slate-700/80 bg-[#121D2E] sm:mt-16">

                    <div className="grid grid-cols-1 md:grid-cols-2">

                        {/* About Content */}
                        <div className="p-6 sm:p-8 lg:p-10">

                            <div className="mb-6 flex items-center gap-3">
                                <div className="h-8 w-1 rounded-full bg-[#FF3B4A]" />
                                <h2 className="text-2xl font-bold text-white">
                                    About the Event
                                </h2>
                            </div>

                            <p className="whitespace-pre-line leading-8 text-slate-300">
                                {event.description}
                            </p>

                            <div className="mt-7 flex items-center gap-3 text-sm font-semibold text-[#FF626B]">
                                <FaRobot size={20} />
                                <span>Build Skills. Create Solutions.</span>
                            </div>
                        </div>

                        {/* Visual Panel */}
                        <div className="relative flex min-h-64 items-center justify-center overflow-hidden border-t border-slate-700/70 bg-[#0D1727] p-8 md:border-l md:border-t-0">

                            <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full border border-red-500/10" />
                            <div className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full border border-red-500/10" />
                            <div className="absolute right-10 top-10 h-2 w-2 rounded-full bg-[#FF3B4A]/70" />
                            <div className="absolute bottom-12 right-20 h-1.5 w-1.5 rounded-full bg-white/40" />

                            <div className="relative text-center">
                                <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-2xl border border-red-500/20 bg-red-500/10 text-[#FF4D57] shadow-lg shadow-red-950/20">
                                    <FaRobot size={42} />
                                </div>

                                <p className="text-sm font-bold uppercase tracking-[0.25em] text-slate-400">
                                    Think · Design · Build
                                </p>

                                <h3 className="mt-3 text-3xl font-extrabold text-white">
                                    Small Steps,
                                </h3>

                                <h3 className="text-3xl font-extrabold text-[#FF4D57]">
                                    Big Innovations.
                                </h3>

                                <div className="mx-auto mt-5 h-1 w-12 rounded-full bg-[#FF3B4A]" />
                            </div>

                        </div>
                    </div>
                </section>

                {/* Registration Section */}
                <section id="registration" className="scroll-mt-24" />

                {/* Bottom Navigation */}
                <div className="mt-10 flex justify-center">
                    <Link
                        to="/events"
                        className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-5 py-3 font-semibold text-slate-300 transition hover:border-red-500/50 hover:text-white"
                    >
                        <FaArrowLeft size={13} />
                        Browse All Events
                    </Link>
                </div>

            </div>
        </main>
    )
}

export default EventDetails
