import { languages, databases, others } from "@/lib/skills";

const SkillTable = ({ title, skills }: { title: string, skills: readonly any[] }) => (
  <div className="mb-8">
    <h3 className="text-lg md:text-xl text-center font-semibold mb-4">{title}</h3>
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-white">
        <thead>
          <tr className="border border-gray-300 dark:border-white text-xs sm:text-base ">
            <th className="py-2 px-2 sm:px-4 bg-gray-100 dark:bg-gray-400">技術</th>
            <th className="py-2 px-2 sm:px-4 w-20 sm:w-36  bg-gray-100 dark:bg-gray-400">使用年数</th>
            <th className="py-2 px-2 sm:px-4 bg-gray-100 dark:bg-gray-400">習熟度</th>
          </tr>
        </thead>
        <tbody>
          {skills.map((skill, index) => (
            <tr key={index} className="border-t border-gray-200 dark:border-gray-400 text-xs sm:text-base ">
              <td className="py-2 px-2 md:px-4 text-gray-900 dark:text-gray-200">{skill.name}</td>
              <td className="text-center py-2 px-2 md:px-4 text-gray-900 dark:text-gray-200">{skill.years}</td>
              <td className="py-2 px-2 md:px-4 text-gray-900 dark:text-gray-200">{skill.proficiency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default function Skills() {
  return (
    <section className="max-w-[90%] md:max-w-[53rem] scroll-mt-20 mb-16 mx-auto">
      <h2 className="text-2xl sm:text-3xl md:text-3xl font-medium mb-8 text-center">スキル</h2>
      <SkillTable title="言語とフレームワーク" skills={languages as readonly any[]} />
      <SkillTable title="データベース" skills={databases as readonly any[]} />
      <SkillTable title="その他" skills={others as readonly any[]} />
    </section>
  );
}