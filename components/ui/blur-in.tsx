"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BlurIntProps {
  word: React.ReactNode; // Accepts strings or JSX/React elements
  className?: string;
  duration?: number;
}

const BlurIn = ({ word, className, duration = 1 }: BlurIntProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration }}
      className={cn("inline-block", className)}
    >
      {word}
    </motion.div>
  );
};

export default BlurIn;
