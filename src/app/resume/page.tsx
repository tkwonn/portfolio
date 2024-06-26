import React from 'react';
import { HiDownload } from "react-icons/hi";
import Skills from '@/components/Skills';
import Experiences from '@/components/Experiences';

export default function Resume() {
  return (
    <main className="flex flex-col items-center px-4 mb-20">
      <section className="max-w-[50rem] text-center mb-4">
        <h2 className="text-4xl font-bold mb-8">Resume</h2>
        <div className="flex justify-center mb-8">
          <a
            className="group bg-gray-100 dark:bg-gray-800 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-gray-300 dark:border-gray-700 dark:text-white"
            href="/resume-ja.pdf"
            download
          >
            Download Resume
            <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
          </a>
        </div>
      </section>
      <Skills />
      <Experiences />
    </main>
  )
}