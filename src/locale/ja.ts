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
                        years: '3年',
                        output: [],
                    },
                    {
                        name: 'CSS',
                        proficiency: 4,
                        years: '3年',
                        output: [],
                    },
                    {
                        name: 'JavaScript',
                        proficiency: 5,
                        years: '3年',
                        output: [],
                    },
                    {
                        name: 'TypeScript',
                        proficiency: 4,
                        years: '2年',
                        output: [],
                    },
                    {
                        name: 'GAS',
                        proficiency: 3,
                        years: '1ヶ月',
                        output: [],
                    },
                    {
                        name: 'Python',
                        proficiency: 4,
                        years: '3年',
                        output: [],
                    },
                    {
                        name: 'Ruby',
                        proficiency: 3,
                        years: '3ヶ月',
                        output: [],
                    },
                    {
                        name: 'PHP',
                        proficiency: 5,
                        years: '3年',
                        output: [],
                    },
                    {
                        name: 'Java',
                        proficiency: 3,
                        years: '2年',
                        output: [],
                    },
                    {
                        name: 'C#',
                        proficiency: 3,
                        years: '6ヶ月',
                        output: [],
                    },
                    {
                        name: 'Kotlin',
                        proficiency: 1,
                        years: '3ヶ月',
                        output: [],
                    },
                    {
                        name: 'C',
                        proficiency: 3,
                        years: '2年',
                        output: [],
                    },
                    {
                        name: 'C++',
                        proficiency: 2,
                        years: '6ヶ月',
                        output: [],
                    },
                    {
                        name: 'Golang',
                        proficiency: 3,
                        years: '8ヶ月',
                        output: [],
                    },
                    {
                        name: 'SQL',
                        proficiency: 3,
                        years: '2年',
                        output: [],
                    },
                ],
                frameworks: [
                    {
                        name: 'Bootstrap',
                        proficiency: 4,
                        years: '2年',
                        output: [],
                    },
                    {
                        name: 'TailwindCSS',
                        proficiency: 4,
                        years: '2年',
                        output: [],
                    },
                    {
                        name: 'React',
                        proficiency: 4,
                        years: '2年',
                        output: [],
                    },
                    {
                        name: 'Redux',
                        proficiency: 4,
                        years: '1年',
                        output: [],
                    },
                    {
                        name: 'Next.js',
                        proficiency: 3,
                        years: '1年',
                        output: [],
                    },
                    {
                        name: 'Vue.js',
                        proficiency: 4,
                        years: '2年',
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
                        years: '3ヶ月',
                        output: [],
                    },
                    {
                        name: 'Django',
                        proficiency: 3,
                        years: '5ヶ月',
                        output: [],
                    },
                    {
                        name: 'Ruby on Rails',
                        proficiency: 2,
                        years: '3ヶ月',
                        output: [],
                    },
                ],
                databases: [
                    {
                        name: 'MySQL',
                        proficiency: 3,
                        years: '2年',
                        output: [],
                    },
                    {
                        name: 'PostgreSQL',
                        proficiency: 2,
                        years: '3ヶ月',
                        output: [],
                    },
                    {
                        name: 'SQLite',
                        proficiency: 1,
                        years: '1ヶ月',
                        output: [],
                    },
                    {
                        name: 'Firestore',
                        proficiency: 3,
                        years: '1年',
                        output: [],
                    },
                    {
                        name: 'MongoDB',
                        proficiency: 1,
                        years: '3ヶ月',
                        output: [],
                    },
                    {
                        name: 'Memcached',
                        proficiency: 2,
                        years: '1ヶ月',
                        output: [],
                    },
                ],
                servers: [
                    {
                        name: 'Nginx',
                        proficiency: 4,
                        years: '8ヶ月',
                        output: [],
                    },
                    {
                        name: 'Apache',
                        proficiency: 3,
                        years: '1ヶ月',
                        output: [],
                    },
                ],
                clouds: [
                    {
                        name: 'AWS',
                        proficiency: 3,
                        years: '8ヶ月',
                        output: [],
                    },
                    {
                        name: 'GCP',
                        proficiency: 2,
                        years: '3ヶ月',
                        output: [],
                    },
                    {
                        name: 'Firebase',
                        proficiency: 3,
                        years: '6ヶ月',
                        output: [],
                    },
                    {
                        name: 'Vercel',
                        proficiency: 4,
                        years: '1年',
                        output: [],
                    },
                    {
                        name: 'Heroku',
                        proficiency: 4,
                        years: '6ヶ月',
                        output: [],
                    },
                    {
                        name: 'Cloudflare Pages',
                        proficiency: 2,
                        years: '1ヶ月',
                        output: [],
                    },
                ],
                os: [
                    {
                        name: 'Linux - Ubuntu',
                        proficiency: 3,
                        years: '3年',
                        output: [],
                    },
                    {
                        name: 'Windows',
                        proficiency: 2,
                        years: '6ヶ月',
                        output: [],
                    },
                    {
                        name: 'macOS',
                        proficiency: 4,
                        years: '4年',
                        output: [],
                    },
                ],
                misc: [
                    {
                        name: 'Git / GitHub',
                        proficiency: 4,
                        years: '3年',
                        output: [],
                    },
                    {
                        name: 'Docker',
                        proficiency: 3,
                        years: '8ヶ月',
                        output: [],
                    },
                    {
                        name: 'DBeaver',
                        proficiency: 4,
                        years: '1年',
                        output: [],
                    },
                    {
                        name: 'VSCode',
                        proficiency: 5,
                        years: '1年',
                        output: [],
                    },
                    {
                        name: 'IntelliJ IDEA',
                        proficiency: 4,
                        years: '3ヶ月',
                        output: [],
                    },
                    {
                        name: 'NeoVim',
                        proficiency: 3,
                        years: '2年',
                        output: [],
                    },
                    {
                        name: 'Postman',
                        proficiency: 4,
                        years: '2年',
                        output: [],
                    },
                    {
                        name: 'Android Studio',
                        proficiency: 1,
                        years: '3ヶ月',
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
