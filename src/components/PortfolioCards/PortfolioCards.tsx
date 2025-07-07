"use client";
import React, { FC } from "react";
import { PortfolioItem } from "../pages/PortfolioPage/PortfolioPage";
import classes from "./PortfolioCards.module.scss";

import { Box, Image, SimpleGrid, Text } from "@mantine/core";

interface Props {
  data: PortfolioItem[];
}

export const PortfolioCards: FC<Props> = ({ data }) => {
  return (
    <SimpleGrid
      cols={{ base: 1, sm: 2, xl: 3 }}
      spacing={{ base: "sm", xl: "xl" }}
    >
      {data?.map((card) => (
        <Box key={card.id} maw={460}>
          <Box className={classes.zoomContainer}>
            <a href="https://mantine.dev/" className={classes.zoomInner}>
              <Image
                src={card.preview}
                height={460}
                width={460}
                alt=""
                radius={15}
                className={classes.image}
              />
            </a>
          </Box>
          <Text ta="center" mt="ixs">
            {card.title}
          </Text>
        </Box>
      ))}
    </SimpleGrid>
  );
};
