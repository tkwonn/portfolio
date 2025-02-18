'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { useTranslations } from '@/hooks/useTranslations';
import profilePicture from '../../../public/assets/img/profile-picture.webp';

export default function Home() {
    const t = useTranslations();

    return (
        <main className="flex flex-col items-center px-4">
            <section
                id="home"
                className="mb-32 w-full max-w-[50rem] text-center"
            >
                {/* Profile Image */}
                <div className="mt-4 flex items-center justify-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: 'tween', duration: 0.2 }}
                    >
                        <Image
                            src={profilePicture}
                            alt="Taesok Kwon"
                            width={96}
                            height={96}
                            quality={95}
                            priority={true}
                            className="rounded-full border-[0.35rem] border-white object-cover shadow-xl"
                        />
                    </motion.div>
                </div>

                {/* SNS Badge */}
                <motion.h1
                    className="mb-10 mt-4 px-4"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <div className="flex justify-center space-x-4">
                        <div className="flex items-center justify-between text-sm">
                            <Link
                                href="https://www.linkedin.com/in/taesok-kwon"
                                target="_blank"
                                rel="noopener"
                                className="group flex items-center gap-1 rounded-full border px-3 py-1.5 transition hover:bg-white hover:text-black sm:px-4 sm:py-2"
                            >
                                <FaLinkedin className="h-5 w-5" />
                                LinkedIn
                            </Link>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                            <Link
                                href="https://github.com/tkwonn"
                                target="_blank"
                                rel="noopener"
                                className="group flex items-center gap-1 rounded-full border px-3 py-1.5 transition hover:bg-white hover:text-black sm:px-4 sm:py-2"
                            >
                                <FaGithub className="h-5 w-5" />
                                GitHub
                            </Link>
                        </div>
                    </div>
                </motion.h1>

                {/* Panel Layout */}
                <div className="mx-auto w-full max-w-xl">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        {t.links.slice(1).map((link, i) => {
                            const baseStyle =
                                'flex items-center justify-between px-6 py-4 rounded-[2rem] shadow-md';
                            let bgColor = '';
                            let textColor = 'text-black';
                            let colSpan = '';

                            switch (i) {
                                case 0:
                                    bgColor = 'bg-white';
                                    textColor = 'text-black';
                                    break;
                                case 1:
                                    bgColor = 'bg-gray-700';
                                    textColor = 'text-white';
                                    break;
                                case 2:
                                    bgColor = 'bg-yellow-300';
                                    textColor = 'text-black';
                                    colSpan = 'md:col-span-2';
                                    break;
                            }

                            return (
                                <motion.div
                                    key={link.name}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`${baseStyle} ${bgColor} ${textColor} ${colSpan}`}
                                >
                                    <Link href={link.path} className="flex-1">
                                        <p className="text-md text-start font-semibold">
                                            {link.name}
                                        </p>
                                    </Link>
                                    <div className="ml-4">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="h-6 w-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M13.5 4.5l6 6m0 0l-6 6m6-6H4.5"
                                            />
                                        </svg>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </main>
    );
}
