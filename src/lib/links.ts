import { Link } from '@/type';

export const links = [
    {
        name: 'Home',
        path: '/',
        description: 'My portfolio website',
    },
    {
        name: 'Resume',
        path: '/resume',
        description:
            'Overview of my skills, experiences, and education history.',
    },
    {
        name: 'Projects',
        path: '/projects/web',
        description:
            'List of my projects with summaries, live URLs, and GitHub links.',
    },
] as const satisfies Link[];
