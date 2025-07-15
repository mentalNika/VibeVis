"use client";

import { FC, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

interface AnimationProps {
  children: React.ReactNode;
}

export const AnimateOnAppear: FC<AnimationProps> = ({ children }) => {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    amount: 0.1,
  });

  return (
    <AnimatePresence>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        exit={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
