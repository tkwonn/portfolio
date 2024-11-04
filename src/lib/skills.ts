export type SkillData = {
    name: string;
    years: string;
    proficiency: string;
};

export const languages: readonly SkillData[] = [
    {
        name: 'HTML/CSS',
        years: '3.5 yrs',
        proficiency:
            'セマンティックなマークアップ、FlexboxやGridを用いたレイアウト、レスポンシブデザインを実装できる。',
    },
    {
        name: 'Type/JavaScript',
        years: '1/3.5 yrs',
        proficiency:
            'DOM操作、非同期通信を活用したリアルタイムアプリケーションの開発ができる。any型やasを避けて厳格な型定義を行える。',
    },
    {
        name: 'Java',
        years: '1.5 yrs',
        proficiency:
            'オブジェクト指向プログラミングの学習時に使用。簡単なAndroidアプリの開発経験あり。',
    },
    {
        name: 'Vue.js',
        years: '2 yrs',
        proficiency:
            'SPAの構築に必要なルーティング管理、Vuexによる状態管理、ライフサイクルフックを理解してアプリを開発できる。',
    },
    {
        name: 'React',
        years: '2 yrs',
        proficiency:
            'ビューとロジックの分離、Context APIやReduxによる状態管理、Jestによるテストを用いて開発できる。フレームワークではNext.jsを使用',
    },
    {
        name: 'Django',
        years: '0.5 yrs',
        proficiency:
            'Django REST framework + JWTを使用したWeb APIの作成、PostgreSQLを使用したモデルの作成とデータベース操作を行うことができる。',
    },
    {
        name: 'Laravel',
        years: '0.5 yrs',
        proficiency:
            'Django REST framework + JWTを使用したWeb APIの作成、PostgreSQLを使用したモデルの作成とデータベース操作を行うことができる。',
    },
    {
        name: 'Go',
        years: '0.5 yrs',
        proficiency:
            'Django REST framework + JWTを使用したWeb APIの作成、PostgreSQLを使用したモデルの作成とデータベース操作を行うことができる。',
    },
] as const;

export const databases: readonly SkillData[] = [
    {
        name: 'MySQL',
        years: '1.5 yrs',
        proficiency:
            '基礎的なDDL・DML、集計関数、GROUP BY、HAVING、JOINなどが書ける。',
    },
    {
        name: 'Cloud Firestore',
        years: '1.5 yrs',
        proficiency:
            'リファレンスを参照しながら、データのCRUD操作を行い、階層データ構造によるデータの管理ができる。',
    },
] as const;

export const misc: readonly SkillData[] = [
    {
        name: 'Git',
        years: '3 yrs',
        proficiency:
            'バージョン管理の基本操作（コミット、ブランチ作成、マージ、リベース）、チームでのコラボレーション（Issue作成、PR、コードレビュー）などが行える。',
    },
    {
        name: 'Linux',
        years: '2 yrs',
        proficiency:
            'Ubuntuを使用して、Unixの基礎コマンド、シェルスクリプトの作成、ファイルパーミッション設定などができる。',
    },
    {
        name: 'Nginx',
        years: '~ 0.5 yrs',
        proficiency:
            'ウェブサーバを立ち上げ、リバースプロキシの設定、SSL証明書の設定ができる。',
    },
    {
        name: 'Docker',
        years: '~ 0.5 yrs',
        proficiency:
            'ウェブサーバを立ち上げ、リバースプロキシの設定、SSL証明書の設定ができる。',
    },
    {
        name: 'AWS',
        years: '~ 0.5 yrs',
        proficiency:
            'クラウドVMを作成して、SSHで繋いで、アプリをデプロイすることができる。Cloud Storageの使用経験あり。',
    },
] as const;
