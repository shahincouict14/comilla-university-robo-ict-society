
import {
    FaFacebookF,
    FaEnvelope,
    FaUserTie,
    FaUsers,
    FaArrowRight,
} from 'react-icons/fa'

import SectionTitle from '../shared/SectionTitle'

const advisors = [
    {
        id: 1,
        name: 'Dr. Md. Tofael Ahmed',
        role: 'Chief Advisor',
        image: '/images/team/chief-advisor.jpg',
        facebook: '',
        email: 'tofael@cou.ac.bd',
    },
    {
        id: 2,
        name: 'Dr. Dulal Chakraborty',
        role: 'Advisor',
        image: '/images/team/dulal-chakraborty.jpg',
        facebook: '',
        email: 'dulalchakraborty@cou.ac.bd',
    },
    {
        id: 3,
        name: 'Md. Rakib Hasan',
        role: 'Advisor',
        image: '/images/team/rakib-hasan.jpg',
        facebook: '',
        email: 'rakib@cou.ac.bd',
    },
    {
        id: 4,
        name: 'Moinur Rahman',
        role: 'Advisor',
        image: '/images/team/moinur-rahman.jpg',
        facebook: '',
        email: 'moinur.rahman@cou.ac.bd',
    },
]

const executiveCommittee = [
    {
        id: 1,
        name: 'Md Shafiul Alam',
        role: 'President',
        image: '/images/team/shafiul-alam.jpg',
        facebook: '',
        email: '',
    },
    {
        id: 2,
        name: 'Ashraful Islam',
        role: 'Vice President',
        image: '/images/team/ashraful-islam.jpg',
        facebook: '',
        email: '',
    },
    {
        id: 3,
        name: 'Md. Zahid Hossain',
        role: 'General Secretary',
        image: '/images/team/zahid-hossain.jpg',
        facebook: '',
        email: '',
    },
    {
        id: 4,
        name: 'Md. Shahin Hossain',
        role: 'Assistant Joint Secretary',
        image: '/images/team/shahin-hossain.jpg',
        facebook: '',
        email: 'shahinhossain5094@gmail.com',
    },
    {
        id: 5,
        name: 'Prachi Saha',
        role: 'Treasurer',
        image: '/images/team/prachi-saha.jpg',
        facebook: '',
        email: '',
    },
    {
        id: 6,
        name: 'Pijon Paul Surjo',
        role: 'Event Secretary',
        image: '/images/team/pijon-paul-surjo.jpg',
        facebook: '',
        email: '',
    },
    {
        id: 7,
        name: 'Md. Tanvir Islam Tamim',
        role: 'Resource Secretary',
        image: '/images/team/tanvir-tamim.jpg',
        facebook: '',
        email: '',
    },
    {
        id: 8,
        name: 'Hamim Ahmed',
        role: 'Publication Secretary',
        image: '/images/team/hamim-ahmed.jpg',
        facebook: '',
        email: '',
    },
]

const executiveMembers = [
    {
        id: 1,
        name: 'Mohiduzzaman Ramim',
        image: '/images/team/mohiduzzaman-ramim.jpg',
        facebook: '',
        email: '',
    },
    {
        id: 2,
        name: 'Nusrat Ansary',
        image: '/images/team/nusrat-ansary.jpg',
        facebook: '',
        email: '',
    },
    {
        id: 3,
        name: 'Tanim Saha',
        image: '/images/team/tanim-saha.jpg',
        facebook: '',
        email: '',
    },
    {
        id: 4,
        name: 'Bibi Khodeja',
        image: '/images/team/bibi-khodeja.jpg',
        facebook: '',
        email: '',
    },
    {
        id: 5,
        name: 'Md. Salman Pathwary Abir',
        image: '/images/team/salman-abir.jpg',
        facebook: '',
        email: '',
    },
]

