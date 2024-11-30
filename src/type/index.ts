import { StaticImageData } from 'next/image';

export interface Skill {
    name: string;
    years: string;
    proficiency: string[];
}

export interface Project {
    image: StaticImageData;
    title: string;
    description: string;
    tags: string[];
    githubUrl: string;
    appUrl: string;
}
