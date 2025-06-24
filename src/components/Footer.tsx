"use client";
import { Center, Text, Stack } from "@mantine/core";
import { useInView, AnimatePresence, motion } from "motion/react";
import React, { FC, useRef } from "react";
export const Footer: FC = () => {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: false,
    amount: 0.1,
  });
  return (
    <AnimatePresence>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: -40 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -40 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <footer>
          <Center pt={{ base: 48, lg: 100 }} pb={20}>
            <Stack align="center" gap={0}>
              <Text fz={12}>3d визуализатор Носков Александр</Text>
              <Text fz={12} pb={25}>
                +7 (918) 065-08-11
              </Text>
              <a
                href="https://t.me/+79002889826"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: 12, color: "#2b2b2b" }}
              >
                Сайт от @mentalNika
              </a>
            </Stack>
          </Center>
        </footer>
      </motion.div>{" "}
    </AnimatePresence>
  );
};
