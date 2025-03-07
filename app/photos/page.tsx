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
        columns={4}
        images={[
          { src: "/photos/Portrait_1.png", alt: "" },
          { src: "/photos/Portrait_4.png", alt: "" },
          { src: "/photos/Portrait_3.png", alt: "" },
          { src: "/photos/Portrait_5.png", alt: "" },
        ]}
      />
      <ImageGrid
        columns={3}
        images={[
          {
            src: "/photos/IMG_4628.jpg",
            alt: "",
          },
          {
            src: "/photos/IMG_4629.jpg",
            alt: "",
          },
          {
            src: "/photos/IMG_4630.jpg",
            alt: "",
          },
          {
            src: "/photos/IMG_4631.jpg",
            alt: "",
          },
          {
            src: "/photos/IMG_4632.jpg",
            alt: "",
          },
          {
            src: "/photos/IMG_4633.jpg",
            alt: "",
          },
          {
            src: "/photos/IMG_4634.jpg",
            alt: "",
          },
          {
            src: "/photos/IMG_4651.jpg",
            alt: "",
          },
          {
            src: "/photos/IMG_4652.jpg",
            alt: "",
          },
          {
            src: "/photos/IMG_4653.jpg",
            alt: "",
          },
          {
            src: "/photos/IMG_4640.jpg",
            alt: "",
          },
          {
            src: "/photos/IMG_4645.jpg",
            alt: "",
          },
          {
            src: "/photos/IMG_4646.jpg",
            alt: "",
          },
          {
            src: "/photos/IMG_4647.jpg",
            alt: "",
          },
          {
            src: "/photos/IMG_4644.jpg",
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
          { src: "/photos/IMG_7908.JPG", alt: "" },
          { src: "/photos/IMG_7887.JPG", alt: "" },
          { src: "/photos/IMG_8119.JPG", alt: "" },
          { src: "/photos/IMG_8063.JPG", alt: "" },
          { src: "/photos/IMG_7860.JPG", alt: "" },
          { src: "/photos/IMG_8093.JPG", alt: "" },
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
          { src: "/photos/katelyns grad 19.png", alt: "" },
          { src: "/photos/katelyns grad 21.png", alt: "" },
          { src: "/photos/katelyns grad 23.png", alt: "" },
          { src: "/photos/katelyns grad 24.png", alt: "" },
          { src: "/photos/katelyns grad 12.png", alt: "" },
          { src: "/photos/katelyns grad 27.png", alt: "" },
          { src: "/photos/katelyns grad 4.png", alt: "" },
          { src: "/photos/katelyns grad 7.png", alt: "" },
        ]}
      />

      <ImageGrid
        columns={2}
        images={[
          { src: "/photos/IMG_9652.JPG", alt: "" },
          { src: "/photos/IMG_9790.JPG", alt: "" },
          { src: "/photos/IMG_9570.JPG", alt: "" },
          { src: "/photos/IMG_9573.JPG", alt: "" },
          { src: "/photos/IMG_9580.JPG", alt: "" },
          { src: "/photos/IMG_9602.JPG", alt: "" },
          { src: "/photos/IMG_9616.JPG", alt: "" },
          { src: "/photos/IMG_9666.JPG", alt: "" },
          { src: "/photos/IMG_9670.JPG", alt: "" },
          { src: "/photos/IMG_9777.JPG", alt: "" },
          { src: "/photos/IMG_9700.JPG", alt: "" },
          { src: "/photos/IMG_9707.JPG", alt: "" },
        ]}
      />
    </section>
  );
}
