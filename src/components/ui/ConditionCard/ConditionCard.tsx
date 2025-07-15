"use client";
import {
  Box,
  Center,
  Flex,
  Image,
  List,
  ListItem,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import React, { FC } from "react";
import { ServiceSection } from "@/components/pages/ConditionsPage/ConditionsPage";
import classes from "./ConditionCard.module.scss";
import { AnimateOnAppear } from "@/components/AnimateOnAppear";

interface ConditionCardProps {
  services: ServiceSection[];
  reverse?: boolean;
}

export const ConditionCard: FC<ConditionCardProps> = ({
  services,
  reverse,
}) => {
  return (
    <AnimateOnAppear>
      <Center className={classes.cardContainer}>
        {services.map((service, index) => (
          <Flex
            key={index}
            className={`${classes.flexContainer} ${
              reverse ? classes.reversed : ""
            }`}
          >
            <Image
              src={service.img}
              className={classes.image}
              alt="Носков Александр"
            />
            <Box className={classes.content}>
              <Stack>
                <Title order={2} className={classes.title} fz={34} fw={400}>
                  {service.title}
                </Title>
                <List spacing="xs" className={classes.list}>
                  {service.includes.map((item, index) => (
                    <ListItem key={index}>
                      <Text size="sm">{item}</Text>
                    </ListItem>
                  ))}
                </List>

                {service?.subtitle?.map((item, index) => (
                  <Stack key={index}>
                    <Text>{item}</Text>
                  </Stack>
                ))}
              </Stack>
            </Box>
          </Flex>
        ))}
      </Center>
    </AnimateOnAppear>
  );
};
