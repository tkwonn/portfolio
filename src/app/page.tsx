"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import profilePicture from "../../public/profile-picture.jpg";
import { links } from "@/lib/links";
import Link from "next/link";

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
                type: "tween",
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
                className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
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
                width="140"
                height="20"
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
                width="140"
                height="20"
              />
            </Link>
          </div>
          {/* <p className="py-4 font-bold"></p> */}
        </motion.h1>

        <div className="flex flex-wrap justify-center py-4 gap-6">
          {links.slice(1).map((link) => (
            <motion.div
              key={link.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-72 h-auto sm:h-60 bg-white shadow-lg rounded-lg overflow-hidden p-6 text-center border border-white border-opacity-40 bg-opacity-80 backdrop-blur-[0.5rem] dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75 dark:shadow-black/[0.03]"
            >
              <Link href={link.url}>
                <div className="flex flex-col justify-center items-center h-full">
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