import { Footer } from "@/components/Footer";
import { MainHeader } from "@/components/MainHeader/MainHeader";
import { HomePage } from "@/components/pages/HomePage/HomePage";
import { ContactWidget } from "@/components/ui/ContactWidget/ContactWidget";
import { ScrollToTopBtn } from "@/components/ui/ScrollToTopBtn/ScrollToTopButton";
import { Container } from "@mantine/core";
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
  return (
    <Container size="xl" p={0} bg={"white.0"}>
      <MainHeader />
      <HomePage />
      <Footer />
      <ScrollToTopBtn />
      <ContactWidget />
    </Container>
  );
}
