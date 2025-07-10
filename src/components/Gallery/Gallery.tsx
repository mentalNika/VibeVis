"use client";

import dynamic from "next/dynamic";
import { ActionIcon, Box, Flex, rem, Text, Title } from "@mantine/core";
import { useParams } from "next/navigation";
import { portfolioData } from "../pages/PortfolioPage/PortfolioPage";
import classes from "./Gallery.module.scss";
import { IconArrowNarrowLeft } from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image";

const LightGallery = dynamic(() => import("lightgallery/react"), {
  ssr: false,
  loading: () => <Text ta={"center"}>Загрузка галереи...</Text>,
});

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

export const Gallery = () => {
  const params = useParams<{ id: string }>();
  const data = portfolioData.find((item) => item.id === Number(params.id));

  if (!data) return <Text>Проект не найден</Text>;

  return (
    <Box>
      <Flex align="center" mb="lg" gap="xl">
        <Link href="/portfolio">
          <ActionIcon
            size="xl"
            radius="xl"
            bg="white"
            c="black"
            style={{
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
            }}
            className={classes.arrow}
          >
            <IconArrowNarrowLeft style={{ width: rem(24), height: rem(24) }} />
          </ActionIcon>
        </Link>

        <Title order={1} fw={500} fz={32} ta="center" size="xl" ff="forum">
          {data.title}
        </Title>
      </Flex>

      <LightGallery
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
        elementClassNames={classes.gallery}
        download={false}
      >
        {data.images.map((img, index) => (
          <a
            href={img}
            key={index}
            className={`${classes.item} ${
              index % 7 === 0 ? classes.span2 : ""
            }`}
          >
            <Image
              alt={data.title}
              src={img}
              width={900}
              height={500}
              style={{ maxWidth: "100%", marginBottom: 16 }}
            />
          </a>
        ))}
      </LightGallery>
    </Box>
  );
};
