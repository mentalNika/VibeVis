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
import { usePathname } from "next/navigation";
import Link from "next/link";

const socialLinks = [
  {
    id: 1,
    href: "https://t.me/+79180650811",
    icon: IconBrandTelegram,
    label: "Telegram",
  },
  {
    id: 2,
    href: "https://wa.me/79180650811",
    icon: IconBrandWhatsappFilled,
    label: "WhatsApp",
  },
  {
    id: 3,
    href: "https://www.instagram.com/vibevis_/",
    icon: IconCircleArrowUpRightFilled,
    label: "Inst",
  },
];

const navLinks = [
  { id: 1, href: "/", label: "Главная" },
  { id: 2, href: "/portfolio", label: "Портфолио" },
  { id: 3, href: "/conditions", label: "Условия" },
  { id: 4, href: "/contacts", label: "Контакты" },
];

export const MainHeader: FC = () => {
  const pathname = usePathname();
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

  const isDark = pathname !== "/";

  return (
    <Box>
      <header
        className={`${classes.header} ${scrolled ? classes.scrolled : ""} ${
          isDark && classes.headerWhite
        }`}
      >
        <Group justify="space-between" h="100%">
          <Link href="/" className={classes.logoLink}>
            {scrolled || isDark ? (
              <Image src="/logo.png" w={30} alt="VibeVis" />
            ) : (
              <Image src="/lightLogo.png" w={30} alt="VibeVis" />
            )}
          </Link>

          <Group visibleFrom="sm">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Связаться с визуализатором в соцсети ${link.label}`}
                >
                  {scrolled || isDark ? (
                    <Icon size={20} color={"#000"} />
                  ) : (
                    <Icon size={20} color={"#fff"} />
                  )}
                </a>
              );
            })}
          </Group>

          <Group h="100%" gap={0} visibleFrom="sm">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className={`${classes.link} ${
                  pathname === link.href ? classes.active : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="sm"
            color={scrolled || isDark ? "#000" : "#fff"}
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
          <Image src="/logo.png" alt="VibeVis" height={40} fit="contain" />
        }
      >
        <ScrollArea h="calc(100vh - 80px)" mx="-md">
          <Divider my="sm" />
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className={classes.link}
              onClick={closeDrawer}
            >
              {link.label}
            </Link>
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
