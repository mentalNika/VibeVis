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

export const portfolioData: PortfolioItem[] = [
  {
    id: 1,
    title: "Детская комната",
    preview: "/portfolio/children/1.jpg",
    images: [
      "/portfolio/children/2.jpg",
      "/portfolio/children/3.jpg",
      "/portfolio/children/4.jpg",
      "/portfolio/children/5.jpg",
      "/portfolio/children/6.jpg",
      "/portfolio/children/7.jpg",
      "/portfolio/children/8.jpg",
    ],
  },
  {
    id: 2,
    title: "Кухня",
    preview: "/portfolio/kitchen/1.jpg",
    images: [
      "/portfolio/kitchen/1.jpg",
      "/portfolio/kitchen/2.jpg",
      "/portfolio/kitchen/3.jpg",
      "/portfolio/kitchen/4.jpg",
      "/portfolio/kitchen/5.jpg",
      "/portfolio/kitchen/6.jpg",
      "/portfolio/kitchen/7.jpg",
      "/portfolio/kitchen/8.jpg",
      "/portfolio/kitchen/9.jpg",
      "/portfolio/kitchen/10.jpg",
    ],
  },
  {
    id: 3,
    title: "Гостиная",
    preview: "/portfolio/livingroom/1.jpg",
    images: [
      "/portfolio/livingroom/1.jpg",
      "/portfolio/livingroom/2.jpg",
      "/portfolio/livingroom/3.jpg",
      "/portfolio/livingroom/4.jpg",
      "/portfolio/livingroom/5.jpg",
      "/portfolio/livingroom/6.jpg",
      "/portfolio/livingroom/7.jpg",
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
