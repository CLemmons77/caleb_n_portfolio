import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "./project-data";

export const metadata: Metadata = {
  title: "Projects",
  description: "Nextfolio Projects",
};

export default function Projects() {
  return (
    <section>
      <h1 className="mb-8 text-2xl border-2 p-1 text-center rounded-md font-medium tracking-tight">Projects</h1>
      <div>
        <h2 className="mb-8 text-xl text-center tracking-tight border-b-2">Corporate</h2>
        {projects.slice(0, 6).map((project, index) => (
          <Link
            key={index}
            href={project.url}
            className="flex flex-col space-y-1 mb-5 transition-opacity duration-200 hover:opacity-80 hover:border-b-2 hover:border-gray-700 hover:dark:border-gray-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-2">
              <h2 className="text-black dark:text-white">{project.title}</h2>
              <p className="text-neutral-600 dark:text-neutral-400 tracking-tight">
                {project.description}
              </p>
            </div>
          </Link>
        ))}
        <h2 className="mb-8 text-xl text-center tracking-tight border-b-2">TV Advertisements</h2>
        {projects.slice(6, 8).map((project, index) => (
          <Link
            key={index}
            href={project.url}
            className="flex flex-col space-y-1 mb-5 transition-opacity duration-200 hover:opacity-80 hover:border-b-2 hover:border-gray-700 hover:dark:border-gray-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-2">
              <h2 className="text-black dark:text-white">{project.title}</h2>
              <p className="text-neutral-600 dark:text-neutral-400 tracking-tight">
                {project.description}
              </p>
            </div>
          </Link>
        ))}
        <h2 className="mb-8 text-xl text-center tracking-tight border-b-2">Wedding</h2>
        {projects.slice(8, 9).map((project, index) => (
          <Link
            key={index}
            href={project.url}
            className="flex flex-col space-y-1 mb-5 transition-opacity duration-200 hover:opacity-80 hover:border-b-2 hover:border-gray-700 hover:dark:border-gray-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-2">
              <h2 className="text-black dark:text-white">{project.title}</h2>
              <p className="text-neutral-600 dark:text-neutral-400 tracking-tight">
                {project.description}
              </p>
            </div>
          </Link>
        ))}
        <h2 className="mb-8 text-xl text-center tracking-tight border-b-2">Documentaries</h2>
        {projects.slice(9, 12).map((project, index) => (
          <Link
            key={index}
            href={project.url}
            className="flex flex-col space-y-1 mb-5 transition-opacity duration-200 hover:opacity-80 hover:border-b-2 hover:border-gray-700 hover:dark:border-gray-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-2">
              <h2 className="text-black dark:text-white">{project.title}</h2>
              <p className="text-neutral-600 dark:text-neutral-400 tracking-tight">
                {project.description}
              </p>
            </div>
          </Link>
        ))}
        <h2 className="mb-8 text-xl text-center tracking-tight border-b-2">Animations</h2>
        {projects.slice(12, 14).map((project, index) => (
          <Link
            key={index}
            href={project.url}
            className="flex flex-col space-y-1 mb-5 transition-opacity duration-200 hover:opacity-80 hover:border-b-2 hover:border-gray-700 hover:dark:border-gray-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-2">
              <h2 className="text-black dark:text-white">{project.title}</h2>
              <p className="text-neutral-600 dark:text-neutral-400 tracking-tight">
                {project.description}
              </p>
            </div>
          </Link>
        ))}
        <h2 className="mb-8 text-xl text-center tracking-tight border-b-2">Social Media Advertisements</h2>
        {projects.slice(14, 25).map((project, index) => (
          <Link
            key={index}
            href={project.url}
            className="flex flex-col space-y-1 mb-5 transition-opacity duration-200 hover:opacity-80 hover:border-b-2 hover:border-gray-700 hover:dark:border-gray-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-2">
              <h2 className="text-black dark:text-white">{project.title}</h2>
              <p className="text-neutral-600 dark:text-neutral-400 tracking-tight">
                {project.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
