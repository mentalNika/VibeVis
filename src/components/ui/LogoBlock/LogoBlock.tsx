import { Center, Image } from "@mantine/core";
import Link from "next/link";
import React, { FC } from "react";

export const LogoBlock: FC = () => {
  return (
    <Center pt={{ base: 0, sm: 110 }} pb={60}>
      <Link href="/">
        <Image src="/logo.png" w={110} alt="VibeVis" visibleFrom="sm" />
      </Link>
    </Center>
  );
};
