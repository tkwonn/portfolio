'use client';

// import { usePathname } from 'next/navigation';
import ProficiencyGuide from '@/components/ProficiencyGuide';
import SkillsTable from '@/components/SkillsTable';
// import Link from 'next/link';
// import { FiExternalLink } from 'react-icons/fi';
import { useTranslations } from '@/hooks/useTranslations';

export default function SkillsTemplate() {
    const t = useTranslations();
    // const pathname = usePathname();
    // const downloadPath = pathname.startsWith('/ja')
    //     ? '/assets/docs/resume-ja.pdf'
    //     : '/assets/docs/resume.pdf';

    const tableConfigs = [
        {
            header: t.skills.table.header.language,
            rows: t.skills.table.rows.languages,
        },
        {
            header: t.skills.table.header.framework,
            rows: t.skills.table.rows.frameworks,
        },
        {
            header: t.skills.table.header.database,
            rows: t.skills.table.rows.databases,
        },
        {
            header: t.skills.table.header.server,
            rows: t.skills.table.rows.servers,
        },
        {
            header: t.skills.table.header.cloud,
            rows: t.skills.table.rows.clouds,
        },
        { header: t.skills.table.header.os, rows: t.skills.table.rows.os },
        { header: t.skills.table.header.misc, rows: t.skills.table.rows.misc },
    ];

    return (
        <main className="mb-10 flex flex-col items-center px-4">
            <section id="skills" className="w-full max-w-[76rem]">
                <div className="flex items-center justify-between">
                    <h2 className="flex text-xl font-bold sm:text-2xl lg:text-3xl">
                        <div className="mr-4 h-8 w-1 bg-gray-700 sm:h-10"></div>
                        {t.skills.pageTitle}
                    </h2>
                    {/* <Link
                        href={downloadPath}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-2 whitespace-nowrap rounded-full border px-3 py-1.5 text-sm transition hover:bg-gray-200 hover:text-gray-950 sm:px-4 sm:py-2 sm:text-base border-black/40 bg-gray-950 bg-opacity-75 text-white"
                    >
                        {t.downloadText}
                        <FiExternalLink className="opacity-60" />
                    </Link> */}
                </div>
            </section>

            <section className="mx-auto mt-8 w-full max-w-[76rem]">
                {tableConfigs.map((config, index) => (
                    <SkillsTable
                        key={index}
                        header={config.header}
                        rows={config.rows}
                    />
                ))}
            </section>

            <ProficiencyGuide />
        </main>
    );
}
