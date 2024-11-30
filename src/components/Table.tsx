import { Skill } from '@/type';

type Props = {
    title: string;
    skills: readonly Skill[];
};

export default function Table({ title, skills }: Props) {
    return (
        <div className="mb-8">
            <h3 className="mb-4 text-center text-lg font-semibold md:text-xl">
                {title}
            </h3>
            <div className="overflow-x-auto">
                <table className="w-full border border-gray-300 bg-white dark:border-white dark:bg-gray-800">
                    <thead>
                        <tr className="border border-gray-300 text-xs sm:text-base dark:border-white">
                            <th className="w-40 bg-gray-100 px-2 py-2 sm:px-4 dark:bg-gray-400">
                                Technology
                            </th>
                            <th className="w-10 bg-gray-100 px-2 py-2 sm:w-36 sm:px-4 dark:bg-gray-400">
                                Years
                            </th>
                            <th className="w-50 bg-gray-100 px-2 py-2 sm:px-4 dark:bg-gray-400">
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
                                    {skill.proficiency.map((line, index) => (
                                        <p
                                            key={index}
                                            className={
                                                index <
                                                skill.proficiency.length - 1
                                                    ? 'mb-1'
                                                    : ''
                                            }
                                        >
                                            {line}
                                        </p>
                                    ))}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
