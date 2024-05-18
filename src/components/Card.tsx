"use client";

import { projectsData } from '@/lib/projects';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from "next/link";

type ProjectProps = (typeof projectsData)[number];

export default function Card({ title, description, tags, imageUrl, githubUrl, liveUrl }: ProjectProps) {
  return (
    <motion.div
      className="group mb-8 sm:mb-8 last:mb-0 w-full sm:w-[calc(50%-16px)] px-4"
    >
      <section className="bg-gray-100 border border-black/5 rounded-lg overflow-hidden transition hover:bg-gray-200 dark:text-black dark:bg-white/2 dark:hover:bg-white/5 dark:hover:border-black/10">
        <div className="flex flex-col">
          <Image
            src={imageUrl}
            alt="Project I worked on"
            quality={95}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <div className="p-5">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="mt-2 leading-relaxed text-gray-700 dark:text-black">
              {description}
            </p>
            <ul className="flex flex-wrap mt-4 gap-2">
              {tags.map((tag, index) => (
                <li key={index}>
                  <img
                    alt={tag}
                    src={`https://img.shields.io/badge/-${tag}-222.svg?logo=${tag}&style=flat`}
                  />
                </li>
              ))}
            </ul>
            <div className="mt-4 flex space-x-4">
              <Link href={githubUrl} passHref legacyBehavior>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-gray-700 text-gray-700 px-2 py-2 text-sm rounded-lg transition hover:bg-gray-700 hover:text-white"
                >
                  GitHub
                </a>
              </Link>
              <Link href={liveUrl} passHref legacyBehavior>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-gray-700 text-gray-700 px-2 py-2 text-sm rounded-lg transition hover:bg-gray-700 hover:text-white"
                >
                  Live Demo
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}