"use client";
import { Box, Image, Text, Title } from "@mantine/core";
import { useParams } from "next/navigation";
import { portfolioData } from "../pages/PortfolioPage/PortfolioPage";
import classes from "./Galery.module.scss";

import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/scss/lightgallery.scss";
import "lightgallery/scss/lg-zoom.scss";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

export const Galery = () => {
  const params = useParams<{ id: string }>();
  const data = portfolioData.find((item) => item.id === Number(params.id));

  if (!data) return <Text>Проект не найден</Text>;

  return (
    <Box>
      <Title order={1} fz={25} ta="center" size="xl" mb="lg" ff="forum">
        {data.title}
      </Title>

      <LightGallery
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
        elementClassNames={classes.gallery}
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
              style={{ maxWidth: "100%", marginBottom: 16 }}
            />
          </a>
        ))}
      </LightGallery>
    </Box>
  );
};
