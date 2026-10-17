import { FaCog, FaCode, FaMicrochip, FaFlask } from 'react-icons/fa';
import mechanicalImg from '../image/howItworks/Mechanical.png'
import programmingImg from '../image/howItworks/Programming&AI.png'
import electronicsImg from '../image/howItworks/Electronics&IoT.png'
import researchImg from '../image/howItworks/research&inovation.png'

export const divisions = [
    {
        id: 1,
        icon: FaCog,
        title: 'Mechanical',
        description:
            'Design robot bodies, chassis, structures, and mechanical systems.',
        color: 'text-orange-400',
        bg: 'bg-orange-400/10',
        border: 'hover:border-orange-400/40',
        image: mechanicalImg
    },
    {
        id: 2,
        icon: FaCode,
        title: 'Programming & AI',
        description:
            'Build robot software and explore artificial intelligence.',
        color: 'text-sky-400',
        bg: 'bg-sky-400/10',
        border: 'hover:border-sky-400/40',
        image: programmingImg
    },
    {
        id: 3,
        icon: FaMicrochip,
        title: 'Electronics & IoT',
        description:
            'Work with sensors, circuits, microcontrollers, and hardware.',
        color: 'text-emerald-400',
        bg: 'bg-emerald-400/10',
        border: 'hover:border-emerald-400/40',
        image: electronicsImg
    },
    {
        id: 4,
        icon: FaFlask,
        title: 'Research & Innovation',
        description:
            'Explore new ideas, test solutions, and develop innovative projects.',
        color: 'text-purple-400',
        bg: 'bg-purple-400/10',
        border: 'hover:border-purple-400/40',
        image: researchImg
    },
];
