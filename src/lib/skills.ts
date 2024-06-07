
export const languages = [
    {
        "name": "HTML/CSS",
        "years": "3.5 年",
        "proficiency": "セマンティックなマークアップ、FlexboxやGridを用いたレイアウト、レスポンシブデザインを実装できる。"
    },
    {
        "name": "JavaScript",
        "years": "3.5 年",
        "proficiency": "DOM操作、ES6以降の新機能（アロー関数、テンプレートリテラル、デストラクチャリング）、非同期通信を理解してブラウザアプリ等を開発できる。"
    },
    {
        "name": "TypeScript",
        "years": "1 年",
        "proficiency": "any型やasを避けて型定義を行える。"
    },
    // {
    //     "name": "Python",
    //     "years": "3 年",
    //     "proficiency": ""
    // },
    // {
    //     "name": "PHP",
    //     "years": "1.5 年",
    //     "proficiency": "型の厳格なチェックが必要な部分に型定義を行い、リスクが低い部分では動的型付けを使用することで、コードの柔軟性と安全性のバランスを保って開発ができる。"
    // },
    // {
    //     "name": "Java",
    //     "years": "1.5 年",
    //     "proficiency": ""
    // },
    {
        "name": "Vue.js",
        "years": "2 年",
        "proficiency": "SPAの構築に必要なルーティング管理、Vuexによる状態管理、ライフサイクルフックを理解してアプリを開発できる。"
    },
    {
        "name": "React",
        "years": "2 年",
        "proficiency": "ビューとロジックを分離した開発ができる。Context APIやReduxによる状態管理、Jestによるテストも開発で使用。"
    },
    {
        "name": "Next.js",
        "years": "1 年",
        "proficiency": "SSRによる初回ロードの高速化とSSGによるパフォーマンス最適化、動的ルーティングについて理解してウェブサイトを作成できる。"
    },
    {
        "name": "Django",
        "years": "0.5 年",
        "proficiency": "Django REST framework + JWTを使用したWeb APIの作成、PostgreSQLを使用したモデルの作成とデータベース操作を行うことができる。"
    },
] as const;

export const databases = [
    {
        "name": "MySQL / PostgreSQL",
        "years": "1.5 年",
        "proficiency": "基礎的なDDL・DML、集計関数、GROUP BY、HAVING、JOINなどが書ける。"
    },
    {
        "name": "MongoDB / Cloud Firestore",
        "years": "1.5 年",
        "proficiency": "リファレンスを参照しながら、データのCRUD操作を行い、階層データ構造によるデータの管理ができる。"
    },
] as const;

export const others = [
    {
        "name": "Git",
        "years": "3 年",
        "proficiency": "バージョン管理の基本操作（コミット、ブランチ作成、マージ、リベース）、チームでのコラボレーション（Issue作成、PR、コードレビュー）などが行える。"
    },
    {
        "name": "Linux",
        "years": "2 年",
        "proficiency": "Ubuntuを使用して、Unixの基礎コマンド、シェルスクリプトの作成、ファイルパーミッション設定などができる。"
    },
    {
        "name": "NGINX",
        "years": "~ 0.5 年",
        "proficiency": "ウェブサーバを立ち上げ、リバースプロキシの設定、SSL証明書の設定ができる。"
    },
    // {
    //     "name": "Docker",
    //     "years": "~ 0.5 年",
    //     "proficiency": "Docker Hubからイメージを取得して、コンテナを起動する。"
    // },
    // {
    //     "name": "Jest / React Testing Library",
    //     "years": "1 年",
    //     "proficiency": "ユニット、コンポーネント、結合、E2Eテストを書くことができる。"
    // },
    {
        "name": "AWS / GCP",
        "years": "~ 0.5 年",
        "proficiency": "クラウドVMを作成して、SSHで繋いで、アプリをデプロイすることができる。"
    }
] as const;