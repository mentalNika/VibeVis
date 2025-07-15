import { Center, Stack, Title, Text, Anchor } from "@mantine/core";
import React, { FC } from "react";
import { SocialBtn } from "./ui/SocialBtn/SocialBtn";
import Image from "next/image";
import { AnimateOnAppear } from "./AnimateOnAppear";

export const Contacts: FC = () => {
  return (
    <AnimateOnAppear>
      <Center>
        <Stack align="center">
          <Image
            src={"/meContacts.webp"}
            width={500}
            height={500}
            alt="Носков Александр"
            style={{
              borderRadius: "8px",
              objectFit: "cover",
              width: "100%",
              maxWidth: "500px",
              height: "auto",
            }}
          />

          <Title
            fz={{ base: 23, ixs: 30 }}
            fw={400}
            ff={"Forum"}
            order={2}
            pb={35}
          >
            3D ВИЗУАЛИЗАТОР АЛЕКСАНДР
          </Title>
          <Text>Для связи со мной напишите мне в соцсетях:</Text>
          <SocialBtn
            icon="tg"
            link="https://t.me/+79180650811"
            text="Telegram"
          />
          <SocialBtn
            icon="inst"
            link="https://www.instagram.com/vibevis_/"
            text="Instagram"
          />
          <SocialBtn
            icon="wa"
            link="https://wa.me/79180650811"
            text="WhatsApp"
          />
          <Anchor pb={15} fz={16} href="mailto:Enmax23@mail.ru">
            Почта: Enmax23@mail.ru
          </Anchor>
        </Stack>
      </Center>
    </AnimateOnAppear>
  );
};
