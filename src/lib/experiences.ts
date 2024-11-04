import React from 'react';
import { LuGraduationCap } from 'react-icons/lu';
// import { CgWorkAlt } from "react-icons/cg";

export const experiencesData = [
    {
        title: 'Teikyo University',
        location: 'Tokyo, Japan',
        description: 'Bachelor of Economics',
        icon: React.createElement(LuGraduationCap),
        date: '2016.4 - 2020.3',
    },
    {
        title: 'Lane Community College',
        location: 'Oregon, USA',
        description: 'Associate of Science',
        icon: React.createElement(LuGraduationCap),
        date: '2020.4 - 2021.12',
    },
    {
        title: 'Oregon State University',
        location: 'Oregon, USA',
        description: `Bachelor of Science`,
        icon: React.createElement(LuGraduationCap),
        date: '2022 - Expected 2024.6',
    },
] as const;
