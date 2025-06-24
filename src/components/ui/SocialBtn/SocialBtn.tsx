import React from "react";
import {
  IconBrandTelegram,
  IconBrandWhatsapp,
  IconCircleArrowUpRightFilled,
} from "@tabler/icons-react";
import classes from "./SocialBtn.module.scss";

export const SocialBtn = ({
  icon,
  link,
  text,
}: {
  icon: "tg" | "inst" | "wa";
  link: string;
  text: string;
}) => {
  const getIcon = () => {
    switch (icon) {
      case "tg":
        return <IconBrandTelegram size={18} />;
      case "inst":
        return <IconCircleArrowUpRightFilled size={18} />;
      case "wa":
        return <IconBrandWhatsapp size={18} />;
      default:
        return null;
    }
  };

  return (
    <a
      className={classes.link}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {getIcon()}
      {text}
    </a>
  );
};
