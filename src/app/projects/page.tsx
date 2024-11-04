import React from 'react';
import { projectsData } from '@/lib/projects';
import Card from '@/components/Card';

export default function Projects() {
    return (
        <main className="mb-20 flex flex-col items-center px-4">
            <section
                id="projects"
                className="mb-28 max-w-[70rem] text-center sm:mb-0"
            >
                <h2 className="mb-16 text-4xl font-bold">Projects</h2>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {projectsData.map((project, index) => (
                        <Card key={index} {...project} />
                    ))}
                </div>
            </section>
        </main>
    );
}
