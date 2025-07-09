import React, { FC } from "react";
import { Gallery } from "@/components/Gallery/Gallery";
import { LogoBlock } from "@/components/ui/LogoBlock/LogoBlock";
import { Container } from "@mantine/core";

export const GalleryPage: FC = () => {
  return (
    <Container px={10} py={{ base: 30, md: 0 }}>
      <LogoBlock />
      <Gallery />
    </Container>
  );
};
