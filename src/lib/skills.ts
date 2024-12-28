import { Skill } from '@/type';

export const languages = [
    {
        name: 'HTML/CSS',
        years: '3.5 yrs',
        proficiency: [
            'Able to turn UI/UX design wireframes into user-friendly layouts using Semantic HTML and CSS libraries (Bootstrap, Tailwind CSS, Emotion, and CSS Modules).',
        ],
    },
    {
        name: 'Type/JavaScript',
        years: '3 yrs',
        proficiency: [
            '- Has experience using Web APIs such as DOM, Fetch, Web Storage, and Web Socket.',
            '- Understands the concepts of Structural typing (Type system) and can avoid using type assertions.',
        ],
    },
    {
        name: 'Python',
        years: '2 yrs',
        proficiency: [''],
    },
    {
        name: 'PHP',
        years: '2 yrs',
        proficiency: [
            '- Able to perform database operations using MySQLi.',
            '- Able to implement security measures to prevent vulnerabilities like SQL injection, OS command injection, and XSS.',
            '- Can write tests using PHPUnit.',
        ],
    },
    {
        name: 'C',
        years: '2 yrs',
        proficiency: [''],
    },
    {
        name: 'Go',
        years: '~ 1 yr',
        proficiency: [
            '- Has experience developing Web APIs using the net/http package and Echo Framework.',
            '- Can create tests using the testing package.',
            '- Understands the concepts of Structural typing (Type system).',
        ],
    },
    {
        name: 'Java',
        years: '2 yrs',
        proficiency: [''],
    },
    {
        name: 'Vue.js',
        years: '2 yrs',
        proficiency: [
            '- Has experience developing SPAs using Vue Router and Vuex.',
            '- Has experience integrating applications with server-side frameworks like Laravel and Django.',
        ],
    },
    {
        name: 'React',
        years: '2 yrs',
        proficiency: [
            '- Can manage state using Context API and Redux.',
            '- Can create reusable custom hooks.',
        ],
    },
    {
        name: 'Django',
        years: '~ 1 yr',
        proficiency: [
            '- Can develop Web applications based on the MVT architecture.',
            '- Can create Web APIs using Django REST framework and JWT.',
            '- Able to perform database operations using PostgreSQL.',
        ],
    },
    {
        name: 'Laravel',
        years: '~ 1 yr',
        proficiency: [
            '- Can develop Web applications based on the MVC architecture.',
            '- Able to perform database operations using Eloquent ORM.',
        ],
    },
] as const satisfies Skill[];

export const databases = [
    {
        name: 'MySQL',
        years: '2 yrs',
        proficiency: [
            '- Can write basic DDL/DML, aggregate functions, GROUP BY, HAVING, JOIN, etc.',
            '- Able to create ER diagrams and design normalized databases.',
            '- Can create migration files and manage database versions.',
        ],
    },
    {
        name: 'Cloud Firestore',
        years: '2 yrs',
        proficiency: [
            'Can perform CRUD operations on data by referring to the official documentation.',
        ],
    },
    // {
    //     name: 'memcached',
    //     years: '~ 1 yr',
    //     proficiency: [
    //         '',
    //     ]
    // },
] as const satisfies Skill[];

export const misc = [
    {
        name: 'Linux',
        years: '2 yrs',
        proficiency: [
            '- Can use basic shell commands, create shell scripts, and set file permissions (Ubuntu).',
            '- Has experience using Linux system call APIs and standard C libraries related to File I/O, Process, and Socket.',
        ],
    },
    {
        name: 'Git',
        years: '3 yrs',
        proficiency: [
            '- Can use essential commands for version control in local and remote repositories.',
            '- Has experience creating issues, pull requests, and conducting code reviews in team collaboration.',
        ],
    },
    {
        name: 'GitHub Actions',
        years: '~ 1 yr',
        proficiency: [
            '- Can set up CI pipelines to run linter and tests.',
            '- Can deploy applications to cloud services using OpenID Connect.',
        ],
    },
    {
        name: 'Nginx',
        years: '~ 1 yr',
        proficiency: [
            '- Understands basic directives and contexts, and can edit configuration files to set up reverse proxy, SSL certificates, and security headers.',
            '- Able to configure connections to web applications using PHP-FPM and TCP sockets.',
        ],
    },
    {
        name: 'AWS',
        years: '~ 1 yr',
        proficiency: [
            // 'VPC: ',
            'EC2: Can set up Nginx & MySQL servers and allocate Elastic IPs.',
            // 'S3: ',
            // 'RDS: ',
            'IAM: Can set up roles and custom policies to control access.',
        ],
    },
    {
        name: 'Docker',
        years: '~ 1 yr',
        proficiency: [
            '- Understands the basic idea of underlying technologies such as namespaces, cgroups, and union file systems.',
            '- Can create Dockerfiles to build images and run containers.',
            '- Docker composeを使用して、複数のコンテナを管理することができる。',
            // '- 複数の環境（開発、ステージング、本番）でコンテナをデプロイすることができる',
        ],
    },
] as const satisfies Skill[];
