import portfolio from "../../public/img/portfolio.png";
import sketch from "../../public/img/sketch.png";
import connect4 from "../../public/img/connect4.png";
import amiibo from "../../public/img/amiibo.png";
import clickEmpire from "../../public/img/clickempire.png";
// import nodata from "../../public/img/nodata.png";

export const projectsData = [
    {
      imageUrl: portfolio,
      title: "Portfolio Website",
      description:
        "これまでに制作してきたプロジェクトをまとめたポートフォリオサイトです。Next.jsを用いてCSR・SSRによるページ生成を行い、NGINXサーバをセットアップして、AWS EC2インスタンスにデプロイしました。",
      tags: ["NGINX", "AWS EC2", "TypeScript", "React", "Next.js", "Tailwind CSS"],
      githubUrl: 'https://github.com/tkwonn/portfolio',
      appUrl: '/',
    },
    // {
    //   imageUrl: nodata,
    //   title: "Video Compressor",
    //   description:
    //     "ffmpegを使用して動画ファイルを圧縮し、ダウンロードすることができるWebアプリケーションです。OSのシステムコール、データベースへのアクセス、Linux環境での作業についてアウトプットすることができました。",
    //   tags: ["TypeScript", "React", "Tailwind CSS", "ffmpeg"],
    //   githubUrl: '',
    //   appUrl: '',
    // },
    {
      imageUrl: sketch,
      title: "Etch A Sketch",
      description:
        "描画玩具「Etch A Sketch」をWebアプリケーションとして実装しました。キャンバス機能の実装にはKonva.jsを使用し、ユーザーが線の色や太さを自由に変更でき、作品を友達とシェアできます。このプロジェクトでは、3層アーキテクチャに基づいて、プレゼンテーション層をVue.js、ロジック層をDjango、データ層にPostgreSQLを使用しました。クライアント/サーバ間のデータのやり取りでは、Django REST Frameworkを活用してWeb APIを作成しました。",
      tags: ["Vue.js", "Django", "PostgreSQL", "JWT", "Konva"],
      githubUrl: 'https://github.com/Recursion-Group-K/sketch',
      appUrl: 'https://sketch-frontend-d11d98fe289b.herokuapp.com/',
    },
    {
      imageUrl: connect4,
      title: "Connect 4",
      description:
        "Connect 4は、2人のプレイヤーが交互に色のついたボールを列に落とし、縦、横、または斜めに4つ並べることを競うターン制のゲームです。AIとの対戦機能をモンテカルロ木探索アルゴリズムを用いて実装し、ReactのContext APIを使用してアプリケーションの状態を管理しました。",
      tags: ["React", "Next.js", "Context API"],
      githubUrl: 'https://github.com/TeamE-React/connect-4',
      appUrl: 'https://teame-connect4.vercel.app/',
    },
    {
      imageUrl: amiibo,
      title: "Amiibo Atlas (開発途中）",
      description:
        "Amiibo（任天堂のフィギュア）コレクターや愛好家のためのウェブアプリケーションです。このプロジェクトでは、Amiibo APIを使用し、Amiiboフィギュアに関する情報をユーザーに提供します。ユーザは気に入ったAmiiboをウィッシュリストに入れたり、愛用しているAmiiboフィギュアを登録し、友達とシェアできます。",
      tags: ["TypeScript", "React", "Redux", "Firebase", "React Query"],
      githubUrl: 'https://github.com/Amiibo-Atlas/Amiibo-Atlas',
      appUrl: '',
    },
    {
      imageUrl: clickEmpire,
      title: "Clicker Empire Game",
      description:
        "はじめての個人プロジェクトとして、Cookie Clickerに似たブラウザアプリを作成しました。JavaScriptを使ったユーザーとブラウザのインタラクションの実装を通じて、ブラウザがHTMLを解析し、DOMを生成してサイトをレンダリングする仕組みを学びました。",
      tags: ["HTML5", "CSS3", "JavaScript"],
      githubUrl: 'https://github.com/tkwonn/clicker-empire-game',
      appUrl: 'https://clicker-empire-game-five.vercel.app/',
    },
  ] as const;