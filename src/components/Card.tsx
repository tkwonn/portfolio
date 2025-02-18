'use client';

import Image from 'next/image';
import { Project } from '@/type';

export default function Card({
    image,
    title,
    description,
    tags,
    githubUrl,
    appUrl,
}: Project) {
    return (
        <div className="group mb-8 h-full w-full last:mb-0">
            <section className="dark:bg-white/2 flex h-full flex-col overflow-hidden rounded-lg border border-black/5 bg-gray-100 transition hover:bg-gray-200 dark:text-black dark:hover:border-black/10 dark:hover:bg-white/5">
                <div className="flex h-full flex-col">
                    <a href={appUrl} target="_blank" rel="noopener noreferrer">
                        <Image
                            src={image}
                            alt="Project I worked on"
                            quality={95}
                            className="h-48 w-full rounded-t-lg object-cover"
                        />
                    </a>
                    <div className="flex flex-grow flex-col p-5">
                        <h3 className="text-2xl font-semibold md:text-xl lg:text-2xl">
                            {title}
                        </h3>
                        <p className="mt-2 text-left leading-relaxed text-gray-700 dark:text-black">
                            {description}
                        </p>
                        <div className="mt-auto">
                            <ul className="flex flex-wrap gap-2">
                                {tags.map((tag, index) => (
                                    <li key={index}>
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            alt={tag}
                                            src={`https://img.shields.io/badge/-${tag}-222.svg?logo=${tag}&style=flat`}
                                        />
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-4 flex space-x-4">
                                <a
                                    href={githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-lg border border-gray-700 px-2 py-2 text-sm text-gray-700 transition hover:bg-gray-700 hover:text-white"
                                >
                                    GitHub
                                </a>
                                <a
                                    href={appUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-lg border border-gray-700 px-2 py-2 text-sm text-gray-700 transition hover:bg-gray-700 hover:text-white"
                                >
                                    App URL
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
