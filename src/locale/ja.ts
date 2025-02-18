import { TranslationType } from '@/type';
import base64 from '../../public/assets/img/base64.png';
import clickEmpire from '../../public/assets/img/click-empire.png';
import connect4 from '../../public/assets/img/connect4.png';
import imgdock from '../../public/assets/img/imgdock.png';
import ping from '../../public/assets/img/ping.png';
import plantuml from '../../public/assets/img/plantuml.png';
import portfolio from '../../public/assets/img/portfolio.png';
import rpc from '../../public/assets/img/rpc.png';
import sketch from '../../public/assets/img/sketch.png';
import smallsh from '../../public/assets/img/smallsh.png';
import snippet from '../../public/assets/img/snippet.png';
import traceroute from '../../public/assets/img/traceroute.png';
import tree from '../../public/assets/img/tree.png';
import video from '../../public/assets/img/video.png';

export const ja = {
    downloadText: 'PDFで見る',
    links: [
        {
            name: 'ホーム',
            path: '/ja',
        },
        {
            name: '履歴書',
            path: '/ja/resume',
        },
        {
            name: 'スキル',
            path: '/ja/skills',
        },
        {
            name: 'プロジェクト',
            path: '/ja/projects/web',
        },
    ],
    skills: {
        pageTitle: 'スキル',
        proficiencyGuide: '習熟度の基準',
        proficiencies: [
            {
                level: 5,
                description:
                    '高度な作業や設定が自力で可能。複雑な問題も解決できる。後進指導やアドバイスができる。',
            },
            {
                level: 4,
                description:
                    '中規模なタスクや問題解決が可能。新しい機能や設定もドキュメントを参照しながら試せる。',
            },
            {
                level: 3,
                description:
                    '基本的なタスクを1人で完遂可能。一般的な問題には自力で対応可。基本を理解し一定の応用も可能。',
            },
            {
                level: 2,
                description:
                    '基本的な操作や設定を理解しており、簡単なタスクを実行可能だが複雑な作業にはサポートが必要。',
            },
            {
                level: 1,
                description:
                    '触れたことがある程度。チュートリアルを参考にしながら基本操作を実行できる。',
            },
        ],
        table: {
            header: {
                language: 'プログラミング言語',
                framework: 'フレームワーク / ライブラリ',
                database: 'データベース',
                cloud: 'クラウドサービス / ホスティング',
                os: 'オペレーティングシステム',
                server: 'サーバー / ミドルウェア',
                misc: 'その他',
            },
            columns: {
                proficiency: '習熟度',
                years: '学習期間',
                deliverables: '成果物 / 学習',
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
                        years: '<1y',
                        output: [],
                    },
                    {
                        name: 'Python',
                        proficiency: 3,
                        years: '2y',
                        output: [],
                    },
                    {
                        name: 'Ruby',
                        proficiency: 3,
                        years: '<1y',
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
                        proficiency: 2,
                        years: '<1y',
                        output: [],
                    },
                    {
                        name: 'Kotlin',
                        proficiency: 1,
                        years: '<1y',
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
                        years: '<1y',
                        output: [],
                    },
                    {
                        name: 'Golang',
                        proficiency: 3,
                        years: '<1y',
                        output: [],
                    },
                    {
                        name: 'SQL',
                        proficiency: 3,
                        years: '2.5y',
                        output: [],
                    },
                ],
                frameworks: [
                    {
                        name: 'Bootstrap',
                        proficiency: 4,
                        years: '<1y',
                        output: [],
                    },
                    {
                        name: 'TailwindCSS',
                        proficiency: 4,
                        years: '<1y',
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
                        years: '<1y',
                        output: [],
                    },
                    {
                        name: 'Next.js',
                        proficiency: 3,
                        years: '2y',
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
                        proficiency: 2,
                        years: '<1y',
                        output: [],
                    },
                    {
                        name: 'Laravel',
                        proficiency: 2,
                        years: '<1y',
                        output: [],
                    },
                    {
                        name: 'Django',
                        proficiency: 3,
                        years: '<1y',
                        output: [],
                    },
                    {
                        name: 'Ruby on Rails',
                        proficiency: 2,
                        years: '<1y',
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
                        years: '<1y',
                        output: [],
                    },
                    {
                        name: 'Firestore',
                        proficiency: 2,
                        years: '1y',
                        output: [],
                    },
                    {
                        name: 'MongoDB',
                        proficiency: 1,
                        years: '<1y',
                        output: [],
                    },
                    {
                        name: 'SQLite',
                        proficiency: 1,
                        years: '<1y',
                        output: [],
                    },
                    {
                        name: 'Memcached',
                        proficiency: 2,
                        years: '<1y',
                        output: [],
                    },
                ],
                servers: [
                    {
                        name: 'Nginx',
                        proficiency: 3,
                        years: '<1y',
                        output: [],
                    },
                    {
                        name: 'Apache',
                        proficiency: 3,
                        years: '<1y',
                        output: [],
                    },
                ],
                clouds: [
                    {
                        name: 'AWS',
                        proficiency: 3,
                        years: '<1y',
                        output: [],
                    },
                    {
                        name: 'GCP',
                        proficiency: 2,
                        years: '<1y',
                        output: [],
                    },
                    {
                        name: 'Firebase',
                        proficiency: 3,
                        years: '<1y',
                        output: [],
                    },
                    {
                        name: 'Vercel',
                        proficiency: 4,
                        years: '<1y',
                        output: [],
                    },
                    {
                        name: 'Heroku',
                        proficiency: 4,
                        years: '<1y',
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
                        years: '<1y',
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
                        years: '<1y',
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
                        years: '<1y',
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
                        years: '<1y',
                        output: [],
                    },
                ],
            },
        },
    },
    resume: {
        pageTitle: '履歴書',
        education: {
            header: '学歴',
            rows: [
                {
                    date: '平成28年 4月',
                    title: '帝京大学経済学部経営学科　入学（スポーツ推薦・ラグビー）',
                },
                {
                    date: '令和2年  3月',
                    title: '帝京大学経済学部経営学科　卒業',
                },
                {
                    date: '令和2年  4月',
                    title: 'レーンコミュニティカレッジコンピュータサイエンス専攻　入学',
                },
                {
                    date: '令和4年  1月',
                    title: 'オレゴン州立大学コンピュータサイエンス専攻　編入学',
                },
                {
                    date: '令和6年  6月',
                    title: 'オレゴン州立大学コンピュータサイエンス専攻　卒業',
                },
            ],
        },
        experience: {
            header: {
                intern: 'インターンシップ経験',
                note: '※ 1ヶ月以上のインターンシップ経験のみを抜粋',
            },
            leftRows: {
                position: '職種',
                arrangement: '勤務形態',
                technologies: '技術スタック',
                period: '期間',
            },
            bulletPoints: {
                description: '概要',
                tasks: '担当した業務',
                achievements: '具体的な成果',
            },
            interns: [
                {
                    company: 'ロイロ株式会社',
                    position: 'バックエンドエンジニア長期インターン',
                    arrangement: '月20 ~ 35時間',
                    technologies: [
                        '言語: TypeScript, Go, Ruby',
                        'フレームワーク: React, Echo, Ruby on Rails',
                        'データベース: MySQL, Redis',
                        'その他: AWS, Docker, GitHub Actions',
                        '監視 / BI: CloudWatch, Redash',
                    ],
                    period: '2024年6月 ~ 現在',
                    description:
                        '大規模教育プラットフォーム（導入校13,000校以上、DAU 280万人）のバックエンド開発に参画。',
                    tasks: [
                        'APIの設計・実装（Go言語）',
                        '単体テストの実装',
                        'Serverlessフレームワークで構築されたLambda関数群のAWS CDKへの移行',
                        '管理画面のUI改善',
                    ],
                    achievements: [
                        'Ruby on Rails + ActiveRecordで構築されたサーバ負荷を30-40%削減することに貢献',
                        '新規実装APIにおいて、100%に近い水準のユニットテストカバレッジを実現',
                        'CloudWatch Log Insightsを活用し、Webフィルタの未分類URLを100件以上調査・検証・分類することでフィルタリング精度を向上',
                        '多言語対応ページの英訳を精査し、より適切な表現を社内に提案',
                    ],
                },
                {
                    company: 'エキサイト株式会社',
                    position: 'バックエンドエンジニアインターン（1ヶ月）',
                    arrangement: '週3日リモート',
                    technologies: [
                        'フロントエンド: Vue.js, TypeScript',
                        'バックエンド: Laravel',
                        'その他: Docker, GitHub Actions, PHPUnit',
                    ],
                    period: '2024年10月1日 ~ 2024年10月31日',
                    description:
                        '社内向け解約管理システムの新規開発プロジェクトに参画。フロントエンドからバックエンドまでの一連の開発を担当。 ',
                    tasks: [
                        '要件定義から実装までの一連の開発プロセスを経験',
                        'フロントエンド・バックエンドの実装',
                        '単体テストの実装',
                        '複雑なビジネスルールに基づくバリデーションロジックの実装',
                    ],
                    achievements: [
                        '解約手続きの半自動化により、人的承認プロセスを維持しながら工数削減による業務効率化を実現',
                        'インターン終了後、開発したシステムが本番環境で採用',
                    ],
                },
                {
                    company:
                        'オレゴン州立大学　応用システム・ソフトウェアセンター（CASS）',
                    position: 'バックエンドエンジニア長期インターン',
                    arrangement: '週15時間以上',
                    technologies: [
                        'フロントエンド: Vue.js',
                        'バックエンド: C#',
                        'その他: ActiveMQ',
                    ],
                    period: '2022年4月1日 ~ 2024年9月30日',
                    description:
                        'オレゴン州交通局（ODOT）の州全域交通管理プラットフォームの開発プロジェクトに参画。バックエンドサービス間のメッセージング統合システムの開発および管理画面の実装を担当。',
                    tasks: [
                        'C#とActiveMQを用いたメッセージングシステムの設計・実装',
                        'Vue.jsを使用した管理画面の実装',
                    ],
                    achievements: [
                        'マイクロサービス間の通信設計を構築',
                        '行政システム開発における要件定義から実装までのプロセスを経験',
                    ],
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
                    'ユーザーアカウント不要で匿名の画像共有が可能な、Imgurに類似したアプリケーション。タグ付きの画像アップロード、ユニークなURL生成、カテゴリ別閲覧、グリッドやウォーターフォールなど複数の表示モードを備えています。',
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
                    'Pastebinに似たアプリケーションで、テキストやコードスニペットを即時に共有可能。複数のプログラミング言語に対応した構文ハイライト、カスタマイズ可能な有効期限設定、公開および非公開の共有オプションを提供します。',
                tags: ['JavaScript', 'PHP', 'Amazon EC2', 'Amazon RDS'],
                githubUrl: 'https://github.com/tkwonn/text-snippet',
                appUrl: 'https://text-snippet.taesokkwon.com/',
            },
            {
                image: plantuml,
                title: 'PlantUML Server',
                description:
                    'PlantUML構文を用いたUML図作成の練習・学習ツール。UML練習用の問題集、インタラクティブなグラフ作成、グラフのダウンロード機能を備え、サンプルUML図とソースコード付きのチートシートも提供しています。',
                tags: ['JavaScript', 'PHP', 'Amazon EC2'],
                githubUrl: 'https://github.com/tkwonn/plantuml',
                appUrl: 'https://plantuml.taesokkwon.com/',
            },
            {
                image: portfolio,
                title: 'Portfolio Website',
                description:
                    'Next.js Static Exportを活用して静的コンテンツを配信する個人ポートフォリオサイト。AWS EC2上のNginxリバースプロキシ、GitHub Actionsによる自動デプロイ、Let’s Encryptを利用したHTTPS暗号化で運用されています。',
                tags: ['TypeScript', 'Next.js', 'Tailwind CSS', 'Amazon EC2'],
                githubUrl: 'https://github.com/tkwonn/portfolio',
                appUrl: '/',
            },
            {
                image: video,
                title: 'Video Compressor',
                description:
                    'ffmpegライブラリを用いて動画の圧縮・変換を行うデスクトップアプリ。Electronで構築され、Node.jsを経由してOSにアクセスするメインプロセスと、HTML DOMを管理するレンダラープロセスを連携させることで、効率的なイベント処理を実現しています。',
                tags: ['Electron', 'TypeScript', 'React', 'Tailwind CSS'],
                githubUrl: 'https://github.com/tkwonn/video-compressor',
                appUrl: 'https://github.com/tkwonn/video-compressor/releases',
            },
            {
                image: sketch,
                title: 'Etch A Sketch',
                description:
                    'お絵描きツール「Etch A Sketch」に着想を得た描画アプリ。Konva.jsを使用してキャンバス上での描画が可能で、線の表現（太さや色など）を自由に調整できます。。ユーザーのスケッチはCloudinaryに保存され、プロフィールや描画メタデータはPostgreSQLで管理。バックエンドはDjango REST APIとJWT認証を採用しています。',
                tags: ['Vue.js', 'Django', 'PostgreSQL'],
                githubUrl: 'https://github.com/Recursion-Group-K/sketch',
                appUrl: 'https://sketch-frontend-d11d98fe289b.herokuapp.com/',
            },
            {
                image: connect4,
                title: 'Connect 4',
                description:
                    '2人のプレイヤーが交互に操作し、縦・横・斜めに4つのボールを揃えるターン制ゲーム。Monte Carlo Tree SearchアルゴリズムによるAI対戦機能を実装し、React Context APIで状態管理を行っています。',
                tags: ['HTML5', 'CSS3', 'React'],
                githubUrl: 'https://github.com/TeamE-React/connect-4',
                appUrl: 'https://teame-connect4.vercel.app/',
            },
            {
                image: clickEmpire,
                title: 'Clicker Empire Game',
                description:
                    'Cookie Clickerに着想を得たブラウザゲーム。JavaScriptとDOM操作を用いてインタラクティブなゲームプレイを実現し、進捗保存にはローカルストレージを利用しています。',
                tags: ['HTML5', 'CSS3', 'JavaScript'],
                githubUrl: 'https://github.com/tkwonn/clicker-empire-game',
                appUrl: 'https://clicker-empire-game-five.vercel.app/',
            },
        ],
        cli: [
            {
                image: smallsh,
                title: 'small shell',
                description:
                    'bashの一部機能を備えた軽量版シェルを自作しました。',
                tags: ['C', 'Makefile', 'Process'],
                githubUrl: 'https://github.com/tkwonn/smallsh',
                appUrl: 'https://asciinema.org/a/5u1pndjgIQ0e1CbZdyldZPLrP',
            },
            {
                image: tree,
                title: 'tree',
                description:
                    'GNU treeユーティリティを模倣した、ディレクトリ構造をツリー形式で表示するコマンドラインツールです。',
                tags: ['C', 'Makefile', 'File I/O'],
                githubUrl: 'https://github.com/tkwonn/tree',
                appUrl: 'https://asciinema.org/a/4NXUfSTGgVhEAULL0s0thOAiA',
            },
            {
                image: traceroute,
                title: 'traceroute',
                description:
                    'ネットワークパケットの経路を追跡し、各ホップごとの遅延を計測するツールです。',
                tags: ['Python', 'Socket', 'ICMP'],
                githubUrl: 'https://github.com/tkwonn/traceroute',
                appUrl: 'https://asciinema.org/a/oBjkDptRGJcYiEp8sMAtmovxR',
            },
            {
                image: ping,
                title: 'ping',
                description:
                    'ネットワーク接続のテストと応答時間計測のため、エコー要求を送信するツールです。',
                tags: ['Python', 'Socket', 'ICMP'],
                githubUrl: 'https://github.com/tkwonn/ping',
                appUrl: 'https://asciinema.org/a/jl8X363T1zhI2xUc6i9NBKKLS',
            },
            {
                image: rpc,
                title: 'remote procedure call',
                description:
                    'Unixドメインソケットを介して、プロセス間でリモートプロシージャコールを実現するローカルRPCシステムです。',
                tags: ['Python', 'JavaScript', 'Socket'],
                githubUrl: 'https://github.com/tkwonn/remote-procedure-call',
                appUrl: 'https://asciinema.org/a/P71AG0MTjQ3LIj7oJfv55jJvq',
            },
            {
                image: base64,
                title: 'base64',
                description:
                    'バイナリデータをテキストベースのプロトコルで安全に送受信するための、Base64エンコーダ／デコーダです.',
                tags: ['C', 'Makefile', 'File I/O'],
                githubUrl: 'https://github.com/tkwonn/base64',
                appUrl: 'https://asciinema.org/a/rdYjEroQStpuiQc9iiFbx5tI0',
            },
        ],
    },
} as const satisfies TranslationType;
