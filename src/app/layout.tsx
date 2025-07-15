import "@mantine/core/styles.css";
import "./globals.scss";
import { Container, MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import { Ubuntu, Forum } from "next/font/google";
import { Footer } from "@/components/Footer";
import { MainHeader } from "@/components/MainHeader/MainHeader";
import { ContactWidget } from "@/components/ui/ContactWidget/ContactWidget";
import { ScrollToTopBtn } from "@/components/ui/ScrollToTopBtn/ScrollToTopButton";
import { Metadata } from "next";

export const UbuntuFont = Ubuntu({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "700"],
  variable: "--ubuntu",
});
export const ForumFont = Forum({
  subsets: ["latin", "cyrillic"],
  weight: ["400"],
  variable: "--forum",
});

export const metadata: Metadata = {
  title: "VibeVis | 3D визуализатор интерьера Носков Александр",
  description:
    "Дизайны интерьеров и 3D-визуализаций: профессиональные проекты жилых и коммерческих пространств с детальными фотореалистичными рендерами. Полные циклы разработки от концепции до реализации",
  keywords: [
    "дизайн интерьера",
    "3D визуализация",
    "интерьерная визуализация",
    "рендер интерьера",
    "услуги дизайнера интерьеров",
    "портфолио",
  ],
  openGraph: {
    title: "VibeVis | 3D визуализатор интерьера Носков Александр",
    description:
      "Дизайны интерьеров и 3D-визуализаций: профессиональные проекты жилых и коммерческих пространств с детальными фотореалистичными рендерами. Полные циклы разработки от концепции до реализации",
    url: "https://vibe-vis.vercel.app/",
    siteName: "VibeVis",
    images: [
      {
        url: "/preview.jpg",
        width: 1200,
        height: 630,
        alt: "VibeVis Носков Александр",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VibeVis | 3D визуализатор интерьера Носков Александр",
    description:
      "Дизайны интерьеров и 3D-визуализаций: профессиональные проекты жилых и коммерческих пространств с детальными фотореалистичными рендерами. Полные циклы разработки от концепции до реализации",
    images: ["/preview.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        style={{
          fontFamily: "Ubuntu, Forum, sans-serif",
        }}
      >
        <MantineProvider theme={theme}>
          <Container size="xl" p={0} bg={"white.0"}>
            <MainHeader />
            {children}
            <Footer />
            <ScrollToTopBtn />
            <ContactWidget />
          </Container>
        </MantineProvider>
      </body>
    </html>
  );
}
