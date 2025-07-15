import { ConditionsPage } from "@/components/pages/ConditionsPage/ConditionsPage";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "VibeVis | Условия работы",
  description:
    "Ознакомьтесь с условиями сотрудничества: этапы работы, оплата, сроки, техническое задание и процесс согласования визуализаций",
  keywords: [
    "условия работы VibeVis",
    "этапы сотрудничества",
    "оплата визуализации",
    "сроки выполнения 3D-визуализации",
    "техническое задание дизайнеру",
  ],
  openGraph: {
    title: "VibeVis | Условия работы",
    description:
      "Полная информация об этапах работы, сроках, оплате и правилах взаимодействия при заказе 3D-визуализаций.",
    url: "https://vibe-vis.vercel.app/conditions",
    siteName: "VibeVis",
    images: [
      {
        url: "/conditions/1.webp",
        width: 1200,
        height: 630,
        alt: "Условия сотрудничества с VibeVis",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VibeVis | Условия работы",
    description:
      "Этапы и правила сотрудничества при заказе визуализаций интерьера у Александра Носкова.",
    images: [
      {
        url: "/preview.jpg",
        alt: "Условия работы VibeVis",
      },
    ],
  },
};

export default function page() {
  return <ConditionsPage />;
}
