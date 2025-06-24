import { HomePage } from "@/components/pages/HomePage/HomePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Главная",
  twitter: {
    title: "Главная",
  },
  openGraph: {
    title: "Главная",
  },
};

export default function Home() {
  return <HomePage />;
}
