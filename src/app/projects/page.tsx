import React from 'react';
import { projectsData } from '@/lib/projects';
import Card from '@/components/Card';

export default function Projects() {
    return (
        <main className="mb-20 flex flex-col items-center px-4">
            <section
                id="projects"
                className="mb-28 max-w-[50rem] text-center sm:mb-0"
            >
                <h2 className="mb-16 text-4xl font-bold">Projects</h2>
                <div className="-mx-4 flex flex-wrap justify-center">
                    {projectsData.map((project, index) => (
                        <Card key={index} {...project} />
                    ))}
                </div>
            </section>
        </main>
    );
}
