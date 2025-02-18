import { StaticImageData } from 'next/image';

interface Link {
    name: string;
    path: string;
}

interface Proficiency {
    level: number;
    description: string;
}

interface Education {
    date: string;
    title: string;
}

export interface Skill {
    name: string;
    proficiency: number;
    years: string;
    output: string[];
}

export interface Work {
    company: string;
    position: string;
    arrangement: string;
    technologies: string[];
    period: string;
    description: string;
    tasks: string[];
    achievements: string[];
}

export interface Project {
    image: StaticImageData;
    title: string;
    description: string;
    tags: string[];
    githubUrl: string;
    appUrl: string;
}

export interface TranslationType {
    downloadText: string;
    links: Link[];
    skills: {
        pageTitle: string;
        proficiencyGuide: string;
        proficiencies: Proficiency[];
        table: {
            header: {
                language: string;
                framework: string;
                database: string;
                server: string;
                cloud: string;
                os: string;
                misc: string;
            };
            columns: {
                proficiency: string;
                years: string;
                deliverables: string;
            };
            rows: {
                languages: Skill[];
                frameworks: Skill[];
                databases: Skill[];
                servers: Skill[];
                clouds: Skill[];
                os: Skill[];
                misc: Skill[];
            };
        };
    };
    resume: {
        pageTitle: string;
        education: {
            header: string;
            rows: Education[];
        };
        experience: {
            header: {
                intern: string;
                note: string;
            };
            leftRows: {
                position: string;
                arrangement: string;
                technologies: string;
                period: string;
            };
            bulletPoints: {
                description: string;
                tasks: string;
                achievements: string;
            };
            interns: Work[];
        };
    };
    projects: {
        web: Project[];
        cli: Project[];
    };
}
