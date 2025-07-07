"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Autoplay, Keyboard } from "swiper/modules";
import "swiper/css";

import { Box, Image } from "@mantine/core";
import { FC, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

export const mainSlides = [
  {
    id: 1,
    img: "/mainSlider/1.jpg",
    title: "Отель в Москве",
    subtitle: "Отель на улице Атмана Матвеева напротив Кремля",
  },
  {
    id: 2,
    img: "/mainSlider/2.jpg",
    title: "Отель в Нидерландах",
    subtitle: "Дизайн Артемия Лебедева",
  },
  {
    id: 3,
    img: "/mainSlider/3.jpg",
    title: "Квартира в Москве",
    subtitle: "Квартира для Шамана",
  },
  {
    id: 4,
    img: "/mainSlider/1.jpg",
    title: "Отель в Москве",
    subtitle: "Отель на улице Атмана Матвеева напротив Кремля",
  },
  {
    id: 5,
    img: "/mainSlider/2.jpg",
    title: "Отель в Нидерландах",
    subtitle: "Дизайн Артемия Лебедева",
  },
  {
    id: 6,
    img: "/mainSlider/3.jpg",
    title: "Квартира в Москве",
    subtitle: "Квартира для Шамана",
  },
];

export const Carousel: FC = () => {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: false,
    amount: 0.1,
  });

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
            onClick={(swiper) => swiper.slideNext()}
            keyboard={{ enabled: true }}
            autoplay={{ delay: 3200, disableOnInteraction: false }}
            slidesPerView={3}
            spaceBetween={22}
            pagination={{
              clickable: true,
            }}
            modules={[Navigation, Autoplay, Keyboard]}
            breakpoints={{
              0: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              960: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1360: {
                slidesPerView: 3,
                spaceBetween: 22,
              },
            }}
          >
            {mainSlides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <Image
                  src={slide.img}
                  alt={slide.title}
                  h={{ base: 400, sm: 500, md: 650, lg: 854 }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </motion.div>
    </AnimatePresence>
  );
};
