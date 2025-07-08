import React, { FC } from "react";
import { Galery } from "@/components/Galery/Galery";
import { LogoBlock } from "@/components/ui/LogoBlock/LogoBlock";
import { Container } from "@mantine/core";

export const GaleryPage: FC = () => {
  return (
    <Container px={10} py={{ base: 30, md: 0 }}>
      <LogoBlock />
      <Galery />
    </Container>
  );
};
