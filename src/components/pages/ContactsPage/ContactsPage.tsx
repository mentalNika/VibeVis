import { Contacts } from "@/components/Contacts";
import { LogoBlock } from "@/components/ui/LogoBlock/LogoBlock";
import { Container } from "@mantine/core";
import React, { FC } from "react";

export const ContactsPage: FC = () => {
  return (
    <Container px={10} py={{ base: 30, md: 0 }}>
      <LogoBlock />
      <Contacts />
    </Container>
  );
};