// Reusable member card
const MemberCard = ({ member }) => {
    return (
        <article className="group overflow-hidden rounded-2xl border border-slate-700/70 bg-[#1B2638] transition-all duration-300 hover:-translate-y-2 hover:border-red-500/60 hover:shadow-xl hover:shadow-red-500/10">

            {/* Member Photo */}
            <div className="relative aspect-4/5 overflow-hidden bg-[#253248]">
                <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Soft navy image overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-[#101827] via-[#101827]/10 to-transparent" />

                {/* Role Badge */}
                <span className="absolute left-3 top-3 max-w-[90%] rounded-full border border-red-400/30 bg-[#101827]/85 px-3 py-1.5 text-xs font-semibold text-red-300 backdrop-blur-md">
                    {member.role || 'Executive Member'}
                </span>

                {/* Member Name */}
                <div className="absolute inset-x-0 bottom-0 p-4">
                    <h3 className="text-lg font-bold leading-snug text-white sm:text-xl">
                        {member.name}
                    </h3>

                    <div className="mt-2 h-1 w-10 rounded-full bg-[#E63946] transition-all duration-300 group-hover:w-16" />
                </div>
            </div>

            {/* Contact Section */}
            <div className="flex min-h-18 items-center justify-between gap-3 p-4">
                <p className="text-xs leading-5 text-slate-400">
                    Comilla University
                    <span className="block text-slate-300">
                        Robotics Club
                    </span>
                </p>

                <div className="flex shrink-0 gap-2">
                    {member.facebook && (
                        <a
                            href={member.facebook}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`${member.name} Facebook`}
                            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-600 text-slate-300 transition-all duration-300 hover:border-[#E63946] hover:bg-[#E63946] hover:text-white"
                        >
                            <FaFacebookF size={14} />
                        </a>
                    )}

                    {member.email && (
                        <a
                            href={`mailto:${member.email}`}
                            aria-label={`Email ${member.name}`}
                            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-600 text-slate-300 transition-all duration-300 hover:border-[#E63946] hover:bg-[#E63946] hover:text-white"
                        >
                            <FaEnvelope size={15} />
                        </a>
                    )}
                </div>
            </div>
        </article>
    )
}

// Reusable section heading
const TeamGroupHeading = ({ icon, title, description }) => (
    <div className="mb-7 flex items-center gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-red-500/20 bg-red-500/10 text-[#FF5964]">
            {icon}
        </div>

        <div>
            <h3 className="text-xl font-bold text-white sm:text-2xl">
                {title}
            </h3>

            <p className="mt-1 text-sm text-slate-400">
                {description}
            </p>
        </div>
    </div>
)

const MeetTheTeam = () => {
    return (
        <section className="relative overflow-hidden bg-[#101827] px-4 py-20 text-white sm:px-6 sm:py-24 lg:px-8">

            {/* Subtle red ambient glow */}
            <div className="pointer-events-none absolute -right-40 top-32 h-80 w-80 rounded-full bg-red-500/8 blur-3xl" />

            <div className="pointer-events-none absolute -left-40 bottom-40 h-80 w-80 rounded-full bg-red-500/6 blur-3xl" />

            <div className="relative mx-auto max-w-7xl">

                {/* Main Heading */}
                <SectionTitle
                    eyebrow="THE PEOPLE BEHIND THE VISION"
                    title="Meet Our Team"
                    description="Meet the advisors, leaders, and passionate members building our robotics community together."
                />

                {/* Advisors */}
                <div className="mt-14">
                    <TeamGroupHeading
                        icon={<FaUserTie size={20} />}
                        title="Advisors"
                        description="Guidance and experience"
                    />

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
                        {advisors.map((member) => (
                            <MemberCard
                                key={member.id}
                                member={member}
                            />
                        ))}
                    </div>
                </div>

                {/* Executive Committee */}
                <div className="mt-16">
                    <TeamGroupHeading
                        icon={<FaUsers size={20} />}
                        title="Executive Committee"
                        description="The team leading our activities"
                    />

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-6">
                        {executiveCommittee.map((member) => (
                            <MemberCard
                                key={member.id}
                                member={member}
                            />
                        ))}
                    </div>
                </div>

                {/* Executive Members */}
                <div className="mt-16">
                    <TeamGroupHeading
                        icon={<FaUsers size={20} />}
                        title="Executive Members"
                        description="The people behind our projects and ideas"
                    />

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-6">
                        {executiveMembers.map((member) => (
                            <MemberCard
                                key={member.id}
                                member={member}
                            />
                        ))}
                    </div>
                </div>

                {/* Join Club CTA */}
                <div className="relative mt-16 overflow-hidden rounded-2xl border border-red-500/20 bg-linear-to-r from-[#1B2638] via-[#202B3D] to-[#1B2638] p-6 sm:p-8">
                    <div className="pointer-events-none absolute -right-10 -top-20 h-48 w-48 rounded-full bg-red-500/10 blur-3xl" />

                    <div className="relative flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
                        <div>
                            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-red-400">
                                Join Our Community
                            </p>

                            <h3 className="text-xl font-bold text-white sm:text-2xl">
                                Be Part of Our Journey
                            </h3>

                            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-300">
                                Learn, collaborate, and build the future of robotics with us.
                            </p>
                        </div>

                        <a
                            href="/how-to-join"
                            className="inline-flex shrink-0 items-center gap-3 rounded-xl bg-[#E63946] px-6 py-3 font-semibold text-white shadow-lg shadow-red-500/15 transition-all duration-300 hover:-translate-y-1 hover:bg-[#D62839] hover:shadow-red-500/25"
                        >
                            Join Our Club
                            <FaArrowRight size={14} />
                        </a>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default MeetTheTeam
