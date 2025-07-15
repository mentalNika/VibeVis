"use client";
import React, { FC, useState } from "react";
import {
  Box,
  Image,
  Title,
  Text,
  Center,
  Modal,
  ActionIcon,
  rem,
  SimpleGrid,
} from "@mantine/core";
import { IconX } from "@tabler/icons-react";
import { OrderBtn } from "./ui/OrderBtn/OrderBtn";
import { AnimateOnAppear } from "./AnimateOnAppear";

export const Visualisation: FC = () => {
  const [openedImage, setOpenedImage] = useState<string | null>(null);

  const handleImageClick = (imageSrc: string) => {
    setOpenedImage(imageSrc);
  };

  const closeModal = () => {
    setOpenedImage(null);
  };

  return (
    <AnimateOnAppear>
      <Center bg={"white.1"} px={{ base: 10, md: 50 }} py={50}>
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing={50}>
          <Box h={"100%"} maw={{ base: 500, lg: 850 }}>
            <button
              onClick={() => handleImageClick("/visualisations/1.webp")}
              aria-label="Открыть картинку"
            >
              <Image
                src="/visualisations/1.webp"
                w={"100%"}
                h={{ base: 500, lg: 847 }}
                style={{ cursor: "pointer" }}
                alt="Интерьерная визуализация"
              />
            </button>

            <Title
              order={2}
              fz={{ base: 32, md: 30 }}
              fw={400}
              mt={"lg"}
              ff={"forum"}
            >
              Интерьерная визуализация
            </Title>
            <Text mt="xs" mb="lg">
              Делаю визуализацию жилых помещений, а также предметную
              визуализацию.
            </Text>

            <OrderBtn icon="tg" link="https://t.me/+79180650811" />
          </Box>
          <Box h={"100%"} maw={{ base: 500, lg: 850 }}>
            <button
              onClick={() => handleImageClick("/visualisations/2.webp")}
              aria-label="Открыть картинку"
            >
              <Image
                src="/visualisations/2.webp"
                w={"100%"}
                h={{ base: 500, lg: 847 }}
                style={{ cursor: "pointer" }}
                alt="Предметная визуализация"
              />
            </button>

            <Title
              order={2}
              fz={{ base: 32, md: 30 }}
              fw={400}
              mt={"lg"}
              ff={"forum"}
            >
              Коммерческие помещения
            </Title>
            <Text mt="xs" mb="lg">
              Создаю визуализации для бизнеса: кафе, ресторанов, офисов,
              магазинов и других общественных пространств.
            </Text>
            <OrderBtn icon="tg" link="https://t.me/+79180650811" />
          </Box>
        </SimpleGrid>

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
          <Box pos="relative" w="100%">
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
    </AnimateOnAppear>
  );
};
