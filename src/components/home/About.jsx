
import { Link } from 'react-router-dom';
import SectionTitle from '../shared/SectionTitle';

const features = [
    {
        number: '01',
        title: 'Hands-on Learning',
        description:
            'Learn robotics by building real projects and solving practical problems.',
    },
    {
        number: '02',
        title: 'Team Collaboration',
        description:
            'Work with passionate students, share ideas, and learn from each other.',
    },
    {
        number: '03',
        title: 'Innovation',
        description:
            'Explore robotics, programming, and AI to turn creative ideas into reality.',
    },
];

const About = () => {
    return (
        <section className="relative overflow-hidden bg-[#0B1120] px-6 py-24 text-white md:px-10 lg:px-16">

            {/* Background Decoration */}
            <div className="pointer-events-none absolute -right-24 top-20 h-72 w-72 rounded-full bg-[#E63946]/10 blur-[100px]" />

            <div className="relative mx-auto max-w-7xl">

                {/* Section Heading */}
                <SectionTitle
                    eyebrow="WHO WE ARE"
                    title="Building More Than Robots"
                    description="We bring curious minds together to explore technology, develop practical skills, and create innovative solutions."
                />

                {/* Main Content */}
                <div className="mt-16 grid items-center gap-14 lg:grid-cols-2 lg:gap-20">

                    {/* Left: Image */}
                    <div className="group relative mx-auto w-full max-w-xl">

                        {/* Image Glow */}
                        <div className="absolute -inset-3 rounded-3xl bg-[#E63946]/10 blur-xl transition duration-500 group-hover:bg-[#E63946]/20" />

                        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#111827] p-3">

                            <img
                                src="/src/image/banner/exploreRobotic.avif"
                                alt="Students exploring robotics projects"
                                className="h-80 w-full rounded-xl object-cover transition duration-700 group-hover:scale-105 sm:h-105"
                            />

                            {/* Image Overlay */}
                            <div className="pointer-events-none absolute inset-3 rounded-xl bg-linear-to-t from-[#080D1A]/80 via-transparent to-transparent" />

                            {/* Image Caption */}
                            <div className="absolute bottom-8 left-8">
                                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF6873]">
                                    Learn By Doing
                                </p>

                                <h3 className="mt-2 text-2xl font-bold">
                                    Ideas Into Reality
                                </h3>
                            </div>
                        </div>

                        {/* Decorative Corner */}
                        <div className="absolute -left-3 -top-3 h-16 w-16 rounded-tl-2xl border-l-2 border-t-2 border-[#E63946]" />

                    </div>

                    {/* Right: Content */}
                    <div>

                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#FF6873]">
                            Our Mission
                        </p>

                        <h3 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
                            Turning Curiosity Into
                            <span className="text-[#E63946]"> Innovation.</span>
                        </h3>

                        <p className="mt-6 leading-8 text-slate-300">
                            Comilla University Robotics Club is a community
                            for students who are interested in robotics,
                            programming, and emerging technologies.
                        </p>

                        <p className="mt-4 leading-8 text-slate-400">
                            Our goal is to help students learn together,
                            build practical projects, share knowledge,
                            and develop the skills needed to solve
                            real-world problems.
                        </p>

                        {/* Feature List */}
                        <div className="mt-8 space-y-4">

                            {features.map((feature) => (
                                <div
                                    key={feature.number}
                                    className="group flex gap-4 rounded-xl border border-white/5 bg-white/3 p-4 transition duration-300 hover:-translate-y-1 hover:border-[#E63946]/30 hover:bg-[#E63946]/5"
                                >

                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[#E63946]/30 bg-[#E63946]/10 font-bold text-[#FF6873] transition duration-300 group-hover:bg-[#E63946] group-hover:text-white">
                                        {feature.number}
                                    </div>

                                    <div>
                                        <h4 className="font-bold text-white">
                                            {feature.title}
                                        </h4>

                                        <p className="mt-1 text-sm leading-6 text-slate-400">
                                            {feature.description}
                                        </p>
                                    </div>

                                </div>
                            ))}

                        </div>

                        {/* CTA */}
                        <Link
                            to="/how-to-join"
                            className="mt-8 inline-flex items-center gap-3 rounded-lg bg-[#E63946] px-6 py-3.5 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#ff4b58]"
                        >
                            Discover Our Community
                            <span>↗</span>
                        </Link>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default About;
