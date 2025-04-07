import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "./short-project-data";

export const metadata: Metadata = {
  title: "Short Video Projects",
  description: "Short Video Projects",
};

export default function shortProjects() {
  return (
    <section>
      <h1 className="mb-8 text-2xl border-2 p-1 text-center rounded-md font-medium tracking-tight invert bg-white dark:bg-black cursor-default">Short-form Video Projects</h1>
      <div className="text-center">
        
        <h2 className="mb-8 text-xl tracking-tight border-2 rounded-md">Social Media Advertisements</h2>
        {projects.slice(0, 13).map((project, index) => (
          <Link
            key={index}
            href={project.url}
            className="flex flex-col space-y-1 mb-5 transition-opacity duration-200 hover:opacity-80 border-2 border-hidden hover:border-solid rounded-md hover:dark:border-gray-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-full flex flex-col sm:flex-row justify-center items-center sm:items-center space-y-1 sm:space-y-0 sm:space-x-2">
              <h2 className="text-black dark:text-white">{project.title}</h2>
              {/* <p className="text-neutral-600 dark:text-neutral-400 tracking-tight">
                {project.description}
              </p> */}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
