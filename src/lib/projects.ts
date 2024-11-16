import plantuml from '../../public/img/plantuml.png';
import video from '../../public/img/video.png';
import portfolio from '../../public/img/portfolio.png';
import sketch from '../../public/img/sketch.png';
import connect4 from '../../public/img/connect4.png';
import clickEmpire from '../../public/img/click-empire.png';

export const projects = [
    // {
    //     image: video,
    //     title: 'MyFitnessTracker',
    //     description:
    //         'FFMPEGライブラリを活用し、ユーザーがアップロードした動画を圧縮、変換、編集できるデスクトップアプリを開発しました。OSにフルアクセス可能なNode.js環境を提供するElectronのメインプロセスとHTMLのDOMにアクセス可能なレンダラープロセス間の通信によって、効率的なイベント処理を実現しています。',
    //     tags: ['TypeScript', 'Laravel', 'Tailwind CSS', 'Amazon EC2', 'Amazon S3', 'Amazon RDS'],
    //     githubUrl: 'https://github.com/tkwonn/video-compressor',
    //     appUrl: 'https://github.com/tkwonn/video-compressor/releases',
    // },
    // {
    //     image: video,
    //     title: 'Text Snippets',
    //     description:
    //         'FFMPEGライブラリを活用し、ユーザーがアップロードした動画を圧縮、変換、編集できるデスクトップアプリを開発しました。OSにフルアクセス可能なNode.js環境を提供するElectronのメインプロセスとHTMLのDOMにアクセス可能なレンダラープロセス間の通信によって、効率的なイベント処理を実現しています。',
    //     tags: ['TypeScript', 'PHP', 'TailwindCSS', 'Amazon EC2', 'Amazon RDS'],
    //     githubUrl: 'https://github.com/tkwonn/video-compressor',
    //     appUrl: 'https://github.com/tkwonn/video-compressor/releases',
    // },
    {
        image: plantuml,
        title: 'PlantUML',
        description:
            'A web tool for software engineers to practice creating UML diagrams like sequence and class diagrams using PlantUML syntax. Key features include a problem collection for UML practice, interactive UML diagram creation, and options to download completed diagrams. For additional support, cheat sheets with example UML diagrams and source code are available as guidance.',
        tags: ['JavaScript', 'PHP', 'Amazon EC2'],
        githubUrl: 'https://github.com/tkwonn/plantuml',
        appUrl: 'https://plantuml.taesokkwon.com/',
    },
    // {
    //     image: video,
    //     title: 'Email Verification System',
    //     description:
    //         'FFMPEGライブラリを活用し、ユーザーがアップロードした動画を圧縮、変換、編集できるデスクトップアプリを開発しました。OSにフルアクセス可能なNode.js環境を提供するElectronのメインプロセスとHTMLのDOMにアクセス可能なレンダラープロセス間の通信によって、効率的なイベント処理を実現しています。',
    //     tags: ['TypeScript', 'PHP', 'TailwindCSS', 'Amazon EC2'],
    //     githubUrl: 'https://github.com/tkwonn/video-compressor',
    //     appUrl: 'https://github.com/tkwonn/video-compressor/releases',
    // },
    {
        image: video,
        title: 'Video Compressor',
        description:
            'A desktop application that lets users compress, convert, and edit videos with the FFMPEG library. Built with Electron, it facilitates efficient event handling by linking the main process, which accesses the OS via Node.js, with the renderer process, which manages the HTML DOM.',
        tags: ['TypeScript', 'React', 'Tailwind CSS', 'Electron'],
        githubUrl: 'https://github.com/tkwonn/video-compressor',
        appUrl: 'https://github.com/tkwonn/video-compressor/releases',
    },
    {
        image: portfolio,
        title: 'Portfolio Website',
        description:
            'Building my portfolio website gave me hands-on experience with domain setup, configuring a web server, and deploying on a cloud services. Next.js was used for server-side rendering, and Tailwind CSS for responsive design(?).',
        tags: [
            'TypeScript',
            'Next.js',
            'Tailwind CSS',
            'Amazon EC2',
        ],
        githubUrl: 'https://github.com/tkwonn/portfolio',
        appUrl: '/',
    },
    {
        image: sketch,
        title: 'Etch A Sketch',
        description:
            'Etch A Sketch is a web-based version of the classic Etch A Sketch drawing toy. Using Konva.js for canvas functionality, it allows users to adjust line color and thickness and share their creations with friends. The application includes a secure Web API built with the Django REST Framework, using JWT.',
        tags: ['Vue.js', 'Django', 'PostgreSQL'],
        githubUrl: 'https://github.com/Recursion-Group-K/sketch',
        appUrl: 'https://sketch-frontend-d11d98fe289b.herokuapp.com/',
    },
    {
        image: connect4,
        title: 'Connect 4',
        description:
            'Connect 4 is a turn-based game where two players take turns dropping colored balls into a grid, competing to align four balls vertically, horizontally, or diagonally. I implemented an AI opponent feature using the Monte Carlo Tree Search algorithm and managed the application state using React\'s Context API.',
        tags: ['HTML5', 'CSS3', 'React'],
        githubUrl: 'https://github.com/TeamE-React/connect-4',
        appUrl: 'https://teame-connect4.vercel.app/',
    },
    {
        image: clickEmpire,
        title: 'Clicker Empire Game',
        description:
            'For my first individual project, I built a browser application inspired by Cookie Clicker, utilizing JavaScript, the DOM API, and Local Storage. This project helped me deepen my understanding of browser rendering, create interactive user experiences, and learn to store data directly in the browser.',
        tags: ['HTML5', 'CSS3', 'JavaScript'],
        githubUrl: 'https://github.com/tkwonn/clicker-empire-game',
        appUrl: 'https://clicker-empire-game-five.vercel.app/',
    },
] as const;
