"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  EffectFade,
  Navigation,
  Pagination,
  Autoplay,
  Keyboard,
} from "swiper/modules";
import "swiper/css";

import classes from "./MainSlider.module.scss";
import { Box, Image, Title } from "@mantine/core";
import { FC } from "react";

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
];

export const MainSlider: FC = () => {
  return (
    <Box className={classes.container}>
      <Image src="/lightLogo.png" alt="VibeViz" className={classes.logo} />

      <Swiper
        className={classes.swiper}
        effect="fade"
        navigation
        loop
        onClick={(swiper) => swiper.slideNext()}
        pagination={{ clickable: true }}
        keyboard={{ enabled: true }}
        autoplay={{ delay: 4200, disableOnInteraction: false }}
        modules={[EffectFade, Navigation, Pagination, Autoplay, Keyboard]}
        spaceBetween={0}
        slidesPerView={1}
      >
        {mainSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Box className={classes.slideContainer}>
              <Box className={classes.slideWrapper}>
                <Image
                  src={slide.img}
                  className={classes.slideImage}
                  alt={slide.title}
                />
                <Box className={classes.overlay} />
                <Title
                  fz={{ base: 30, md: 60 }}
                  fw={300}
                  order={1}
                  className={classes.title}
                  c="white.0"
                >
                  Интерьерная визуализация
                </Title>
                <Title
                  fz={{ base: 18, md: 30 }}
                  fw={300}
                  order={2}
                  className={classes.subTitle}
                  c="white.0"
                  visibleFrom="md"
                >
                  От идеи – к реалистичному образу
                </Title>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
