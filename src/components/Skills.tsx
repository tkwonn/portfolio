import { SkillData, languages, databases, others } from '@/lib/skills';

const SkillTable = ({
    title,
    skills,
}: {
    title: string;
    skills: readonly SkillData[];
}) => (
    <div className="mb-8">
        <h3 className="mb-4 text-center text-lg font-semibold md:text-xl">
            {title}
        </h3>
        <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 bg-white dark:border-white dark:bg-gray-800">
                <thead>
                    <tr className="border border-gray-300 text-xs sm:text-base dark:border-white">
                        <th className="bg-gray-100 px-2 py-2 sm:px-4 dark:bg-gray-400">
                            Technology
                        </th>
                        <th className="w-20 bg-gray-100 px-2 py-2 sm:w-36 sm:px-4 dark:bg-gray-400">
                            Years
                        </th>
                        <th className="bg-gray-100 px-2 py-2 sm:px-4 dark:bg-gray-400">
                            Level of experience
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {skills.map((skill, index) => (
                        <tr
                            key={index}
                            className="border-t border-gray-200 text-xs sm:text-base dark:border-gray-400"
                        >
                            <td className="px-2 py-2 text-gray-900 md:px-4 dark:text-gray-200">
                                {skill.name}
                            </td>
                            <td className="px-2 py-2 text-center text-gray-900 md:px-4 dark:text-gray-200">
                                {skill.years}
                            </td>
                            <td className="px-2 py-2 text-gray-900 md:px-4 dark:text-gray-200">
                                {skill.proficiency}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
);

export default function Skills() {
    return (
        <section className="mx-auto mb-16 max-w-[90%] scroll-mt-20 md:max-w-[53rem]">
            <h2 className="mb-8 text-center text-2xl font-medium sm:text-3xl md:text-3xl">
                Skills
            </h2>
            <SkillTable title="Languages & Frameworks" skills={languages} />
            <SkillTable title="Databases" skills={databases} />
            <SkillTable title="Others" skills={others} />
        </section>
    );
}
