import Link from 'next/link';
import { FiExternalLink } from 'react-icons/fi';
import Experience from '@/components/Experience';
import Skill from '@/components/Skill';

export default function Resume() {
    return (
        <main className="mb-20 flex flex-col items-center px-4">
            <section id="resume" className="mb-28 w-full max-w-[70rem] sm:mb-0">
                <div className="flex items-center justify-between">
                    <h2 className="flex text-xl font-bold sm:text-2xl lg:text-3xl">
                        <div className="mr-4 h-8 w-1 bg-gray-700 sm:h-10"></div>
                        Resume
                    </h2>
                    <Link
                        href="/assets/docs/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-2 whitespace-nowrap rounded-md border border-white border-opacity-40 bg-white bg-opacity-80 px-3 py-1.5 text-sm text-gray-500 transition hover:bg-gray-200 hover:text-gray-950 sm:px-4 sm:py-2 sm:text-base dark:border-black/40 dark:bg-gray-950 dark:bg-opacity-75 dark:text-white dark:hover:text-gray-950"
                    >
                        View Resume
                        <FiExternalLink className="opacity-60" />
                    </Link>
                </div>
            </section>
            <Skill />
            <Experience />
        </main>
    );
}
