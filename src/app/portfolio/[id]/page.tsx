import { GalleryPage } from "@/components/pages/GalleryPage/GalleryPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "VibeVis | Портфолио проектов",
  description:
    "Галерея 3D-визуализаций интерьеров: квартиры, офисы, коммерческие пространства",
  keywords: [
    "портфолио дизайна",
    "3D рендеры",
    "проекты интерьера",
    "визуализация помещений",
  ],
  openGraph: {
    title: "VibeVis | Портфолио проектов",
    description:
      "Галерея 3D-визуализаций интерьеров: квартиры, офисы, коммерческие пространства",
    url: "https://vibe-vis.vercel.app/portfolio",
    siteName: "VibeVis",
    images: [
      {
        url: "/portfolio-preview.jpg",
        width: 1200,
        height: 630,
        alt: "Портфолио VibeVis",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VibeVis | Портфолио проектов",
    description:
      "Галерея 3D-визуализаций интерьеров: квартиры, офисы, коммерческие пространства",
    images: [
      {
        url: "/portfolio-preview.jpg",
        alt: "Портфолио VibeVis",
      },
    ],
  },
};

export default function page() {
  return <GalleryPage />;
}
