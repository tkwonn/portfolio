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
            '-  Has experience with Web APIs such as DOM, Fetch, Web Storage, and Web Socket API.',
            '- Understands TypeScript\'s core features, including strict typing, generics, and type guards (?)',
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
            '- Understands OOP concepts, including inheritance, polymorphism, and encapsulation(?).',
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
        name: 'Google Cloud Firestore / MongoDB',
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
            '- Can use necessary commands for local development and syncing with remote repositories(?).',
            '- Has experience creating issues, pull requests, and conducting code reviews in team collaboration.',
            '- Able to set up CI/CD using GitHub Actions(?).'
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
        years: '~ 1 yrs',
        proficiency: [
            '- Understands basic syntax such as directives and contexts, and can edit configuration files to set up reverse proxy, SSL certificates, and security headers.',
            '- Able to configure connections to web applications using PHP-FPM and TCP sockets.'
        ]
    },
    {
        name: 'AWS',
        years: '~ 1 yrs',
        proficiency: [
            'Can create EC2 instances, configure S3 buckets, set up RDS, and configure IAM roles.',
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
