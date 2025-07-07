"use client";
import {
  colorsTuple,
  Container,
  createTheme,
  rem,
  Title,
  Text,
  Button,
  Drawer,
  List,
} from "@mantine/core";

const CONTAINER_SIZES: Record<string, number> = {
  xs: 328,
  sm: 880,
  md: 1120,
  lg: 1360,
  xl: 1920,
};

export const theme = createTheme({
  fontFamily: "var(--ubuntu), sans-serif",
  fontSizes: {
    xs: "0.75rem",
    sm: "13px",
    md: "20px",
    lg: "30px",
    xl: "1.25rem",
  },
  breakpoints: {
    xs: "360px",
    ixs: "620px",
    sm: "960px",
    md: "1200px",
    lg: "1440px",
    xl: "1920px",
  },
  spacing: {
    // xs: "360px",
    ixs: "10px",
    sm: "30px",
    // md: "1200px",
    // lg: "1440px",
    xl: "50px",
  },
  colors: {
    white: [
      "#fff",
      "#f7f7f7",
      "#b9c7e2",
      "#94a8d0",
      "#748dc1",
      "#5f7cb8",
      "#5474b4",
      "#44639f",
      "#39588f",
      "#2d4b81",
    ],
    gray: [
      "#2D2D2D",
      "#dee2f2",
      "#373737",
      "#2B2B2B",
      "#7a84ba",
      "#6672b0",
      "#5c68ac",
      "#4c5897",
      "#424e88",
      "#364379",
    ],
    textPrimaryLight: colorsTuple("#fff"),
    textPrimaryDark: colorsTuple("#373737"),
  },

  shadows: {
    md: "1px 1px 3px rgba(0, 0, 0, .25)",
    xl: "5px 5px 3px rgba(0, 0, 0, .25)",
  },

  headings: {
    fontFamily: "Roboto, sans-serif",
    sizes: {
      h1: { fontSize: "36" },
    },
  },

  components: {
    Container: Container.extend({
      vars: (_, { size, fluid }) => ({
        root: {
          "--container-size": fluid
            ? "100%"
            : size !== undefined && size in CONTAINER_SIZES
            ? rem(CONTAINER_SIZES[size])
            : rem(size),
        },
      }),
    }),
    Title: Title.extend({
      defaultProps: {
        c: "textPrimaryDark",
        fw: 600,
        fz: { base: 18, xl: 20 },
      },
    }),
    Text: Text.extend({
      defaultProps: {
        c: "textPrimaryDark",
        fz: { base: 16, ixs: 14 },
        fw: 400,
      },
    }),
    Button: Button.extend({
      defaultProps: {
        c: "textPrimaryLight",
        fz: { base: 12, ixs: 14 },
        fw: 400,
        px: 40,
      },
    }),
    Drawer: Drawer.extend({
      styles: {
        header: {
          color: "#000",
          backgroundColor: "#fff",
        },
        content: {
          fontSize: 20,
          backgroundColor: "#fff",
        },
        close: {
          color: "#000",
          borderRadius: "100px",
          backgroundColor: "#fff",
        },
      },
    }),
    List: List.Item.extend({
      defaultProps: {
        c: "textPrimaryDark",
        fz: { base: 16, ixs: 14 },
        fw: 400,
      },
    }),
  },
});
