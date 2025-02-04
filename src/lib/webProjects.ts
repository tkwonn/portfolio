import { Project } from '@/type';
import clickEmpire from '../../public/assets/img/click-empire.png';
import connect4 from '../../public/assets/img/connect4.png';
import imgdock from '../../public/assets/img/imgdock.png';
import plantuml from '../../public/assets/img/plantuml.png';
import portfolio from '../../public/assets/img/portfolio.png';
import sketch from '../../public/assets/img/sketch.png';
import snippet from '../../public/assets/img/snippet.png';
import video from '../../public/assets/img/video.png';

export const projects = [
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
        tags: ['JavaScript', 'PHP', 'MySQL', 'Amazon EC2', 'Amazon RDS'],
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
    {
        image: sketch,
        title: 'Etch A Sketch',
        description:
            'A drawing app inspired by the classic Etch A Sketch toy. Uses Konva.js for canvas drawing and supports line style customization. User sketches are stored in Cloudinary while user profiles and drawing metadata are persisted in PostgreSQL. Backend uses Django REST API with JWT authentication.',
        tags: ['Vue.js', 'Django', 'PostgreSQL'],
        githubUrl: 'https://github.com/Recursion-Group-K/sketch',
        appUrl: 'https://sketch-frontend-d11d98fe289b.herokuapp.com/',
    },
    {
        image: connect4,
        title: 'Connect 4',
        description:
            'A turn-based game where two players compete to align four balls vertically, horizontally, or diagonally. Implements an AI opponent using Monte Carlo Tree Search algorithm and manages state with React Context API.',
        tags: ['HTML5', 'CSS3', 'React'],
        githubUrl: 'https://github.com/TeamE-React/connect-4',
        appUrl: 'https://teame-connect4.vercel.app/',
    },
    {
        image: clickEmpire,
        title: 'Clicker Empire Game',
        description:
            'Cookie Clicker-inspired browser game using JavaScript and DOM manipulation. Key features include an interactive gameplay and local storage for saving progress.',
        tags: ['HTML5', 'CSS3', 'JavaScript'],
        githubUrl: 'https://github.com/tkwonn/clicker-empire-game',
        appUrl: 'https://clicker-empire-game-five.vercel.app/',
    },
] as const satisfies Project[];
