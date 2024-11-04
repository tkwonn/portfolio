import { Skill } from '@/type/Skill';

export const languages: readonly Skill[] = [
    {
        name: 'HTML/CSS',
        years: '3.5 yrs',
        proficiency: [
            'Able to turn UI/UX design wireframes into accessible, user-friendly layouts using Semantic HTML and CSS libraries.',
        ]
    },
    {
        name: 'Type/JavaScript',
        years: '3 yrs',
        proficiency: [
            'Understands TypeScript\'s core features, including strict typing, generics, and type guards',
            'Applies best practices for type safety without relying on any type.',
            'Familiar with asynchronous programming patterns, such as Promises and async/await.',
        ]
    },
    {
        name: 'PHP',
        years: '3 yrs',
        proficiency: []
    },
    {
        name: 'Java',
        years: '3 yrs',
        proficiency: []
    },
    {
        name: 'Vue.js',
        years: '2.5 yrs',
        proficiency: [
            'SPAの構築に必要なルーティング管理、Vuexによる状態管理、ライフサイクルフックを理解してアプリを開発できる。',
        ]
    },
    {
        name: 'React',
        years: '2.5 yrs',
        proficiency: [
            'ビューとロジックの分離、Context APIやReduxによる状態管理、Jestによるテストを用いて開発できる。フレームワークではNext.jsを使用',
        ]
    },
    {
        name: 'Django',
        years: '1 yrs',
        proficiency: [
            'Django REST framework + JWTを使用したWeb APIの作成、PostgreSQLを使用したモデルの作成とデータベース操作を行うことができる。',
        ]
    },
    {
        name: 'Laravel',
        years: '~ 1 yrs',
        proficiency: [
            'Django REST framework + JWTを使用したWeb APIの作成、PostgreSQLを使用したモデルの作成とデータベース操作を行うことができる。',
        ]
    },
    {
        name: 'Go',
        years: '~ 1 yrs',
        proficiency: [
            'Django REST framework + JWTを使用したWeb APIの作成、PostgreSQLを使用したモデルの作成とデータベース操作を行うことができる。',
        ]
    },
] as const;

export const databases: readonly Skill[] = [
    {
        name: 'MySQL',
        years: '2 yrs',
        proficiency: [
            '基礎的なDDL・DML、集計関数、GROUP BY、HAVING、JOINなどが書ける。',
        ]
    },
    {
        name: 'Cloud Firestore',
        years: '2 yrs',
        proficiency: [
            'リファレンスを参照しながら、データのCRUD操作を行い、階層データ構造によるデータの管理ができる。',
        ]
    },
] as const;

export const misc: readonly Skill[] = [
    {
        name: 'Git',
        years: '3 yrs',
        proficiency: [
            'バージョン管理の基本操作（コミット、ブランチ作成、マージ、リベース）、チームでのコラボレーション（Issue作成、PR、コードレビュー）などが行える。',
        ]
    },
    {
        name: 'Linux',
        years: '2 yrs',
        proficiency: [
            'Ubuntuを使用して、Unixの基礎コマンド、シェルスクリプトの作成、ファイルパーミッション設定などができる。',
        ]
    },
    {
        name: 'Nginx',
        years: '~ 1 yrs',
        proficiency: [
            'ウェブサーバを立ち上げ、リバースプロキシの設定、SSL証明書の設定ができる。',
        ]
    },
    {
        name: 'Docker',
        years: '~ 1 yrs',
        proficiency: [
            'ウェブサーバを立ち上げ、リバースプロキシの設定、SSL証明書の設定ができる。',
        ]
    },
    {
        name: 'AWS',
        years: '~ 1 yrs',
        proficiency: [
            'クラウドVMを作成して、SSHで繋いで、アプリをデプロイすることができる。Cloud Storageの使用経験あり。',
        ]
    },
] as const;
