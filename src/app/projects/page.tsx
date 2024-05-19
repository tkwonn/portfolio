import React from 'react';
import { projectsData } from '@/lib/projects';
import Card from '@/components/Card';

export default function Projects() {
  return (
    <main className="flex flex-col items-center px-4 mb-20">
      <section id="projects" className="mb-28 max-w-[50rem] text-center sm:mb-0">
        <h2 className="text-4xl font-bold mb-16">Projects</h2>
        {/* <p className="mb-12 text-sm">各プロジェクトの詳細についてはGithub READMEをご覧頂けますと幸いです</p> */}

        <div className="flex flex-wrap justify-center -mx-4">
          {projectsData.map((project, index) => (
            <Card key={index} {...project} />
          ))}
        </div>
      </section>
    </main>
  );
}