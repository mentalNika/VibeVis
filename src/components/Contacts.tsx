import { Center, Image, Stack, Title, Text, Anchor } from "@mantine/core";
import React, { FC } from "react";
import { SocialBtn } from "./ui/SocialBtn/SocialBtn";

export const Contacts: FC = () => {
  return (
    <Center>
      <Stack align="center">
        <Image
          src={"/meContacts.webp"}
          w={{ base: "100%", sm: 365, md: 500 }}
          h={{ base: "100%", sm: 365, md: 500 }}
          alt="Носков Александр"
          radius={8}
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
        <SocialBtn icon="tg" link="qwff" text="Telegram" />
        <SocialBtn icon="inst" link="qwff" text="Instagram" />
        <SocialBtn icon="wa" link="qwff" text="WhatsApp" />
        <Anchor pb={15} fz={16} href="mailto:example@mail.com">
          Почта: example@mail.com
        </Anchor>
      </Stack>
    </Center>
  );
};
