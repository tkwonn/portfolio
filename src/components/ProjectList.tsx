import Link from 'next/link';
import { GoArrowSwitch } from 'react-icons/go';
import Card from '@/components/Card';
import { Project } from '@/type';

type ProjectsListProps = {
    title: string;
    switchPath: string;
    buttonText: string;
    projects: Project[];
};

export default function ProjectsList({
    title,
    switchPath,
    buttonText,
    projects,
}: ProjectsListProps) {
    return (
        <main className="mb-8 flex flex-col items-center px-4 sm:mb-8">
            <section id="projects" className="w-full max-w-[76rem]">
                <div className="mb-8 flex items-center justify-between">
                    <h2 className="flex text-lg font-bold sm:text-3xl">
                        <div className="mr-4 h-7 w-1 bg-gray-700 sm:h-9"></div>
                        {title}
                    </h2>
                    <Link
                        href={switchPath}
                        className="group flex items-center gap-2 whitespace-nowrap rounded-full border border-black/40 bg-gray-950 bg-opacity-75 px-3 py-1.5 text-xs text-gray-200 transition hover:bg-white hover:text-black sm:px-4 sm:py-2 sm:text-base"
                    >
                        {buttonText}
                        <GoArrowSwitch />
                    </Link>
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <Card key={index} {...project} />
                    ))}
                </div>
            </section>
        </main>
    );
}
