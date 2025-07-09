"use client";
import { Box, Center, Group, Image, Text, Title } from "@mantine/core";
import { useInView, motion, AnimatePresence } from "motion/react";
import React, { FC, useRef } from "react";

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
              <Image src={"/me.webp"} maw={520} alt="Носков Александр" />
              <Box maw={500}>
                <Title pb={10}>Носков Александр</Title>
                <Text pb={10} fw={500}>
                  Обо мне
                </Text>
                <Text>
                  {/* Я 3d визуализатор интерьеров. Работаю в сфере 3 года, уже за
                  плечами сделано более 3000 кв. м. Закончил строительный
                  колледж, а потом технический вуз ПСК (производство
                  строительных конструкций).
                  <br />
                  <br /> Помогу красиво пополнить ваше портфолио. Атмосферности
                  и реалистичности картинки уделяю особое внимание, так же для
                  меня важно комфортное сотрудничество.
                  <br />
                  <br />
                  Постоянно развиваюсь в свой области, повышаю квалификацию и
                  применяю новые знания в работе! */}
                </Text>
              </Box>
            </Group>
          </Center>
        </Box>
      </motion.div>
    </AnimatePresence>
  );
};
