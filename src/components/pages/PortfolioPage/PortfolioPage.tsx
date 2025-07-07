import { PortfolioCards } from "@/components/PortfolioCards/PortfolioCards";
import { LogoBlock } from "@/components/ui/LogoBlock/LogoBlock";
import { Center } from "@mantine/core";
import React, { FC } from "react";

export interface PortfolioItem {
  id: number;
  title: string;
  preview: string;
  images: string[];
}

const portfolioData: PortfolioItem[] = [
  {
    id: 1,
    title: "Визуализация интерьера кухни",
    preview: "/portfolio/1.jpg",
    images: [
      "/portfolio/1.jpg",
      "/portfolio/1.jpg",
      "/portfolio/1.jpg",
      "/portfolio/1.jpg",
      "/portfolio/1.jpg",
      "/portfolio/1.jpg",
      "/portfolio/1.jpg",
      "/portfolio/1.jpg",
      "/portfolio/1.jpg",
      "/portfolio/1.jpg",
    ],
  },
  {
    id: 2,
    title: "Экстерьер частного дома",
    preview: "/portfolio/2.jpg",
    images: [
      "/portfolio/2.jpg",
      "/portfolio/2.jpg",
      "/portfolio/2.jpg",
      "/portfolio/2.jpg",
      "/portfolio/2.jpg",
      "/portfolio/2.jpg",
      "/portfolio/2.jpg",
      "/portfolio/2.jpg",
      "/portfolio/2.jpg",
      "/portfolio/2.jpg",
    ],
  },
  {
    id: 3,
    title: "Экстерьер частного дома",
    preview: "/portfolio/2.jpg",
    images: [
      "/portfolio/2.jpg",
      "/portfolio/2.jpg",
      "/portfolio/2.jpg",
      "/portfolio/2.jpg",
      "/portfolio/2.jpg",
      "/portfolio/2.jpg",
      "/portfolio/2.jpg",
      "/portfolio/2.jpg",
      "/portfolio/2.jpg",
      "/portfolio/2.jpg",
    ],
  },
  {
    id: 4,
    title: "Экстерьер частного дома",
    preview: "/portfolio/2.jpg",
    images: [
      "/portfolio/2.jpg",
      "/portfolio/2.jpg",
      "/portfolio/2.jpg",
      "/portfolio/2.jpg",
      "/portfolio/2.jpg",
      "/portfolio/2.jpg",
      "/portfolio/2.jpg",
      "/portfolio/2.jpg",
      "/portfolio/2.jpg",
      "/portfolio/2.jpg",
    ],
  },
  {
    id: 5,
    title: "Экстерьер частного дома",
    preview: "/portfolio/2.jpg",
    images: [
      "/portfolio/2.jpg",
      "/portfolio/2.jpg",
      "/portfolio/2.jpg",
      "/portfolio/2.jpg",
      "/portfolio/2.jpg",
      "/portfolio/2.jpg",
      "/portfolio/2.jpg",
      "/portfolio/2.jpg",
      "/portfolio/2.jpg",
      "/portfolio/2.jpg",
    ],
  },
  {
    id: 6,
    title: "Экстерьер частного дома",
    preview: "/portfolio/2.jpg",
    images: [
      "/portfolio/2.jpg",
      "/portfolio/2.jpg",
      "/portfolio/2.jpg",
      "/portfolio/2.jpg",
      "/portfolio/2.jpg",
      "/portfolio/2.jpg",
      "/portfolio/2.jpg",
      "/portfolio/2.jpg",
      "/portfolio/2.jpg",
      "/portfolio/2.jpg",
    ],
  },
];

export const PortfolioPage: FC = () => {
  return (
    <>
      <LogoBlock />
      <Center px={{ base: 10, xl: 220 }} py={{ base: 30, md: 0 }}>
        <PortfolioCards data={portfolioData} />
      </Center>
    </>
  );
};
