'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiExternalLink } from 'react-icons/fi';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import { useTranslations } from '@/hooks/useTranslations';

export default function ResumeTemplate() {
    const t = useTranslations();
    const pathname = usePathname();
    const downloadPath = pathname.startsWith('/ja')
        ? '/assets/docs/resume-ja.pdf'
        : '/assets/docs/resume.pdf';

    return (
        <main className="mb-10 flex flex-col items-center px-4">
            <section id="resume" className="mb-28 w-full max-w-[76rem] sm:mb-0">
                <div className="flex items-center justify-between">
                    <h2 className="flex text-xl font-bold sm:text-2xl lg:text-3xl">
                        <div className="mr-4 h-8 w-1 bg-gray-700 sm:h-10"></div>
                        {t.resume.pageTitle}
                    </h2>
                    <Link
                        href={downloadPath}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-2 whitespace-nowrap rounded-full border border-black/40 bg-gray-950 bg-opacity-75 px-3 py-1.5 text-sm text-white transition hover:bg-gray-200 hover:text-gray-950 sm:px-4 sm:py-2 sm:text-base"
                    >
                        {t.downloadText}
                        <FiExternalLink className="opacity-60" />
                    </Link>
                </div>
            </section>

            <section className="mx-auto mt-8 w-full max-w-[76rem]">
                <Education />
                <Experience />
            </section>
        </main>
    );
}
