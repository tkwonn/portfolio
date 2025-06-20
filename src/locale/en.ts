import { TranslationType } from '@/type';
import base64 from '../../public/assets/img/base64.png';
import imgdock from '../../public/assets/img/imgdock.png';
import ping from '../../public/assets/img/ping.png';
import plantuml from '../../public/assets/img/plantuml.png';
import portfolio from '../../public/assets/img/portfolio.png';
import rpc from '../../public/assets/img/rpc.png';
import smallsh from '../../public/assets/img/smallsh.png';
import snippet from '../../public/assets/img/snippet.png';
import traceroute from '../../public/assets/img/traceroute.png';
import tree from '../../public/assets/img/tree.png';
import video from '../../public/assets/img/video.png';

export const en = {
    downloadText: 'View PDF',
    links: [
        {
            name: 'Home',
            path: '/en',
        },
        {
            name: 'Resume',
            path: '/en/resume',
        },
        {
            name: 'Skills',
            path: '/en/skills',
        },
        {
            name: 'Projects',
            path: '/en/projects/web',
        },
    ],
    skills: {
        pageTitle: 'Skills',
        proficiencyGuide: 'Proficiency Criteria',
        proficiencies: [
            {
                level: 5,
                description:
                    'Capable of performing advanced tasks and configurations independently. Can solve complex problems. Able to provide guidance and advice to junior colleagues.',
            },
            {
                level: 4,
                description:
                    'Able to handle medium-scale tasks and problem-solving. Can try new features and configurations by referring to documentation.',
            },
            {
                level: 3,
                description:
                    'Can complete basic tasks independently. Able to handle common problems without assistance. Understands the fundamentals and can apply them to a certain extent.',
            },
            {
                level: 2,
                description:
                    'Understands basic operations and settings, and can perform simple tasks, but requires support for complex tasks.',
            },
            {
                level: 1,
                description:
                    'Has some exposure to the technology. Can perform basic operations by referring to tutorials.',
            },
        ],
        table: {
            header: {
                language: 'Programming Languages',
                framework: 'Frameworks / Libraries',
                database: 'Databases',
                server: 'Server / Middleware',
                cloud: 'Cloud Services / Hosting',
                os: 'Operating Systems',
                misc: 'Miscellaneous',
            },
            columns: {
                proficiency: 'Proficiency',
                years: 'Exp Years / Months',
                deliverables: 'Projects / Outputs',
            },
            rows: {
                languages: [
                    {
                        name: 'HTML',
                        proficiency: 5,
                        years: '3y',
                        output: [],
                    },
                    {
                        name: 'CSS',
                        proficiency: 4,
                        years: '3y',
                        output: [],
                    },
                    {
                        name: 'JavaScript',
                        proficiency: 5,
                        years: '3y',
                        output: [],
                    },
                    {
                        name: 'TypeScript',
                        proficiency: 4,
                        years: '2y',
                        output: [],
                    },
                    {
                        name: 'GAS',
                        proficiency: 3,
                        years: '1m',
                        output: [],
                    },
                    {
                        name: 'Python',
                        proficiency: 4,
                        years: '3y',
                        output: [],
                    },
                    {
                        name: 'Ruby',
                        proficiency: 3,
                        years: '3m',
                        output: [],
                    },
                    {
                        name: 'PHP',
                        proficiency: 5,
                        years: '3y',
                        output: [],
                    },
                    {
                        name: 'Java',
                        proficiency: 3,
                        years: '2y',
                        output: [],
                    },
                    {
                        name: 'C#',
                        proficiency: 3,
                        years: '6m',
                        output: [],
                    },
                    {
                        name: 'Kotlin',
                        proficiency: 1,
                        years: '3m',
                        output: [],
                    },
                    {
                        name: 'C',
                        proficiency: 3,
                        years: '2y',
                        output: [],
                    },
                    {
                        name: 'C++',
                        proficiency: 2,
                        years: '6m',
                        output: [],
                    },
                    {
                        name: 'Golang',
                        proficiency: 3,
                        years: '8m',
                        output: [],
                    },
                    {
                        name: 'SQL',
                        proficiency: 3,
                        years: '2y',
                        output: [],
                    },
                ],
                frameworks: [
                    {
                        name: 'Bootstrap',
                        proficiency: 4,
                        years: '2y',
                        output: [],
                    },
                    {
                        name: 'TailwindCSS',
                        proficiency: 4,
                        years: '2y',
                        output: [],
                    },
                    {
                        name: 'React',
                        proficiency: 4,
                        years: '2y',
                        output: [],
                    },
                    {
                        name: 'Redux',
                        proficiency: 4,
                        years: '1y',
                        output: [],
                    },
                    {
                        name: 'Next.js',
                        proficiency: 3,
                        years: '1y',
                        output: [],
                    },
                    {
                        name: 'Vue.js',
                        proficiency: 4,
                        years: '2y',
                        output: [],
                    },
                    {
                        name: 'Electron',
                        proficiency: 3,
                        years: '2m',
                        output: [],
                    },
                    {
                        name: 'Laravel',
                        proficiency: 2,
                        years: '3m',
                        output: [],
                    },
                    {
                        name: 'Django',
                        proficiency: 3,
                        years: '5m',
                        output: [],
                    },
                    {
                        name: 'Ruby on Rails',
                        proficiency: 2,
                        years: '3m',
                        output: [],
                    },
                ],
                databases: [
                    {
                        name: 'MySQL',
                        proficiency: 3,
                        years: '2y',
                        output: [],
                    },
                    {
                        name: 'PostgreSQL',
                        proficiency: 2,
                        years: '3m',
                        output: [],
                    },
                    {
                        name: 'SQLite',
                        proficiency: 1,
                        years: '1m',
                        output: [],
                    },
                    {
                        name: 'Firestore',
                        proficiency: 3,
                        years: '1y',
                        output: [],
                    },
                    {
                        name: 'MongoDB',
                        proficiency: 1,
                        years: '3m',
                        output: [],
                    },
                    {
                        name: 'Memcached',
                        proficiency: 2,
                        years: '1m',
                        output: [],
                    },
                ],
                servers: [
                    {
                        name: 'Nginx',
                        proficiency: 4,
                        years: '8m',
                        output: [],
                    },
                    {
                        name: 'Apache',
                        proficiency: 3,
                        years: '1m',
                        output: [],
                    },
                ],
                clouds: [
                    {
                        name: 'AWS',
                        proficiency: 3,
                        years: '8m',
                        output: [],
                    },
                    {
                        name: 'GCP',
                        proficiency: 2,
                        years: '3m',
                        output: [],
                    },
                    {
                        name: 'Firebase',
                        proficiency: 3,
                        years: '6m',
                        output: [],
                    },
                    {
                        name: 'Vercel',
                        proficiency: 4,
                        years: '1y',
                        output: [],
                    },
                    {
                        name: 'Heroku',
                        proficiency: 4,
                        years: '6m',
                        output: [],
                    },
                    {
                        name: 'Cloudflare Pages',
                        proficiency: 2,
                        years: '1m',
                        output: [],
                    },
                ],
                os: [
                    {
                        name: 'Linux - Ubuntu',
                        proficiency: 3,
                        years: '3y',
                        output: [],
                    },
                    {
                        name: 'Windows',
                        proficiency: 2,
                        years: '6m',
                        output: [],
                    },
                    {
                        name: 'macOS',
                        proficiency: 4,
                        years: '4y',
                        output: [],
                    },
                ],
                misc: [
                    {
                        name: 'Git / GitHub',
                        proficiency: 4,
                        years: '3y',
                        output: [],
                    },
                    {
                        name: 'Docker',
                        proficiency: 3,
                        years: '8m',
                        output: [],
                    },
                    {
                        name: 'DBeaver',
                        proficiency: 4,
                        years: '1y',
                        output: [],
                    },
                    {
                        name: 'VSCode',
                        proficiency: 5,
                        years: '1y',
                        output: [],
                    },
                    {
                        name: 'IntelliJ IDEA',
                        proficiency: 4,
                        years: '3m',
                        output: [],
                    },
                    {
                        name: 'NeoVim',
                        proficiency: 3,
                        years: '2y',
                        output: [],
                    },
                    {
                        name: 'Postman',
                        proficiency: 4,
                        years: '2y',
                        output: [],
                    },
                    {
                        name: 'Android Studio',
                        proficiency: 1,
                        years: '3m',
                        output: [],
                    },
                ],
            },
        },
    },
    resume: {
        pageTitle: 'Resume',
        education: {
            header: 'Education',
            rows: [
                {
                    date: '2022.1 - 2024.6',
                    title: 'Oregon State University, B.S, Computer Science',
                },
                {
                    date: '2020.4 - 2021.12',
                    title: 'Lane Community College, A.S, Computer Science',
                },
                {
                    title: 'Teikyo University, BEcon, Business Administration (Recommendation as rugby athlete)',
                    date: '2016.4 - 2020.3',
                },
            ],
        },
    },
    projects: {
        web: [
            {
                image: imgdock,
                title: 'Online Image Hosting Service',
                description:
                    'An Imgur-like application that enables anonymous image sharing without user accounts. Key features include an image uploading with tags, unique URL generation, category-based browsing, multiple view modes (grid/waterfall), etc.',
                tags: [
                    'TypeScript',
                    'PHP',
                    'memcached',
                    'Docker',
                    'Amazon EC2',
                    'Amazon RDS',
                    'Amazon S3',
                ],
                githubUrl: 'https://github.com/tkwonn/imgdock',
                appUrl: 'https://imgdock.com/',
            },
            {
                image: snippet,
                title: 'Text Snippet Sharing Service',
                description:
                    'A Pastebin-like application that enables instant sharing of text and code snippets. Key features include a syntax highlighting for multiple programming languages, customizable expiration times, and public/unlisted sharing options.',
                tags: ['JavaScript', 'PHP', 'Amazon EC2', 'Amazon RDS'],
                githubUrl: 'https://github.com/tkwonn/text-snippet',
                appUrl: 'https://text-snippet.taesokkwon.com/',
            },
            {
                image: plantuml,
                title: 'PlantUML Server',
                description:
                    'A web tool for practicing and learning UML diagram creation with PlantUML syntax. Key features include a problem collection for UML practice, interactive UML diagram creation, and options to download diagrams. Cheat sheets with example UML diagrams and source code are also provided.',
                tags: ['JavaScript', 'PHP', 'Amazon EC2'],
                githubUrl: 'https://github.com/tkwonn/plantuml',
                appUrl: 'https://plantuml.taesokkwon.com/',
            },
            {
                image: portfolio,
                title: 'Portfolio Website',
                description:
                    "A personal portfolio website built with Next.js Static Export for static content delivery. Deployed on AWS EC2 with Nginx reverse proxy, automated deployments via GitHub Actions, and HTTPS encryption using Let's Encrypt.",
                tags: ['TypeScript', 'Next.js', 'Tailwind CSS', 'Amazon EC2'],
                githubUrl: 'https://github.com/tkwonn/portfolio',
                appUrl: '/',
            },
            {
                image: video,
                title: 'Video Compressor',
                description:
                    'A desktop application that allows users compress and convert videos with the ffmpeg library. Built with Electron, it facilitates efficient event handling by linking the main process, which accesses the OS via Node.js, with the renderer process, which manages the HTML DOM.',
                tags: ['Electron', 'TypeScript', 'React', 'Tailwind CSS'],
                githubUrl: 'https://github.com/tkwonn/video-compressor',
                appUrl: 'https://github.com/tkwonn/video-compressor/releases',
            },
        ],
        cli: [
            {
                image: smallsh,
                title: 'small shell',
                description:
                    'A lightweight shell implementation in C that implements a subset of features of bash.',
                tags: ['C', 'Makefile', 'Process'],
                githubUrl: 'https://github.com/tkwonn/smallsh',
                appUrl: 'https://asciinema.org/a/5u1pndjgIQ0e1CbZdyldZPLrP',
            },
            {
                image: tree,
                title: 'tree',
                description:
                    'A command-line tool similar to the GNU tree utility, displaying directory structures in a tree-like format.',
                tags: ['C', 'Makefile', 'File I/O'],
                githubUrl: 'https://github.com/tkwonn/tree',
                appUrl: 'https://asciinema.org/a/4NXUfSTGgVhEAULL0s0thOAiA',
            },
            {
                image: traceroute,
                title: 'traceroute',
                description:
                    'A tool for tracking a path of network packets and measuring latency across each hop.',
                tags: ['Python', 'Socket', 'ICMP'],
                githubUrl: 'https://github.com/tkwonn/traceroute',
                appUrl: 'https://asciinema.org/a/oBjkDptRGJcYiEp8sMAtmovxR',
            },
            {
                image: ping,
                title: 'ping',
                description:
                    'A tool for sending echo requests to test network connectivity and measure response times.',
                tags: ['Python', 'Socket', 'ICMP'],
                githubUrl: 'https://github.com/tkwonn/ping',
                appUrl: 'https://asciinema.org/a/jl8X363T1zhI2xUc6i9NBKKLS',
            },
            {
                image: rpc,
                title: 'remote procedure call',
                description:
                    'A local RPC system that enables processes to call procedures on other process through Unix domain sockets.',
                tags: ['Python', 'JavaScript', 'Socket'],
                githubUrl: 'https://github.com/tkwonn/remote-procedure-call',
                appUrl: 'https://asciinema.org/a/P71AG0MTjQ3LIj7oJfv55jJvq',
            },
            {
                image: base64,
                title: 'base64',
                description:
                    'A base64 encoder/decoder that enables safe transmission of binary data through text-based protocols.',
                tags: ['C', 'Makefile', 'File I/O'],
                githubUrl: 'https://github.com/tkwonn/base64',
                appUrl: 'https://asciinema.org/a/rdYjEroQStpuiQc9iiFbx5tI0',
            },
        ],
    },
} as const satisfies TranslationType;
