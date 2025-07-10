"use client";
import { Box, Center, Group, Text, Title } from "@mantine/core";
import { useInView, motion, AnimatePresence } from "motion/react";
import React, { FC, useRef } from "react";
import Image from "next/image";

export const AboutMe: FC = () => {
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
        <Box bg={"white.1"} px={10} py={50}>
          <Center>
            <Group gap={60} justify="center">
              <Image
                src="/me.webp"
                width={520}
                height={520}
                alt="Носков Александр"
                style={{
                  maxWidth: "100%",
                  maxHeight: "520px",
                  height: "auto",
                  width: "auto",
                }}
              />
              <Box maw={500}>
                <Title pb={10}>Носков Александр</Title>
                <Text pb={10} fw={500}>
                  Обо мне
                </Text>
                <Text>
                  Я – 3D визуализатор интерьеров с трёхлетним опытом и
                  реализованными проектами общей площадью более 3000 кв. м.
                  <br />
                  <br />
                  Создаю фотореалистичные визуализации жилых и коммерческих
                  пространств, которые помогают дизайнерам и архитекторам
                  выгодно презентовать свои проекты.
                  <br />
                  <br />
                  Особое внимание уделяю атмосфере и реалистичности изображения,
                  а также ценю комфортное и честное сотрудничество. Постоянно
                  развиваюсь в профессии, осваивая новые подходы и технологии,
                  чтобы предлагать актуальные и качественные решения.
                </Text>
              </Box>
            </Group>
          </Center>
        </Box>
      </motion.div>
    </AnimatePresence>
  );
};
