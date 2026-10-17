
import { Link } from 'react-router-dom';
import { FaCompass, FaUserPlus, FaRocket, FaArrowRight, } from 'react-icons/fa';
import { divisions } from '../../data/divisions';
import SectionTitle from '../shared/SectionTitle';
import CompetitionGallery from './CompetitionGallery';

const steps = [
    {
        number: '01',
        icon: FaCompass,
        title: 'Explore the Club',
        description:
            'Discover our activities, events, and robotics projects.',
    },
    {
        number: '02',
        icon: FaUserPlus,
        title: 'Register to Join',
        description:
            'Follow the official registration process to become a member.',
    },
    {
        number: '03',
        icon: FaRocket,
        title: 'Start Building',
        description:
            'Join activities, work with a team, and learn by doing.',
    },
];

// const divisions = [
//     {
//         id: 1,
//         icon: FaCog,
//         title: 'Mechanical',
//         description:
//             'Design robot bodies, chassis, structures, and mechanical systems.',
//         color: 'text-orange-400',
//         bg: 'bg-orange-400/10',
//         border: 'hover:border-orange-400/40',
//     },
//     {
//         id: 2,
//         icon: FaCode,
//         title: 'Programming & AI',
//         description:
//             'Build robot software and explore artificial intelligence.',
//         color: 'text-sky-400',
//         bg: 'bg-sky-400/10',
//         border: 'hover:border-sky-400/40',
//     },
//     {
//         id: 3,
//         icon: FaMicrochip,
//         title: 'Electronics & IoT',
//         description:
//             'Work with sensors, circuits, microcontrollers, and hardware.',
//         color: 'text-emerald-400',
//         bg: 'bg-emerald-400/10',
//         border: 'hover:border-emerald-400/40',
//     },
//     {
//         id: 4,
//         icon: FaFlask,
//         title: 'Research & Innovation',
//         description:
//             'Explore new ideas, test solutions, and develop innovative projects.',
//         color: 'text-purple-400',
//         bg: 'bg-purple-400/10',
//         border: 'hover:border-purple-400/40',
//     },
// ];

const HowItWorks = () => {
    return (
        <section className="relative overflow-hidden bg-[#0E1525] px-6 py-24 text-white md:px-10 lg:px-16">

            {/* Background Decoration */}
            <div className="pointer-events-none absolute -left-32 top-40 h-72 w-72 rounded-full bg-[#E63946]/10 blur-[100px]" />

            <div className="relative mx-auto max-w-7xl">

                {/* Shared Section Title */}
                <SectionTitle
                    eyebrow="GET STARTED"
                    title="Your Journey Starts Here"
                    description="Take your first steps into robotics, find your area of interest, and build something meaningful with our community."
                />

                {/* Joining Steps */}
                <div className="mt-16">
                    <div className="mb-8 flex items-center gap-3">
                        <span className="h-8 w-1 rounded-full bg-[#E63946]" />
                        <h3 className="text-xl font-bold sm:text-2xl">
                            How to Join
                        </h3>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3">
                        {steps.map((step) => {
                            const Icon = step.icon;

                            return (
                                <div
                                    key={step.number}
                                    className="group relative rounded-2xl border border-white/10 bg-[#111827]/80 p-7 transition duration-300 hover:-translate-y-2 hover:border-[#E63946]/40 hover:shadow-xl hover:shadow-red-950/20"
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E63946]/10 text-[#FF6873] transition duration-300 group-hover:bg-[#E63946] group-hover:text-white">
                                            <Icon size={21} />
                                        </div>

                                        <span className="text-3xl font-black text-white/10 transition group-hover:text-[#E63946]/40">
                                            {step.number}
                                        </span>
                                    </div>

                                    <h4 className="mt-6 text-lg font-bold">
                                        {step.title}
                                    </h4>

                                    <p className="mt-3 text-sm leading-7 text-slate-400">
                                        {step.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>

                    <div className="mt-7 text-center">
                        <Link
                            to="/how-to-join"
                            className="inline-flex items-center gap-3 rounded-lg bg-[#E63946] px-6 py-3.5 font-semibold transition duration-300 hover:-translate-y-1 hover:bg-[#ff4b58]"
                        >
                            Learn How to Join
                            <FaArrowRight size={14} />
                        </Link>
                    </div>
                </div>

                {/* Divisions */}
                <div className="mt-24">
                    <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <div className="flex items-center gap-3">
                                <span className="h-8 w-1 rounded-full bg-[#E63946]" />
                                <h3 className="text-xl font-bold sm:text-2xl">
                                    Explore Our Divisions
                                </h3>
                            </div>

                            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
                                Find the area that matches your interests.
                                Every division offers a different way to learn
                                and contribute.
                            </p>
                        </div>

                        <span className="w-fit rounded-full border border-[#E63946]/30 bg-[#E63946]/10 px-4 py-2 text-xs font-semibold text-[#FF6873]">
                            {String(divisions.length).padStart(2, '0')} DIVISIONS
                        </span>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {divisions.map((division) => {
                            const Icon = division.icon;

                            return (
                                <div
                                    key={division.id}
                                    className={`group overflow-hidden rounded-2xl border border-white/10 bg-[#111827] transition duration-300 hover:-translate-y-2 hover:border-[#E63946]/40 ${division.border}`}
                                >
                                    {/* Image Area */}
                                    <div className="relative aspect-16/10 overflow-hidden">
                                        <img
                                            src={division.image}
                                            alt={division.title}
                                            loading="lazy"
                                            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                        />

                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-linear-to-t from-[#111827] via-transparent to-transparent" />

                                        {/* Icon Badge */}
                                        <div
                                            className={`absolute -bottom-1 left-4 flex h-12 w-12 items-center justify-center rounded-xl ${division.bg} ${division.color} shadow-lg ring-4 ring-[#111827]`}
                                        >
                                            <Icon size={24} />
                                        </div>
                                    </div>

                                    {/* Card Body */}
                                    <div className="p-5">
                                        <h4 className="text-lg font-bold text-white transition-colors duration-300 group-hover:text-[#E63946]">
                                            {division.title}
                                        </h4>

                                        <p className="mt-3 text-sm leading-7 text-slate-400">
                                            {division.description}
                                        </p>

                                        {/* Bottom Hover Bar */}
                                        <div className="mt-6 h-1 w-10 rounded-full bg-[#E63946]/60 transition-all duration-300 group-hover:w-full" />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <CompetitionGallery></CompetitionGallery>

            </div>
        </section>
    );
};

export default HowItWorks;
