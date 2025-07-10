"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Autoplay, Keyboard } from "swiper/modules";
import "swiper/css";

import { ActionIcon, Box, Image, Modal, rem } from "@mantine/core";
import { FC, useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { IconX } from "@tabler/icons-react";

export const mainSlides = [
  {
    id: 1,
    img: "/carousel/1.webp",
  },

  {
    id: 2,
    img: "/carousel/2.webp",
  },

  {
    id: 3,
    img: "/carousel/3.webp",
  },
  {
    id: 4,
    img: "/carousel/4.webp",
  },
];

export const Carousel: FC = () => {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: false,
    amount: 0.1,
  });

  const [opened, setOpened] = useState(false);
  const [activeImg, setActiveImg] = useState<string | null>(null);

  const handleImageClick = (img: string) => {
    setActiveImg(img);
    setOpened(true);
  };

  return (
    <AnimatePresence>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Box pt={{ base: 10, lg: 22 }} pb={{ base: 50 }} bg={"white.0"}>
          <Swiper
            style={
              {
                "--swiper-navigation-color": "#fff",
              } as React.CSSProperties
            }
            navigation
            loop
            keyboard={{ enabled: true }}
            autoplay={{ delay: 3200, disableOnInteraction: false }}
            slidesPerView={3}
            spaceBetween={22}
            pagination={{ clickable: true }}
            modules={[Navigation, Autoplay, Keyboard]}
            breakpoints={{
              0: { slidesPerView: 2, spaceBetween: 10 },
              960: { slidesPerView: 3, spaceBetween: 10 },
              1360: { slidesPerView: 3, spaceBetween: 22 },
            }}
          >
            {mainSlides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <Image
                  src={slide.img}
                  alt=""
                  h={{ base: 400, sm: 500, md: 650, lg: 854 }}
                  onClick={() => handleImageClick(slide.img)}
                  style={{ cursor: "pointer" }}
                  loading="lazy"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>

        <Modal
          opened={!!opened}
          onClose={() => setOpened(false)}
          size="auto"
          padding={0}
          withCloseButton={false}
          centered
          overlayProps={{
            backgroundOpacity: 0.5,
            blur: 1,
          }}
        >
          <Box pos="relative" w={{ base: "100%", md: "100%" }}>
            <ActionIcon
              onClick={() => setOpened(false)}
              size="xl"
              radius="xl"
              bg="white"
              c="black"
              pos="absolute"
              top={10}
              right={10}
              style={{
                boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
                zIndex: 10,
              }}
            >
              <IconX style={{ width: rem(24), height: rem(24) }} />
            </ActionIcon>

            {activeImg && (
              <Image
                src={activeImg}
                w="100%"
                style={{
                  maxHeight: "90vh",
                  objectFit: "cover",
                }}
                alt="Просмотр изображения"
                loading="lazy"
              />
            )}
          </Box>
        </Modal>
      </motion.div>
    </AnimatePresence>
  );
};
