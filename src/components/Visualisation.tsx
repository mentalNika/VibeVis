"use client";
import React, { FC, useRef, useState } from "react";
import {
  Box,
  Image,
  Title,
  Text,
  Center,
  Modal,
  ActionIcon,
  rem,
  Flex,
} from "@mantine/core";
import { IconX } from "@tabler/icons-react";
import { OrderBtn } from "./ui/OrderBtn/OrderBtn";
import { AnimatePresence, motion, useInView } from "motion/react";

export const Visualisation: FC = () => {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: false,
    amount: 0.1,
  });
  const [openedImage, setOpenedImage] = useState<string | null>(null);

  const handleImageClick = (imageSrc: string) => {
    setOpenedImage(imageSrc);
  };

  const closeModal = () => {
    setOpenedImage(null);
  };

  return (
    <AnimatePresence>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Center bg={"white.1"} px={{ base: 10, md: 50 }} py={50}>
          <Flex
            gap={{ base: "40", md: "50" }}
            wrap={{ base: "wrap", lg: "nowrap" }}
            justify="center"
          >
            <Box h={"100%"}>
              <Image
                src="/mainSlider/3.jpg"
                w={"100%"}
                h={{ base: 500, lg: 847 }}
                style={{ cursor: "pointer" }}
                onClick={() => handleImageClick("/mainSlider/3.jpg")}
                alt="Интерьерная визуализация"
              />
              <Title
                order={2}
                fz={{ base: 32, md: 30 }}
                fw={400}
                mt={"lg"}
                ff={"forum"}
              >
                Интерьерная визуализация
              </Title>
              <Text mt="sm" mb="lg">
                Делаю визуализацию жилых и коммерческих помещений.
              </Text>

              <OrderBtn icon="tg" link="https://t.me/+79180650811" />
            </Box>
            <Box h={"100%"}>
              <Image
                src="/mainSlider/1.jpg"
                w={"100%"}
                h={{ base: 500, lg: 847 }}
                style={{ cursor: "pointer" }}
                onClick={() => handleImageClick("/mainSlider/1.jpg")}
                alt="Предметная визуализация"
              />
              <Title
                order={2}
                fz={{ base: 32, md: 30 }}
                fw={400}
                mt={"lg"}
                ff={"forum"}
              >
                Предметная визуализация
              </Title>
              <Text mt="sm" mb="lg">
                Работаю с мебельными фабриками, производителями окон, дверей,
                декора и т. д. связанными с интерьерами.
              </Text>
              <OrderBtn icon="tg" link="https://t.me/+79180650811" />
            </Box>
          </Flex>

          <Modal
            opened={!!openedImage}
            onClose={closeModal}
            size="auto"
            padding={0}
            withCloseButton={false}
            centered
            overlayProps={{
              backgroundOpacity: 0.5,
              blur: 1,
            }}
          >
            <Box pos="relative" w="90vw">
              <ActionIcon
                onClick={closeModal}
                size="xl"
                radius="xl"
                bg="white"
                c="black"
                pos="absolute"
                top={10}
                right={10}
                style={{
                  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
                  "&:hover": {
                    backgroundColor: "white !important",
                  },
                }}
              >
                <IconX style={{ width: rem(24), height: rem(24) }} />
              </ActionIcon>
              {openedImage && (
                <Image
                  src={openedImage}
                  w="100%"
                  style={{ maxHeight: "90vh", objectFit: "cover" }}
                  alt="Визуализация"
                />
              )}
            </Box>
          </Modal>
        </Center>
      </motion.div>
    </AnimatePresence>
  );
};
