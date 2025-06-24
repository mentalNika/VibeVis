"use client";
import {
  Box,
  Burger,
  Divider,
  Drawer,
  Group,
  ScrollArea,
  Image,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./MainHeader.module.scss";
import {
  IconBrandTelegram,
  IconBrandWhatsappFilled,
  IconCircleArrowUpRightFilled,
} from "@tabler/icons-react";
import { FC, useEffect, useState } from "react";

const socialLinks = [
  {
    id: 1,
    href: "https://t.me/+79180650811",
    icon: IconBrandTelegram,
    label: "Telegram",
  },
  {
    id: 2,
    href: "https://t.me/+79180650811",
    icon: IconBrandWhatsappFilled,
    label: "WhatsApp",
  },
  {
    id: 3,
    href: "https://t.me/+79180650811",
    icon: IconCircleArrowUpRightFilled,
    label: "External Link",
  },
];

const navLinks = [
  { id: 1, href: "#", label: "Главная" },
  { id: 2, href: "#", label: "Портфолио" },
  { id: 3, href: "#", label: "Условия" },
  { id: 4, href: "#", label: "Контакты" },
];

export const MainHeader: FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 920;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <Box>
      <header
        className={`${classes.header} ${scrolled ? classes.scrolled : ""}`}
      >
        <Group justify="space-between" h="100%">
          <a href="#" className={classes.logoLink}>
            {scrolled ? (
              <Image src="/logo.png" w={30} alt="VibeVis" />
            ) : (
              <Image src="/lightLogo.png" w={30} alt="VibeVis" />
            )}
          </a>

          <Group visibleFrom="sm">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon size={20} color={scrolled ? "#000" : "#fff"} />
                </a>
              );
            })}
          </Group>

          <Group h="100%" gap={0} visibleFrom="sm">
            {navLinks.map((link) => (
              <a key={link.id} href={link.href} className={classes.link}>
                {link.label}
              </a>
            ))}
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="sm"
            color={scrolled ? "#000" : "#fff"}
          />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        hiddenFrom="sm"
        zIndex={1000000}
        title={
          <Image src="/logo.png" alt="VibeVis" height={30} fit="contain" />
        }
      >
        <ScrollArea h="calc(100vh - 80px)" mx="-md">
          <Divider my="sm" />
          {navLinks.map((link) => (
            <a key={link.id} href={link.href} className={classes.link}>
              {link.label}
            </a>
          ))}
          <Divider my="sm" />
          <Group pl="md">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon size={30} color="#000" />
                </a>
              );
            })}
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
};
