
import { FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-slate-950 text-gray-300">
            <div className="max-w-7xl mx-auto px-6 pt-14 pb-8">

                {/* Main Footer */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

                    {/* Logo & About */}
                    <div>
                        <Link to="/" className="flex items-center gap-3 mb-4">
                             <img className='w-10' src="/src/assets/logos/logo.svg"></img>
                            <h2 className="text-2xl font-bold text-white">
                                CR<span className="text-red-500">IS</span>
                            </h2>
                        </Link>

                        <p className="text-sm leading-7 text-gray-400">
                            Explore robotics, build innovative projects, and turn
                            your ideas into reality. Join us to learn, create, and
                            shape the future with technology.
                        </p>

                        <div className="flex gap-4 mt-5">
                            <a href="#" aria-label="Facebook"
                                className="p-3 rounded-full bg-slate-800 hover:bg-red-600 transition">
                                <FaFacebookF />
                            </a>
                            <a href="#" aria-label="Instagram"
                                className="p-3 rounded-full bg-slate-800 hover:bg-red-600 transition">
                                <FaInstagram />
                            </a>
                            <a href="#" aria-label="GitHub"
                                className="p-3 rounded-full bg-slate-800 hover:bg-red-600 transition">
                                <FaGithub />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-5">
                            Quick Links
                        </h3>
                        <ul className="space-y-3 text-sm">
                            <li><Link to="/" className="hover:text-red-500 transition">Home</Link></li>
                            <li><Link to="/about" className="hover:text-red-500 transition">About Us</Link></li>
                            <li><Link to="/events" className="hover:text-red-500 transition">Events</Link></li>
                            <li><Link to="/projects" className="hover:text-red-500 transition">Projects</Link></li>
                            <li><Link to="/contact" className="hover:text-red-500 transition">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Our Divisions */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-5">
                            Our Divisions
                        </h3>
                        <ul className="space-y-3 text-sm">
                            <li>Robotics & Automation</li>
                            <li>AI & Machine Learning</li>
                            <li>IoT & Embedded Systems</li>
                            <li>Research & Development</li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-5">
                            Get In Touch
                        </h3>

                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <MdLocationOn className="text-xl text-red-500 shrink-0" />
                                <span>Your University Campus, Bangladesh</span>
                            </li>

                            <li className="flex items-center gap-3">
                                <MdEmail className="text-xl text-red-500 shrink-0" />
                                <a href="mailto:roboticsclub@example.com"
                                    className="hover:text-red-500 transition break-all">
                                    roboticsclub@example.com
                                </a>
                            </li>

                            <li className="flex items-center gap-3">
                                <MdPhone className="text-xl text-red-500 shrink-0" />
                                <span>Contact Club Administration</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="border-t border-slate-800 mt-12 pt-6
          flex flex-col sm:flex-row justify-between items-center gap-4
          text-sm text-gray-500">

                    <p>
                        © {new Date().getFullYear()} Robotics Club. All rights reserved.
                    </p>

                    <p>
                        Built with <span className="text-red-500">♥</span> by Robotics Club
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
