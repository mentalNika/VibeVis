import "@mantine/core/styles.css";
import "./globals.scss";
import { Container, MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import { Ubuntu, Forum } from "next/font/google";
import { Footer } from "@/components/Footer";
import { MainHeader } from "@/components/MainHeader/MainHeader";
import { ContactWidget } from "@/components/ui/ContactWidget/ContactWidget";
import { ScrollToTopBtn } from "@/components/ui/ScrollToTopBtn/ScrollToTopButton";

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

export const metadata = {
  // metadataBase: new URL(process.env.NEXT_PUBLIC_HOST as string),
  title: {
    template: "VibeViz | %s",
    default: "VibeViz",
  },
  description: "Виз",

  openGraph: {
    title: {
      template: "VibeViz | %s",
      default: "VibeViz",
    },
    description: "Виз",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_HOST}/images/helmet.png`,
        width: 800,
        height: 600,
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    title: {
      template: "VibeViz | %s",
      default: "VibeViz",
    },
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_HOST}/images/helmet.png`,
        width: 800,
        height: 600,
      },
    ],
    description: "Виз",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body style={{ fontFamily: "Ubuntu, Forum, sans-serif" }}>
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
