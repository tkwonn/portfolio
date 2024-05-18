import React from 'react';
import { HiDownload } from "react-icons/hi";
import Skills from '@/components/Skills';
import Divider from '@/components/Divider';
import Experiences from '@/components/Experiences';

export default function Resume() {
  return (
    <main className="flex flex-col items-center px-4 mb-20">
      <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
        <h2 className="text-4xl font-bold mb-8">Resume</h2>
        <div className="flex justify-center mb-8">
          <a
            className="group bg-gray-100 dark:bg-gray-800 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-gray-300 dark:border-gray-700"
            href="/CV.pdf"
            download
          >
            Download CV
            <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
          </a>
        </div>
      </section>
      <Divider />
      <Skills />
      <Experiences />
    </main>
  )
}