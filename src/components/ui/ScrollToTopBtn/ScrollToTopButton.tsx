"use client";

import { ActionIcon } from "@mantine/core";
import { IconArrowUp } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import classes from "./ScrollToTopBtn.module.scss";

export const ScrollToTopBtn = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <ActionIcon
      onClick={scrollToTop}
      size={35}
      radius="xl"
      variant="filled"
      className={`${classes.icon} ${visible ? classes.visible : ""}`}
    >
      <IconArrowUp size={20} />
    </ActionIcon>
  );
};
