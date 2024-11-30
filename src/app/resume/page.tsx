import Link from 'next/link';
import { FiExternalLink } from 'react-icons/fi';
import Experience from '@/components/Experience';
import Skill from '@/components/Skill';

export default function Resume() {
    return (
        <main className="mb-20 flex flex-col items-center px-4">
            <section id="resume" className="mb-28 w-full max-w-[70rem] sm:mb-0">
                <div className="flex items-center justify-between">
                    <h2 className="mb-8 flex text-3xl font-bold">
                        <div className="mr-4 h-10 w-1 bg-gray-700"></div>
                        Resume
                    </h2>
                    <div className="mb-8 flex justify-center">
                        <Link
                            href="/assets/docs/resume-ja.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex cursor-pointer items-center gap-2 rounded-md border border-gray-300 bg-gray-100 px-7 py-3 outline-none transition hover:scale-105 focus:scale-105 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                        >
                            View Resume
                            <FiExternalLink className="opacity-60" />
                        </Link>
                    </div>
                </div>
            </section>
            <Skill />
            <Experience />
        </main>
    );
}
