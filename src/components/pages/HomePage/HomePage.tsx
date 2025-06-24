import { AboutMe } from "@/components/AboutMe";
import { Carousel } from "@/components/Carousel";
import { MainSlider } from "@/components/MainSlider/MainSlider";
import { Visualisation } from "@/components/Visualisation";
import { Box } from "@mantine/core";
import React, { FC } from "react";

export const HomePage: FC = () => {
  return (
    <>
      <MainSlider />
      <Carousel />
      <Box bg="white.1">
        <AboutMe />
        <Visualisation />
      </Box>
    </>
  );
};
