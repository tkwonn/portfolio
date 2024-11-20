import { Skill } from '@/type/Skill';

export const languages: readonly Skill[] = [
    {
        name: 'HTML/CSS',
        years: '3.5 yrs',
        proficiency: [
            'Able to turn UI/UX design wireframes into user-friendly layouts using Semantic HTML and CSS libraries.',
        ]
    },
    {
        name: 'Type/JavaScript',
        years: '3 yrs',
        proficiency: [
            '- Has experience with Web APIs such as DOM, Fetch, Web Storage, and Web Socket API.',
        ]
    },
    {
        name: 'PHP',
        years: '3 yrs',
        proficiency: [
            '- Able to perform database operations using MySQLi.',
            '- Able to implement security measures to prevent vulnerabilities like SQL injection, OS command injection, and XSS.',
            '- Can write tests using PHPUnit.'
        ]
    },
    {
        name: 'Java',
        years: '3 yrs',
        proficiency: [
            '- Has experience developing applications using Android Studio with Kotlin.'
        ]
    },
    {
        name: 'Vue.js',
        years: '2.5 yrs',
        proficiency: [
            '- Has experience developing SPAs using Vue Router and Vuex.',
            '- Has experience integrating applications with server-side frameworks like Laravel and Django.'
        ]
    },
    {
        name: 'React',
        years: '2.5 yrs',
        proficiency: [
            '- Can manage state using Context API and Redux.',
            '- Can create reusable custom hooks.',
        ]
    },
    {
        name: 'Django',
        years: '~ 1 yr',
        proficiency: [
            '- Can develop Web applications based on the MVT architecture.',
            '- Can create Web APIs using Django REST framework and JWT.',
            '- Able to perform database operations using PostgreSQL.',
        ]
    },
    {
        name: 'Laravel',
        years: '~ 1 yr',
        proficiency: [
            '- Can develop Web applications based on the MVC architecture.',
            '- Able to perform database operations using Eloquent ORM.',
        ]
    },
    {
        name: 'Go',
        years: '~ 1 yr',
        proficiency: [
            '- Has experience developing Web APIs using the net/http package and Echo Framework.',
            '- Can create tests using the testing package.'
        ]
    },
] as const;

export const databases: readonly Skill[] = [
    {
        name: 'MySQL',
        years: '2 yrs',
        proficiency: [
            '- Can write basic DDL/DML, aggregate functions, GROUP BY, HAVING, JOIN, etc.',
            '- Able to create ER diagrams and design normalized databases.',
            '- Can create migration files and manage database versions.',
        ]
    },
    {
        name: 'Cloud Firestore',
        years: '2 yrs',
        proficiency: [
            'Can perform CRUD operations on data by referring to the official documentation.',
        ]
    },
    // {
    //     name: 'memcached',
    //     years: '2 yrs',
    //     proficiency: [
    //         'Can perform CRUD operations on data by referring to the official documentation.',
    //     ]
    // },
] as const;

export const misc: readonly Skill[] = [
    {
        name: 'Git',
        years: '3 yrs',
        proficiency: [
            '- Can use essential commands for version control, branching, and managing changes in local and remote repositories.',
            '- Has experience creating issues, pull requests, and conducting code reviews in team collaboration.',
        ]
    },
    {
        name: 'GitHub Actions',
        years: '~ 1 yr',
        proficiency: [
            '- Can set up CI pipelines to run tests and static analysis.',
            '- Can deploy applications to cloud services using OpenID Connect.',
        ]
    },
    {
        name: 'Linux',
        years: '2 yrs',
        proficiency: [
            'Can use basic Unix commands, create shell scripts, set file permissions, etc. using Ubuntu.',
        ]
    },
    {
        name: 'Nginx',
        years: '~ 1 yr',
        proficiency: [
            '- Understands basic syntax such as directives and contexts, and can edit configuration files to set up reverse proxy, SSL certificates, and security headers.',
            '- Able to configure connections to web applications using PHP-FPM and TCP sockets.'
        ]
    },
    {
        name: 'AWS',
        years: '~ 1 yr',
        proficiency: [
            // 'VPC: ',
            'EC2: Can set up Nginx servers and allocate Elastic IPs.',
            // 'S3: ',
            // 'RDS: ',
            'IAM: Can set up roles and custom policies to control access.',
        ]
    },
    // {
    //     name: 'Docker',
    //     years: '~ 1 yrs',
    //     proficiency: [
    //         '- Dockerfileを作成して、イメージをビルドすることができる->best practicesを参考に?。',
    //         '- Docker composeを使用して、複数のコンテナを管理することができる。',
    //         '- 複数の環境（開発、ステージング、本番）でコンテナをデプロイすることができる(?)',
    //     ]
    // },
] as const;
