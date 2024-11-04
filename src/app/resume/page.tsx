import { HiDownload } from 'react-icons/hi';
import Experience from '@/components/Experience';
import Skill from '@/components/Skill';

export default function Resume() {
    return (
        <main className="mb-20 flex flex-col items-center px-4">
            <section className="mb-4 max-w-[50rem] text-center">
                <h2 className="mb-8 text-4xl font-bold">Resume</h2>
                <div className="mb-8 flex justify-center">
                    <a
                        className="group flex cursor-pointer items-center gap-2 rounded-full border border-gray-300 bg-gray-100 px-7 py-3 outline-none transition hover:scale-110 focus:scale-110 active:scale-105 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                        href="/resume-ja.pdf"
                        download
                    >
                        Download Resume
                        <HiDownload className="opacity-60 transition group-hover:translate-y-1" />
                    </a>
                </div>
            </section>
            <Skill />
            <Experience />
        </main>
    );
}
