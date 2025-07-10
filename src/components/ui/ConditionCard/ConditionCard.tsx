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
import { useInView, motion, AnimatePresence } from "framer-motion";
import React, { FC, useRef } from "react";
import { ServiceSection } from "@/components/pages/ConditionsPage/ConditionsPage";
import classes from "./ConditionCard.module.scss";

interface ConditionCardProps {
  services: ServiceSection[];
  reverse?: boolean;
}

export const ConditionCard: FC<ConditionCardProps> = ({
  services,
  reverse,
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: false,
    amount: 0.1,
  });

  return (
    <AnimatePresence>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 1 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
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
                loading="lazy"
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
      </motion.div>
    </AnimatePresence>
  );
};
