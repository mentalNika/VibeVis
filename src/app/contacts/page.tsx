import { ContactsPage } from "@/components/pages/ContactsPage/ContactsPage";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "VibeVis | Контакты — 3D визуализатор Носков Александр",
  description:
    "Связаться с визуализатором для заказа или консультации: профессиональные проекты жилых и коммерческих пространств с детальными фотореалистичными рендерами. Полные циклы разработки от концепции до реализации",
  keywords: [
    "дизайн интерьера",
    "3D визуализация",
    "интерьерная визуализация",
    "рендер интерьера",
    "услуги дизайнера интерьеров",
    "портфолио",
  ],
  openGraph: {
    title: "VibeVis | Контакты — 3D визуализатор Носков Александр",
    description:
      "Связаться с визуализатором для заказа или консультации: профессиональные проекты жилых и коммерческих пространств с детальными фотореалистичными рендерами. Полные циклы разработки от концепции до реализации",
    url: "https://vibe-vis.vercel.app/contacts",
    siteName: "VibeVis",
    images: [
      {
        url: "/meContacts.jpg",
        width: 1200,
        height: 630,
        alt: "VibeVis Носков Александр",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VibeVis | Контакты — 3D визуализатор Носков Александр",
    description:
      "Связаться с визуализатором для заказа или консультации: профессиональные проекты жилых и коммерческих пространств с детальными фотореалистичными рендерами. Полные циклы разработки от концепции до реализации",
    images: ["meContacts.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function page() {
  return <ContactsPage />;
}
