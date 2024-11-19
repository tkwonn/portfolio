'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { links } from '@/lib/links';
import profilePicture from '../../public/profile-picture.jpg';

export default function Home() {
    return (
        <main className="flex flex-col items-center px-4">
            <section id="home" className="mb-28 max-w-[50rem] text-center">
                <div className="flex items-center justify-center">
                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                type: 'tween',
                                duration: 0.2,
                            }}
                        >
                            <Image
                                src={profilePicture}
                                alt="Taesok Kwon"
                                width="192"
                                height="192"
                                quality="95"
                                priority={true}
                                className="h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
                            />
                        </motion.div>
                    </div>
                </div>

                <motion.h1
                    className="mb-10 mt-4 px-4"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <div className="flex justify-center space-x-4">
                        <Link
                            href="https://www.linkedin.com/in/taesok-kwon"
                            target="_blank"
                            rel="noopener"
                        >
                            <img
                                alt="LinkedIn"
                                src="https://img.shields.io/badge/LinkedIn-Taesok Kwon-blue?style=flat-square&logo=linkedin"
                            />
                        </Link>
                        <Link
                            href="https://github.com/tkwonn"
                            target="_blank"
                            rel="noopener"
                        >
                            <img
                                alt="GitHub"
                                src="https://img.shields.io/badge/GitHub-tkwonn-black?style=flat-square&logo=github"
                            />
                        </Link>
                    </div>
                    <p className="py-4 font-bold"></p>
                </motion.h1>

                <div className="flex flex-wrap justify-center gap-6 py-4">
                    {links.slice(1).map((link) => (
                        <motion.div
                            key={link.name}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="h-auto w-full overflow-hidden rounded-lg border border-white border-opacity-40 bg-white bg-opacity-80 p-6 text-center shadow-lg backdrop-blur-[0.5rem] sm:h-60 sm:w-72 dark:border-black/40 dark:bg-gray-950 dark:bg-opacity-75 dark:shadow-black/[0.03]"
                        >
                            <Link href={link.path}>
                                <div className="flex h-full flex-col items-center justify-center">
                                    <h2 className="mb-2 text-xl font-semibold text-gray-800 dark:text-white">
                                        {link.name}
                                    </h2>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        {link.description}
                                    </p>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>
        </main>
    );
}
