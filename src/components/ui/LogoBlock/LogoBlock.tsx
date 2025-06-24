import { Center, Image } from "@mantine/core";
import Link from "next/link";
import React, { FC } from "react";

export const LogoBlock: FC = () => {
  return (
    <Center pt={110} pb={{ base: 50, md: 110 }}>
      <Link href="/">
        <Image src="/logo.png" w={110} alt="VibeVis" />
      </Link>
    </Center>
  );
};
