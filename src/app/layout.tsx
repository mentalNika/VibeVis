import "@mantine/core/styles.css";
import "./globals.scss";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import { Ubuntu } from "next/font/google";

export const UbuntuFont = Ubuntu({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "700"],
  variable: "--ubuntu",
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
      <body style={{ fontFamily: "Ubuntu, sans-serif" }}>
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  );
}
