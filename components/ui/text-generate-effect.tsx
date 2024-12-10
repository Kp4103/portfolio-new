"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration || 1,
        delay: stagger(0.2),
      }
    );
  }, [animate, filter, duration]);

  const renderWords = () => {
    return (
      <motion.div ref={scope} className="inline-flex flex-wrap justify-center whitespace-pre-wrap">
        {wordsArray.map((word, idx) => (
          <motion.span
            key={`${word}-${idx}`}
            className={cn(
              "opacity-0 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white"
            )} // Apply gradient styling here
            style={{
              filter: filter ? "blur(10px)" : "none", // Apply blur if needed
            }}
          >
            {word}{" "}
          </motion.span>
        ))}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      {renderWords()}
    </div>
  );
};
