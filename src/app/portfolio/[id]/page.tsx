import { GalleryPage } from "@/components/pages/GalleryPage/GalleryPage";
import { portfolioData } from "@/components/pages/PortfolioPage/PortfolioPage";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const project = portfolioData.find((item) => item.id === Number(params.id));

  if (!project) {
    return {
      title: "Проект не найден",
    };
  }

  return {
    title: `VibeVis | ${project.title}`,
    description: `Проект: ${project.title} — визуализация интерьера`,
    openGraph: {
      title: `VibeVis | ${project.title}`,
      description: `Проект: ${project.title} — визуализация интерьера`,
      images: [
        {
          url: project.images[0],
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
  };
}

export default function page() {
  return <GalleryPage />;
}
