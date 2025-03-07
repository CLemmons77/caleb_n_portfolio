import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      <a href="/" target="_blank">
        <Image
          src="/photos/Portrait_4.png"
          alt="Profile photo"
          className="rounded-xl bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 hover:scale-105 transition-all duration-300 hover:z-50 hover:ring-2 hover:ring-black hover:dark:ring-slate-50"
          unoptimized
          width={180}
          height={200}
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita nisi eveniet voluptatibus?
        </p>
      </div>
    </section>
  );
}
