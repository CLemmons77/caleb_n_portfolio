import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      <a href="/" target="_blank">
        <Image
          src="/photos/Calebs Headshot.png"
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
          Whether it’s capturing authentic moments or crafting cinematic edits,
          my passion lies in creating compelling visuals that resonate. From the
          first frame to the final cut, I focus on making each project uniquely
          powerful and visually stunning.
        </p>
        <p>
          With a sharp eye for detail and a commitment to quality, I bring
          creativity and professionalism to every shoot and edit. No matter the
          project size, I deliver polished content that connects with audiences
          and exceeds expectations.
        </p>
      </div>
    </section>
  );
}
