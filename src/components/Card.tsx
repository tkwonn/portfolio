'use client';

import { projectsData } from '@/lib/projects';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

type ProjectProps = (typeof projectsData)[number];

export default function Card({
    title,
    description,
    tags,
    image,
    githubUrl,
    appUrl,
}: ProjectProps) {
    return (
        <motion.div className="group mb-8 w-full last:mb-0">
            <section className="dark:bg-white/2 overflow-hidden rounded-lg border border-black/5 bg-gray-100 transition hover:bg-gray-200 dark:text-black dark:hover:border-black/10 dark:hover:bg-white/5">
                <div className="flex flex-col">
                    <Image
                        src={image}
                        alt="Project I worked on"
                        quality={95}
                        className="h-48 w-full rounded-t-lg object-cover"
                    />
                    <div className="p-5">
                        <h3 className="text-2xl font-semibold">{title}</h3>
                        <p className="mt-2 text-left leading-relaxed text-gray-700 dark:text-black">
                            {description}
                        </p>
                        <ul className="mt-4 flex flex-wrap gap-2">
                            {tags.map((tag, index) => (
                                <li key={index}>
                                    <img
                                        alt={tag}
                                        src={`https://img.shields.io/badge/-${tag}-222.svg?logo=${tag === 'JWT' ? 'JSON%20web%20tokens' : tag}&style=flat`}
                                    />
                                </li>
                            ))}
                        </ul>
                        <div className="mt-4 flex space-x-4">
                            <Link href={githubUrl} passHref legacyBehavior>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-lg border border-gray-700 px-2 py-2 text-sm text-gray-700 transition hover:bg-gray-700 hover:text-white"
                                >
                                    GitHub
                                </a>
                            </Link>
                            {appUrl && (
                                <Link href={appUrl} passHref legacyBehavior>
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="rounded-lg border border-gray-700 px-2 py-2 text-sm text-gray-700 transition hover:bg-gray-700 hover:text-white"
                                    >
                                        App URL
                                    </a>
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    );
}
