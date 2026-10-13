

import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaMapMarkerAlt, FaArrowRight, FaUser } from 'react-icons/fa';


const EventCard = ({ event }) => {
    const {
        id, title, image, description, status, contactInfo, division, date, venue } = event;

    const formattedDate = new Date(`${date}T00:00:00`)
        .toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });

    const [name, email] = contactInfo.split(',').map(item => item.trim());

    return (

        <div className="group overflow-hidden rounded-2xl border border-slate-700 bg-[#101827] text-white shadow-xl transition duration-300 hover:-translate-y-2 hover:border-red-500 hover:shadow-red-950/40">
           
            {/* Image */}
            <div className="relative overflow-hidden">
                <img
                    src={`${image}?auto=format&fit=crop&w=800&h=450&q=80`}
                    alt={title}
                    className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-linear-to-t from-[#101827] via-transparent to-black/20" />

                <span className="absolute left-4 top-4 rounded-md bg-red-500 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
                    {status}
                </span>

                <span className="absolute bottom-4 right-4 rounded-md border border-white/20 bg-slate-950/80 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur">
                    {division}
                </span>
            </div>

            <div className="space-y-4 p-5">

                {/* Date and Venue */}
                <div className="flex items-start gap-3">
                    <FaCalendarAlt className="mt-1 shrink-0 text-red-400" />
                    <div>
                        <p className="text-sm font-semibold text-white">
                            {formattedDate}
                        </p>
                        <p className="mt-1 flex items-start gap-2 text-xs text-slate-400">
                            <FaMapMarkerAlt className="mt-0.5 shrink-0 text-red-400" />
                            {venue}
                        </p>
                    </div>
                </div>

                {/* Title */}
                <h2 className="text-xl font-bold leading-snug transition group-hover:text-red-400">
                    {title}
                </h2>

                {/* Description */}
                <p className="text-sm leading-6 text-slate-400">
                    {description}
                </p>

                {/* Contact */}
                <div className="flex items-center gap-3 border-t border-slate-700 pt-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-500/10 text-red-400">
                        <FaUser />
                    </div>

                    <div className="min-w-0 flex-1">
                        <p className="text-sm font-semibold text-white">{name}</p>
                        <p className="truncate text-xs text-slate-400">
                            {email}
                        </p>
                    </div>
                </div>

                {/* Button */}
                <Link
                    to={`/events/${id}`}
                    className="flex w-full items-center justify-between rounded-lg bg-red-500 px-4 py-3 text-sm font-bold text-white transition hover:bg-red-600"
                >
                    Explore Event
                    <FaArrowRight className="transition group-hover:translate-x-1" />
                </Link>

            </div>
        </div>
    );
};

export default EventCard;
