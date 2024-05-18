import { languages, frameworks, others } from "@/lib/skills";

export default function Skills() {
  return (
    <section className="max-w-[53rem] scroll-mt-20 mb-16">
      <h2 className="text-3xl font-medium mb-8 text-center">Skills</h2>
      <div className="mb-6 flex flex-wrap items-center">
        <h3 className="text-xl font-semibold w-40">Languages:</h3>
        <ul className="flex flex-wrap gap-4 text-gray-800 dark:text-gray-200">
          {languages.map((language, index) => (
            <li key={index} className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded">
              {language}
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-6 flex flex-wrap items-center">
        <h3 className="text-xl font-semibold w-40">Frameworks:</h3>
        <ul className="flex flex-wrap gap-4 text-gray-800 dark:text-gray-200">
          {frameworks.map((framework, index) => (
            <li key={index} className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded">
              {framework}
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-6 flex flex-wrap items-center">
        <h3 className="text-xl font-semibold w-40">Others:</h3>
        <ul className="flex flex-wrap gap-4 text-gray-800 dark:text-gray-200">
          {others.map((other, index) => (
            <li key={index} className="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded">
              {other}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}