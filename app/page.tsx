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
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Hey There!</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I am a photographer, video editor, and videographer who uses the Adobe
          editing suite.
        </p>
        <p>
          With professional experience in different genres of projects such as
          weddings, corporate events, TV advertisements, and social media
          advertisements, I have the skills and knowledge to bring your vision
          to life.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
          temporibus sit ipsa, minus delectus ab explicabo et aliquid. A,
          explicabo?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita nisi
          eveniet voluptatibus?
        </p>
      </div>
    </section>
  );
}
