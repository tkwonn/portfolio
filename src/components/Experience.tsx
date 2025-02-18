'use client';

import { VscDebugBreakpointLog } from 'react-icons/vsc';
import { useTranslations } from '@/hooks/useTranslations';
import { Work } from '@/type';

export default function Experience() {
    const t = useTranslations();

    const renderRows = (row: Work, index: number) => {
        return [
            // Position Row
            <tr
                key={`${index}-position`}
                className="border-t border-gray-200 text-xs sm:text-base"
            >
                <td className="w-[20%] border-x px-2 py-2 text-gray-900 md:px-4">
                    {t.resume.experience.leftRows.position}
                </td>
                <td className="w-[80%] border-x px-2 py-2 text-gray-900 md:px-4">
                    {row.position}
                </td>
            </tr>,
            // Schedule Row
            <tr
                key={`${index}-schedule`}
                className="border-t border-gray-200 text-xs sm:text-base"
            >
                <td className="w-[20%] border-x px-2 py-2 text-gray-900 md:px-4">
                    {t.resume.experience.leftRows.arrangement}
                </td>
                <td className="w-[80%] border-x px-2 py-2 text-gray-900 md:px-4">
                    {row.arrangement}
                </td>
            </tr>,
            // Tech Stack Row
            <tr
                key={`${index}-technologies`}
                className="border-t border-gray-200 text-xs sm:text-base"
            >
                <td className="w-[20%] border-x px-2 py-2 text-gray-900 md:px-4">
                    {t.resume.experience.leftRows.technologies}
                </td>
                <td className="w-[80%] border-x px-2 py-2 text-gray-900 md:px-4">
                    {row.technologies.map((tech, index) => (
                        <p
                            key={index}
                            className={
                                index < row.technologies.length - 1
                                    ? 'mb-1'
                                    : ''
                            }
                        >
                            - {tech}
                        </p>
                    ))}
                </td>
            </tr>,
            // Date Row
            <tr
                key={`${index}-date`}
                className="border-t border-gray-200 text-xs sm:text-base"
            >
                <td className="w-[20%] border-x px-2 py-2 text-gray-900 md:px-4">
                    {t.resume.experience.leftRows.period}
                </td>
                <td className="w-[80%] border-x px-2 py-2 text-gray-900 md:px-4">
                    {row.period}
                </td>
            </tr>,
        ];
    };

    return (
        <div className="mb-12">
            <h3 className="mb-4 text-center text-lg font-semibold md:text-xl">
                {t.resume.experience.header.intern}
                <span className="block pt-1 text-xs text-gray-500">
                    {t.resume.experience.header.note}
                </span>
            </h3>
            {t.resume.experience.interns.map((row, index) => (
                <div key={index} className="mb-8 last:mb-0">
                    {/* Table */}
                    <div className="mb-4 overflow-x-auto">
                        <h4 className="p-2 text-lg font-bold">{row.company}</h4>
                        <table className="w-full border border-gray-300 bg-white">
                            <tbody>{renderRows(row, index)}</tbody>
                        </table>
                    </div>

                    <div className="px-2 pt-4">
                        {/* Description */}
                        {row.description && (
                            <div className="mb-4">
                                <h4 className="group mb-2 flex items-center gap-2 whitespace-nowrap text-sm font-medium sm:text-base">
                                    <VscDebugBreakpointLog />
                                    {
                                        t.resume.experience.bulletPoints
                                            .description
                                    }
                                </h4>
                                <p className="mb-4 indent-6 text-sm text-gray-600 sm:text-base">
                                    {row.description}
                                </p>
                            </div>
                        )}

                        {/* Tasks */}
                        {row.tasks && row.tasks.length > 0 && (
                            <div className="mb-4">
                                <h4 className="group mb-2 flex items-center gap-2 whitespace-nowrap text-sm font-medium sm:text-base">
                                    <VscDebugBreakpointLog />
                                    {t.resume.experience.bulletPoints.tasks}
                                </h4>
                                <ul className="list-inside list-disc indent-6 text-sm text-gray-600 sm:text-base">
                                    {row.tasks.map((task, taskIndex) => (
                                        <li
                                            key={taskIndex}
                                            className="mb-1 last:mb-0"
                                        >
                                            {task}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Achievements */}
                        {row.achievements && row.achievements.length > 0 && (
                            <div>
                                <h4 className="group mb-2 flex items-center gap-2 whitespace-nowrap text-sm font-medium sm:text-base">
                                    <VscDebugBreakpointLog />
                                    {
                                        t.resume.experience.bulletPoints
                                            .achievements
                                    }
                                </h4>
                                <ul className="list-inside list-disc indent-6 text-sm text-gray-600 sm:text-base">
                                    {row.achievements.map(
                                        (achievement, achievementIndex) => (
                                            <li
                                                key={achievementIndex}
                                                className="mb-1 last:mb-0"
                                            >
                                                {achievement}
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}
