import Link from 'next/link';
import Card from '@/components/Card';
import { Project } from '@/type';

type ProjectsListProps = {
    title: string;
    targetPath: string;
    targetText: string;
    projects: Project[];
};

export default function ProjectsList({
    title,
    targetPath,
    targetText,
    projects,
}: ProjectsListProps) {
    return (
        <>
            <div className="mb-8 flex items-center justify-between">
                <h2 className="flex text-xl font-bold sm:text-2xl lg:text-3xl">
                    <div className="mr-4 h-8 w-1 bg-gray-700 sm:h-10"></div>
                    {title} Projects
                </h2>
                <Link
                    href={targetPath}
                    className="whitespace-nowrap rounded-md border border-white border-opacity-40 bg-white bg-opacity-80 px-3 py-1.5 text-sm text-gray-500 transition hover:bg-gray-200 hover:text-gray-950 sm:px-4 sm:py-2 sm:text-base dark:border-black/40 dark:bg-gray-950 dark:bg-opacity-75 dark:text-white dark:hover:text-gray-950"
                >
                    View {targetText} Projects
                </Link>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => (
                    <Card key={index} {...project} />
                ))}
            </div>
        </>
    );
}
