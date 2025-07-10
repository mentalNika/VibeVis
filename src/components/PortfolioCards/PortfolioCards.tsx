"use client";
import React, { FC } from "react";
import { PortfolioItem } from "../pages/PortfolioPage/PortfolioPage";
import classes from "./PortfolioCards.module.scss";

import { Box, SimpleGrid, Text } from "@mantine/core";
import Link from "next/link";
import Image from "next/image";

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
            <Link href={`/portfolio/${card.id}`} className={classes.zoomInner}>
              <Image
                src={card.preview}
                height={460}
                width={460}
                alt=""
                className={classes.image}
              />
            </Link>
          </Box>
          <Text ff="forum" fz={28} ta="center" mt="ixs">
            {card.title}
          </Text>
        </Box>
      ))}
    </SimpleGrid>
  );
};
