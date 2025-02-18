'use client';

import { useTranslations } from '@/hooks/useTranslations';

export default function Education() {
    const t = useTranslations();

    return (
        <div className="mb-8">
            <h3 className="mb-4 text-center text-lg font-semibold md:text-xl">
                {t.resume.education.header}
            </h3>
            <div className="overflow-x-auto">
                <table className="w-full border border-gray-300 bg-white">
                    <tbody>
                        {t.resume.education.rows.map((row, index) => (
                            <tr
                                key={index}
                                className="border-t border-gray-200 text-xs sm:text-base"
                            >
                                <td className="w-[20%] border-x px-2 py-2 text-gray-900 md:px-4">
                                    {row.date}
                                </td>
                                <td className="w-[80%] border-x px-2 py-2 text-gray-900 md:px-4">
                                    {row.title}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
