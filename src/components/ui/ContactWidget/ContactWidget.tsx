"use client";
import { Image, Modal, Stack, Title, Text, Anchor } from "@mantine/core";
import React, { FC } from "react";
import classes from "./ContactWidget.module.scss";
import { useDisclosure } from "@mantine/hooks";
import { IconMail, IconPhone } from "@tabler/icons-react";
import { SocialBtn } from "../SocialBtn/SocialBtn";

export const ContactWidget: FC = () => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <Stack>
      <Image
        onClick={open}
        src={"/meRounded.png"}
        w={60}
        h={60}
        className={classes.img}
        alt="Связаться с визуализатором"
      />
      <Modal
        size="auto"
        opened={opened}
        onClose={close}
        transitionProps={{ transition: "fade", duration: 200 }}
        classNames={{
          header: classes.modalHeader,
          content: classes.modalContent,
          close: classes.modalClose,
          body: classes.modalBody,
        }}
      >
        <Stack align="center" gap={1}>
          <Image
            src="/meRounded.png"
            w={100}
            h={100}
            mb={15}
            alt="Связаться с визуализатором"
          />
          <Title order={2}>Noskov Alexander</Title>
          <Text pb={15}>3d визуализатор</Text>
          <Anchor
            pb={1}
            fz={16}
            href="tel:+79180650811"
            className={classes.icon}
          >
            <IconPhone size={14} />
            +7 (918) 065-08-11
          </Anchor>
          <Anchor
            pb={15}
            fz={16}
            href="mailto:Enmax23@mail.ru"
            className={classes.icon}
          >
            <IconMail size={16} />
            Enmax23@mail.ru
          </Anchor>
          <Stack gap={15} w={"100%"}>
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
          </Stack>
        </Stack>
      </Modal>
    </Stack>
  );
};
