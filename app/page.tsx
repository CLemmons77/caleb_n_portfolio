import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      <a href="/" target="_blank">
        <Image
          src="/profile.png"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        Personalized Greeting!
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti sequi beatae autem tempore maxime et debitis mollitia, consequatur exercitationem odio.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam maiores culpa molestiae, quidem distinctio nemo.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente temporibus sit ipsa, minus delectus ab explicabo et aliquid. A, explicabo?
        </p>
        <p>
          Deploy your Nextfolio site with Vercel in minutes and follow the set
          up instructions in Getting Started post.
        </p>
      </div>
    </section>
  );
}
