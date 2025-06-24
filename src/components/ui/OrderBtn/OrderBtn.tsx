import React from "react";
import {
  IconBrandTelegram,
  IconBrandWhatsapp,
  IconCircleArrowUpRightFilled,
} from "@tabler/icons-react";
import classes from "./OrderBtn.module.scss";

export const OrderBtn = ({
  icon,
  link,
}: {
  icon: "tg" | "inst" | "wa";
  link: string;
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
      Заказать
    </a>
  );
};
