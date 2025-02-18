'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { IoMdHome } from 'react-icons/io';
import { useTranslations } from '@/hooks/useTranslations';

export default function Header() {
    const t = useTranslations();
    const pathname = usePathname();
    const router = useRouter();
    const isJapanese = pathname.startsWith('/ja');

    const switchLanguage = (lang: 'en' | 'ja') => {
        if (lang === 'en' && isJapanese) {
            router.push(pathname.replace('/ja', '/en'));
        } else if (lang === 'ja' && !isJapanese) {
            router.push(pathname.replace('/en', '/ja'));
        }
    };

    const homeLink = t.links[0];
    const otherLinks = t.links.slice(1);

    return (
        <>
            <header className="fixed left-1/2 top-8 z-[999] -translate-x-1/2">
                <motion.div
                    className="flex w-auto max-w-[90vw] items-center justify-center gap-4 overflow-x-auto rounded-full border border-black/40 border-opacity-85 bg-gray-950 bg-opacity-75 px-2 py-2 shadow-lg shadow-black/[0.03] sm:px-4"
                    initial={{ y: -30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                >
                    <nav className="flex items-center px-3 py-1 text-sm text-gray-200">
                        <Link
                            href={homeLink.path}
                            className="flex items-center hover:text-white"
                        >
                            <IoMdHome className="h-5 w-4 sm:h-5 sm:w-5" />
                        </Link>

                        <div className="flex items-center gap-3 text-xs sm:gap-8 sm:text-sm">
                            <span className="ml-4 text-gray-400">|</span>
                            {otherLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    href={link.path}
                                    className="whitespace-nowrap hover:text-white"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </nav>
                </motion.div>
            </header>

            <div className="fixed right-4 top-11 z-[999] flex items-center gap-1 text-xs sm:right-10 sm:gap-2 sm:text-sm">
                <button
                    onClick={() => switchLanguage('en')}
                    disabled={!isJapanese}
                    className={`text-sm font-bold focus:outline-none ${
                        !isJapanese ? 'text-gray-700' : 'text-gray-400'
                    }`}
                >
                    EN
                </button>

                <span className="text-xs text-gray-400">|</span>

                <button
                    onClick={() => switchLanguage('ja')}
                    disabled={isJapanese}
                    className={`text-sm font-bold focus:outline-none ${
                        isJapanese ? 'text-gray-700' : 'text-gray-400'
                    }`}
                >
                    JP
                </button>
            </div>
        </>
    );
}
