"use client";

import { motion } from "framer-motion";
import { links } from "@/lib/links";
import Link from "next/link";

export default function Header() {

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed left-1/2 rounded-full border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 top-2.5 sm:h-[3.25rem] sm:w-[25rem] w-80  h-[3rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav className="flex fixed left-1/2 -translate-x-1/2 py-2 sm:top-[1.7rem] top-[0.6rem] sm:h-[initial] h-12 sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative rounded-full hover:bg-gray-200 bg-opacity-75"
              key={link.url}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={"flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-white dark:hover:text-gray-950"}
                href={link.url}
              >
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}