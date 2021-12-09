export const teamProjects = [
  {
    title: 'Connect 4',
    description: "チーム開発で習ったノウハウを落とし込むべく、今度はメンターなしで同じアプリを改善・カスタマイズし、実装しました。",
    points: "新たにCPU対戦モードの実装やレイアウトの修正、勝利後のアニメーションを加えどのようにボールが揃ったのか可視化できるようにしました。CPUのロジックはeasyレベルとhardレベルを設定し、easyではCPUがランダムにボールの配置を選択するようにしました。hardはモンテカルロ木探索アルゴリズムを使用しました。",
    image: '/images/connect4-2.png',
    tags: ['Next.js', 'Material UI'],
    source: 'https://github.com/TeamE-React/connect-4',
    visit: 'https://teame-connect4.vercel.app/',
    id: 1,
  },
  {
    title: 'Connect 4',
    description: "1ヶ月という限られた期間の中、未経験者4名+メンターによって、開発されたチームプロジェクトです。横5×縦5マスのボード上に、2人のプレイヤーが交代でボールを積み上げて行き、相手よりも先に4つのボールを並べた方が勝ちとなるゲームです。",
    points: "プレイヤーおよびボールに関してはオブジェクト指向(OOP)によって書かれています。ユーザの入力によってボードのマスを4×4から8×8まで、プレイヤーの人数を2人から4人まで動的に生成されるように作成しました。勝利判定は、最後のチェッカーを焦点として扱うことで、計算回数を減らすことができました。",
    image: '/images/connect4.jpg',
    tags: ['Vue'],
    source: 'https://github.com/Recursion-TeamE/Connect4',
    visit: 'https://recursion-teame.github.io/Connect4/',
    id: 1,
  },
]