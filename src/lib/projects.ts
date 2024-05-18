import portfolio from "../../public/img/portfolio.png";
import connect4 from "../../public/img/connect4.png";
import clickEmpire from "../../public/img/clickempire.png";
import taskManagement from "../../public/img/task-management.png";

export const projectsData = [
    {
      imageUrl: portfolio,
      title: "Portfolio Website",
      description:
        "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
      tags: ["NGINX", "AWS EC2", "TypeScript", "React", "Next.js", "Tailwind CSS"],
      githubUrl: '',
      liveUrl: '',
    },
    {
      imageUrl: connect4,
      title: "Video Compressor",
      description:
        "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
      tags: ["TypeScript", "React", "Tailwind CSS", "ffmpeg"],
      githubUrl: '',
      liveUrl: '',
    },
    {
      imageUrl: taskManagement,
      title: "Etch A Sketch",
      description:
        "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
      tags: ["Vue.js", "Django", "MySQL"],
      githubUrl: 'https://github.com/Recursion-Group-K/sketch',
      liveUrl: '',
    },
    {
      imageUrl: connect4,
      title: "Connect 4",
      description:
        "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
      tags: ["React", "Next.js", "Context API"],
      githubUrl: 'https://github.com/TeamE-React/connect-4',
      liveUrl: 'https://teame-connect4.vercel.app/',
    },
    {
      imageUrl: taskManagement,
      title: "Task Mangement App",
      description:
        "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
      tags: ["Vue.js", "Vuex"],
      githubUrl: 'https://github.com/tkwonn/task-management-app',
      liveUrl: 'https://task-management-app-snowy.vercel.app/',
    },
    {
      imageUrl: clickEmpire,
      title: "Clicker Empire Game",
      description:
        "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
      tags: ["HTML5", "CSS3", "JavaScript"],
      githubUrl: 'https://github.com/tkwonn/Clicker_Empire_Game',
      liveUrl: 'https://clicker-empire-game-five.vercel.app/',
    },
  ] as const;