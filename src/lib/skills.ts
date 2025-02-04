import { Skill } from '@/type';

export const languages = [
    {
        name: 'HTML/CSS',
        years: '3.5 yrs',
        proficiency: [
            '- Developed user-friendly layouts from UI/UX design wireframes using Semantic HTML and CSS libraries (Bootstrap, Tailwind CSS, Emotion, and CSS Modules).',
        ],
    },
    {
        name: 'Type/JavaScript',
        years: '3 yrs',
        proficiency: [
            '- Utilized Web APIs such as DOM, Fetch, Web Storage, and Web Socket.',
            '- Applied Structural typing concepts to avoid type assertions and improve code quality.',
        ],
    },
    {
        name: 'Python',
        years: '2 yrs',
        proficiency: [
            '- Built CLI tools using the standard Python library and developed web applications with Django.',
        ],
    },
    {
        name: 'PHP',
        years: '2 yrs',
        proficiency: [
            '- Performed database operations using MySQLi.',
            '- Enhanced application security by preventing vulnerabilities like SQL injection, OS command injection, and XSS.',
            '- Wrote and executed tests using PHPUnit.',
        ],
    },
    {
        name: 'C',
        years: '2 yrs',
        proficiency: [
            '- Developed CLI tools leveraging standard C libraries for File I/O, Process, and Socket operations.',
        ],
    },
    {
        name: 'Go',
        years: '~ 1 yr',
        proficiency: [
            '- Built Web APIs using the net/http package and Echo Framework.',
            '- Wrote and executed tests using Go testing package.',
            '- Applied Structural typing concepts to ensure type safety.',
        ],
    },
    {
        name: 'Vue.js',
        years: '2 yrs',
        proficiency: [
            '- Developed SPAs using Vue Router and Vuex.',
            '- Integrated frontend applications with server-side frameworks like Laravel and Django.',
        ],
    },
    {
        name: 'React',
        years: '2 yrs',
        proficiency: [
            '- Managed application state using Context API and Redux.',
            '- Designed reusable custom hooks to improve code maintainability.',
        ],
    },
    {
        name: 'Django',
        years: '~ 1 yr',
        proficiency: [
            '- Built web applications following the MVT architecture.',
            '- Created Web APIs using Django REST framework and JWT.',
            '- Performed database operations with PostgreSQL.',
        ],
    },
    {
        name: 'Laravel',
        years: '~ 1 yr',
        proficiency: [
            '- Developed web applications based on the MVC architecture.',
            '- Managed database operations using Eloquent ORM.',
        ],
    },
] as const satisfies Skill[];

export const databases = [
    {
        name: 'MySQL',
        years: '2.5 yrs',
        proficiency: [
            '- Wrote and optimized DDL/DML queries, including aggregate functions, GROUP BY, HAVING, and JOIN operations.',
            '- Improved query performance by implementing appropriate indexes based on EXPLAIN analysis.',
            '- Designed ER diagrams and normalized database schemas.',
            '- Managed database versions through migration files.',
        ],
    },
    {
        name: 'Memcached',
        years: '~ 1 yr',
        proficiency: [
            '- Implemented caching mechanisms using the Memcached client library for efficient data storage and retrieval.',
        ],
    },
    {
        name: 'Cloud Firestore',
        years: '2 yrs',
        proficiency: [
            '- Performed CRUD operations on data by leveraging the official documentation.',
        ],
    },
] as const satisfies Skill[];

export const misc = [
    {
        name: 'Linux',
        years: '2 yrs',
        proficiency: [
            '- Utilized basic shell commands, created shell scripts, set up cron jobs, and managed file permissions on Ubuntu.',
            '- Employed Linux system call APIs and standard C libraries for File I/O, Process, and Socket operations.',
        ],
    },
    {
        name: 'Git',
        years: '3 yrs',
        proficiency: [
            '- Managed version control using essential Git commands for both local and remote repositories.',
            '- Collaborated with teams by creating issues, pull requests, and conducting code reviews.',
        ],
    },
    {
        name: 'GitHub Actions',
        years: '~ 1 yr',
        proficiency: [
            '- Configured CI pipelines to run linters and tests.',
            '- Deployed applications to cloud services using OpenID Connect.',
            '- Optimized workflow performance by implementing caching and artifacts for building dependencies and job outputs.',
        ],
    },
    {
        name: 'Nginx',
        years: '~ 1 yr',
        proficiency: [
            '- Edited configuration files to set up reverse proxy, SSL certificates, and security headers.',
            '- Implemented rate limiting to manage request frequency and protect server resources.',
            '- Configured connections to web applications using PHP-FPM and TCP sockets.',
        ],
    },
    {
        name: 'AWS',
        years: '~ 1 yr',
        proficiency: [
            '- Set up Nginx and MySQL servers on EC2 instances and allocated Elastic IPs.',
            '- Configured IAM roles and custom policies to manage access control.',
            '- Deployed MySQL servers on RDS within private subnets.',
            '- Managed static files using S3 and AWS SDK for PHP.',
            '- Secured private S3 content delivery through CloudFront with Origin Access Control.',
            '- Implemented secure server management using SSM Session Manager, eliminating the need for port openings and SSH key management.',
        ],
    },
    {
        name: 'Docker',
        years: '~ 1 yr',
        proficiency: [
            '- Created Dockerfiles to build images and run containers.',
            '- Managed multi-container environments using Docker Compose.',
            '- Published images to Docker Hub and deployed containers across development and production environments.',
        ],
    },
] as const satisfies Skill[];
