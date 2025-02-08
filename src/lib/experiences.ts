import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';

export const experiencesData = [
    {
        title: 'LoiLo Inc.',
        location: 'Oregon, USA (Remote)',
        description: `Backend Engineer Intern`,
        icon: React.createElement(CgWorkAlt),
        date: '2024.6 - Present',
    },
    {
        title: 'Excite',
        location: 'Oregon, USA (Remote)',
        description: `Backend Engineer Intern`,
        icon: React.createElement(CgWorkAlt),
        date: '2024.10.1 - 2024.10.31',
    },
    {
        title: 'OPTiM Corporation',
        location: 'Tokyo, Japan (Onsite)',
        description: `Backend Engineer Intern`,
        icon: React.createElement(CgWorkAlt),
        date: '2024.8.19 - 2024.8.30',
    },
    {
        title: 'TeamLab Inc.',
        location: 'Tokyo, Japan (Onsite)',
        description: `Frontend Engineer Intern`,
        icon: React.createElement(CgWorkAlt),
        date: '2024.7.29 - 2024.8.9',
    },
    {
        title: 'Oregon State University CASS',
        location: 'Oregon, USA (Onsite)',
        description: `Student Developer Intern`,
        icon: React.createElement(CgWorkAlt),
        date: '2022.4 - 2022.9',
    },
    {
        title: "Marvey's Kitchen",
        location: 'Tokyo, Japan',
        description: `Co-Founded a Fresh Dog Food Company`,
        icon: React.createElement(CgWorkAlt),
        date: '2023.1 - 2023.12',
    },
] as const;
