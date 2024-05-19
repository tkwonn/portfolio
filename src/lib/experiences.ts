import React from "react";
import { LuGraduationCap } from "react-icons/lu";
// import { CgWorkAlt } from "react-icons/cg";

export const experiencesData = [
  {
    title: "帝京大学　経済学部卒業",
    location: "東京都　八王子市",
    description: "経済学の学士号を取得。ラグビー部に所属。",
    icon: React.createElement(LuGraduationCap),
    date: "2020",
  },
  {
    title: "レーン コミュニティカレッジ",
    location: "アメリカ　オレゴン州",
    description: "コンピュータサイエンス専攻、准学士号を取得。",
    icon: React.createElement(LuGraduationCap),
    date: "2020.4 - 2021.12",
  },
  {
    title: "オレゴン州立大学",
    location: "アメリカ　オレゴン州",
    description: `コンピュータサイエンス専攻、今年の6月に学士号を取得予定。在学中、以下のポジションで実務経験を積みました。https://jobs.oregonstate.edu/postings/150253`,
    icon: React.createElement(LuGraduationCap),
    date: "2022 - Expected 2024.6",
  },
] as const;