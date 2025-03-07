import React from "react";
import type { Metadata } from "next";
import { ImageGrid } from "app/components/image-grid";

export const metadata: Metadata = {
  title: "Photos",
  description: "My Photos",
};

export default function Photos() {
  
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Photos</h1>
      <ImageGrid
        columns={3}
        images={[
          {
            src: "/photos/Portrait_1.png",
            alt: "",
          },
          {
            src: "/photos/IMG_4631.jpg",
            alt: "",
          },
          {
            src: "/photos/Portrait_3.png",
            alt: "",
          },
          {
            src: "/photos/Portrait_5.png",
            alt: "",
          },
          {
            src: "/photos/Silence 1.png",
            alt: "",
          },
          {
            src: "/photos/Silence 2.png",
            alt: "",
          },
          {
            src: "/photos/Silence 3.png",
            alt: "",
          },
          {
            src: "/photos/Silence 4.png",
            alt: "",
          },
          {
            src: "/photos/Silence 5.png",
            alt: "",
          },
          {
            src: "/photos/IMG_0137.jpg",
            alt: "",
          },
          {
            src: "/photos/IMG_0140.jpg",
            alt: "",
          },
          {
            src: "/photos/IMG_0141.jpg",
            alt: "",
          },
        ]}
      />

      <ImageGrid
        columns={2}
        images={[
          { src: "/photos/IMG_7778.JPG", alt: "" },
          { src: "/photos/IMG_7780.JPG", alt: "" },
          { src: "/photos/IMG_7783.JPG", alt: "" },
          { src: "/photos/IMG_7870.JPG", alt: "" },
          { src: "/photos/IMG_8015.JPG", alt: "" },
          { src: "/photos/IMG_8067.JPG", alt: "" },
        ]}
      />

      <ImageGrid
        columns={4}
        images={[
          { src: "/photos/katelyns grad 1.png", alt: "" },
          { src: "/photos/katelyns grad 22.png", alt: "" },
          { src: "/photos/katelyns grad 13.png", alt: "" },
          { src: "/photos/katelyns grad 8.png", alt: "" },
          { src: "/photos/katelyns grad 17.png", alt: "" },
          { src: "/photos/katelyns grad 16.png", alt: "" },
          { src: "/photos/katelyns grad 25.png", alt: "" },
          { src: "/photos/katelyns grad 26.png", alt: "" },
        ]}
      /> 

    </section>
  );
}
