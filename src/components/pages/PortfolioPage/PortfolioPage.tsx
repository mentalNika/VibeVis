import { AnimateOnAppear } from "@/components/AnimateOnAppear";
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
    title: "Детская комната для мальчика",
    preview: "/portfolio/children/1.webp",
    images: [
      "/portfolio/children/1.webp",
      "/portfolio/children/3.webp",
      "/portfolio/children/4.webp",
      "/portfolio/children/5.webp",
      "/portfolio/children/2.webp",
      "/portfolio/children/6.webp",
      "/portfolio/children/7.webp",
    ],
  },
  {
    id: 2,
    title: "Квартира-студия в стиле LOFT",
    preview: "/portfolio/kitchen-livroom/1.webp",
    images: [
      "/portfolio/kitchen-livroom/1.webp",
      "/portfolio/kitchen-livroom/2.webp",
      "/portfolio/kitchen-livroom/3.webp",
      "/portfolio/kitchen-livroom/4.webp",
      "/portfolio/kitchen-livroom/5.webp",
      "/portfolio/kitchen-livroom/6.webp",
      "/portfolio/kitchen-livroom/7.webp",
      "/portfolio/kitchen-livroom/8.webp",
      "/portfolio/kitchen-livroom/10.webp",
    ],
  },
  {
    id: 3,
    title: "Кухня, совмещенная с гостиной",
    preview: "/portfolio/livingroom/1.webp",
    images: [
      "/portfolio/livingroom/1.webp",
      "/portfolio/livingroom/2.webp",
      "/portfolio/livingroom/4.webp",
      "/portfolio/livingroom/5.webp",
      "/portfolio/livingroom/3.webp",
      "/portfolio/livingroom/6.webp",
      "/portfolio/livingroom/7.webp",
    ],
  },
  {
    id: 4,
    title: "Отель",
    preview: "/portfolio/hotel/1.webp",
    images: [
      "/portfolio/hotel/1.webp",
      "/portfolio/hotel/2.webp",
      "/portfolio/hotel/3.webp",
      "/portfolio/hotel/4.webp",
    ],
  },
  {
    id: 5,
    title: "Рабочий кабинет",
    preview: "/portfolio/office/1.webp",
    images: [
      "/portfolio/office/1.webp",
      "/portfolio/office/2.webp",
      "/portfolio/office/3.webp",
      "/portfolio/office/4.webp",
    ],
  },
  {
    id: 6,
    title: "Просторная гостиная комната",
    preview: "/portfolio/livingroom2/1.webp",
    images: [
      "/portfolio/livingroom2/1.webp",
      "/portfolio/livingroom2/2.webp",
      "/portfolio/livingroom2/3.webp",
      "/portfolio/livingroom2/4.webp",
    ],
  },
  {
    id: 7,
    title: "Спальня, совмещенная с гардеробом",
    preview: "/portfolio/bedroom/1.webp",
    images: [
      "/portfolio/bedroom/1.webp",
      "/portfolio/bedroom/2.webp",
      "/portfolio/bedroom/3.webp",
      "/portfolio/bedroom/4.webp",
    ],
  },
  {
    id: 8,
    title: "Кухня-гостиная в светлых тонах",
    preview: "/portfolio/bedroom2/1.webp",
    images: [
      "/portfolio/bedroom2/1.webp",
      "/portfolio/bedroom2/2.webp",
      "/portfolio/bedroom2/3.webp",
      "/portfolio/bedroom2/4.webp",
      "/portfolio/bedroom2/5.webp",
      "/portfolio/bedroom2/6.webp",
      "/portfolio/bedroom2/7.webp",
      "/portfolio/bedroom2/8.webp",
      "/portfolio/bedroom2/9.webp",
      "/portfolio/bedroom2/10.webp",
    ],
  },
  {
    id: 9,
    title: "Детская комната",
    preview: "/portfolio/children2/1.webp",
    images: [
      "/portfolio/children2/1.webp",
      "/portfolio/children2/5.webp",
      "/portfolio/children2/3.webp",
      "/portfolio/children2/4.webp",
    ],
  },
];

export const PortfolioPage: FC = () => {
  return (
    <>
      <LogoBlock />
      <AnimateOnAppear>
        <Center px={{ base: 10, xl: 220 }} py={{ base: 30, md: 0 }}>
          <PortfolioCards data={portfolioData} />
        </Center>
      </AnimateOnAppear>
    </>
  );
};
