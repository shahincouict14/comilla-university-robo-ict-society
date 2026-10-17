
import { useEffect, useState } from 'react';
import {
    FaUsers,
    FaRobot,
    FaCalendarCheck,
    FaTrophy,
} from 'react-icons/fa';

import SectionTitle from '../shared/SectionTitle';

const achievements = [
    {
        id: 1,
        label: 'Club Members',
        value: 120,
        suffix: '+',
        icon: FaUsers,
    },
    {
        id: 2,
        label: 'Projects Built',
        value: 25,
        suffix: '+',
        icon: FaRobot,
    },
    {
        id: 3,
        label: 'Events Organized',
        value: 15,
        suffix: '+',
        icon: FaCalendarCheck,
    },
    {
        id: 4,
        label: 'Awards Achieved',
        value: 8,
        suffix: '+',
        icon: FaTrophy,
    },
];

const Counter = ({ target, suffix }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let current = 0;
        const duration = 1500;
        const intervalTime = 20;
        const increment = target / (duration / intervalTime);

        const timer = setInterval(() => {
            current += increment;

            if (current >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.floor(current));
            }
        }, intervalTime);

        return () => clearInterval(timer);
    }, [target]);

    return (
        <span>
            {count}
            {suffix}
        </span>
    );
};

const Achievements = () => {
    return (
        <section className="relative overflow-hidden bg-[#080D1A] px-6 py-24 text-white md:px-10 lg:px-16">

            {/* Background Glow */}
            <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-[#E63946]/10 blur-[100px]" />

            <div className="relative mx-auto max-w-7xl">

                <SectionTitle
                    eyebrow="OUR ACHIEVEMENTS"
                    title="Small Steps, Big Impact"
                    description="Every project, event, and collaboration helps our robotics community grow and move forward."
                />

                {/* Achievement Cards */}
                <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

                    {achievements.map((item) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={item.id}
                                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#111827] p-7 text-center transition duration-300 hover:-translate-y-2 hover:border-[#E63946]/40 hover:shadow-xl hover:shadow-red-950/20"
                            >
                                {/* Card Glow */}
                                <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#E63946]/0 blur-2xl transition duration-500 group-hover:bg-[#E63946]/15" />

                                <div className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-[#E63946]/20 bg-[#E63946]/10 text-[#FF6873] transition duration-300 group-hover:scale-110 group-hover:bg-[#E63946] group-hover:text-white">
                                    <Icon size={24} />
                                </div>

                                <h3 className="mt-6 text-4xl font-extrabold tracking-tight">
                                    <Counter
                                        target={item.value}
                                        suffix={item.suffix}
                                    />
                                </h3>

                                <p className="mt-3 text-sm font-medium text-slate-400">
                                    {item.label}
                                </p>

                                <div className="mx-auto mt-6 h-1 w-10 rounded-full bg-[#E63946]/60 transition-all duration-300 group-hover:w-20" />
                            </div>
                        );
                    })}

                </div>

                {/* Bottom Message */}
                <div className="mt-12 rounded-2xl border border-white/10 bg-white/3 px-6 py-8 text-center">
                    <p className="text-lg font-semibold">
                        Every great invention starts with an idea.
                    </p>

                    <p className="mt-2 text-sm text-slate-400">
                        Learn together. Build together. Innovate together.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default Achievements;
