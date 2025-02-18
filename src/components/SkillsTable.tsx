import { useTranslations } from '@/hooks/useTranslations';
import { Skill } from '@/type';

type Props = {
    header: string;
    rows: readonly Skill[];
};

export default function Table({ header, rows }: Props) {
    const t = useTranslations();

    return (
        <div className="mb-8">
            <h3 className="mb-4 text-center text-lg font-semibold md:text-xl">
                {header}
            </h3>
            <div className="overflow-x-auto">
                <table className="w-full border border-gray-300 bg-white">
                    <thead>
                        <tr className="whitespace-nowrap border border-gray-300 text-xs sm:text-base">
                            <th className="w-[15%] border-x bg-gray-100 px-2 py-2 sm:px-4"></th>
                            <th className="w-10 border-x bg-gray-100 px-2 py-2 sm:px-4">
                                {t.skills.table.columns.proficiency}
                            </th>
                            <th className="w-10 border-x bg-gray-100 px-2 py-2 sm:px-4">
                                {t.skills.table.columns.years}
                            </th>
                            {/* <th className="w-[75%] border-x bg-gray-100 px-2 py-2 sm:px-4">
                                {t.skills.table.columns.deliverables}
                            </th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((skill, index) => (
                            <tr
                                key={index}
                                className="border-t border-gray-200 text-xs sm:text-base"
                            >
                                <td className="border-x px-2 py-2 text-gray-900 md:px-4">
                                    {skill.name}
                                </td>
                                <td className="border-x px-2 py-2 text-center text-gray-900 md:px-4">
                                    {skill.proficiency}
                                </td>
                                <td className="border-x px-2 py-2 text-center text-gray-900 md:px-4">
                                    {skill.years}
                                </td>
                                {/* <td className="border-x px-2 py-2 text-gray-900 md:px-4">
                                    {skill.output.map((line, index) => (
                                        <p
                                            key={index}
                                            className={
                                                index < skill.output.length - 1
                                                    ? 'mb-1'
                                                    : ''
                                            }
                                        >
                                            {line}
                                        </p>
                                    ))}
                                </td> */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
