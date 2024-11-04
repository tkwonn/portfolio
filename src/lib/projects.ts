import video from '../../public/img/video.png';
import portfolio from '../../public/img/portfolio.png';
import sketch from '../../public/img/sketch.png';
import connect4 from '../../public/img/connect4.png';
import clickEmpire from '../../public/img/clickempire.png';

export const projectsData = [
    {
        image: video,
        title: 'Video Compressor',
        description:
            'FFMPEGライブラリを活用し、ユーザーがアップロードした動画を圧縮、変換、編集できるデスクトップアプリを開発しました。OSにフルアクセス可能なNode.js環境を提供するElectronのメインプロセスとHTMLのDOMにアクセス可能なレンダラープロセス間の通信によって、効率的なイベント処理を実現しています。',
        tags: ['Electron', 'ffmpeg', 'TypeScript', 'React', 'Tailwind CSS'],
        githubUrl: 'https://github.com/tkwonn/video-compressor',
        appUrl: 'https://github.com/tkwonn/video-compressor/releases',
    },
    {
        image: portfolio,
        title: 'Portfolio Website',
        description:
            'これまでに制作してきたプロジェクトをまとめたポートフォリオサイトです。Next.jsを用いてCSR・SSRによるページ生成を行い、NGINXサーバをセットアップして、AWS EC2インスタンスにデプロイしました。',
        tags: [
            'NGINX',
            'Amazon EC2',
            'TypeScript',
            'Next.js',
            'Tailwind CSS',
        ],
        githubUrl: 'https://github.com/tkwonn/portfolio',
        appUrl: '/',
    },
    {
        image: sketch,
        title: 'Etch A Sketch',
        description:
            '描画玩具「Etch A Sketch」をWebアプリケーションとして実装しました。キャンバス機能の実装にはKonva.jsを使用し、ユーザーが線の色や太さを自由に変更でき、作品を友達とシェアできます。このプロジェクトでは、3層アーキテクチャに基づいて、プレゼンテーション層をVue.js、ロジック層をDjango、データ層にPostgreSQLを使用しました。クライアント/サーバ間のデータのやり取りでは、Django REST Frameworkを活用してWeb APIを作成しました。',
        tags: ['Vue.js', 'Django', 'PostgreSQL', 'JWT', 'Konva'],
        githubUrl: 'https://github.com/Recursion-Group-K/sketch',
        appUrl: 'https://sketch-frontend-d11d98fe289b.herokuapp.com/',
    },
    {
        image: connect4,
        title: 'Connect 4',
        description:
            'Connect 4は、2人のプレイヤーが交互に色のついたボールを列に落とし、縦、横、または斜めに4つ並べることを競うターン制のゲームです。AIとの対戦機能をモンテカルロ木探索アルゴリズムを用いて実装し、ReactのContext APIを使用してアプリケーションの状態を管理しました。',
        tags: ['HTML5', 'CSS3', 'React'],
        githubUrl: 'https://github.com/TeamE-React/connect-4',
        appUrl: 'https://teame-connect4.vercel.app/',
    },
    {
        image: clickEmpire,
        title: 'Clicker Empire Game',
        description:
            'はじめての個人プロジェクトとして、Cookie Clickerに似たブラウザアプリを作成しました。JavaScriptを使ったユーザーとブラウザのインタラクションの実装を通じて、ブラウザがHTMLを解析し、DOMを生成してサイトをレンダリングする仕組みを学びました。',
        tags: ['HTML5', 'CSS3', 'JavaScript'],
        githubUrl: 'https://github.com/tkwonn/clicker-empire-game',
        appUrl: 'https://clicker-empire-game-five.vercel.app/',
    },
] as const;
