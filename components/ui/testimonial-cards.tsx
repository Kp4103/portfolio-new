"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { IconQuote } from "@tabler/icons-react";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
};

export const TestimonialCards = ({
  testimonials,
  autoplay = true,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (autoplay) {
      const timeout = setTimeout(() => {
        setActive((prev) => (prev + 1) % testimonials.length);
      }, 6000);
      return () => clearTimeout(timeout);
    }
  }, [autoplay, testimonials.length, active]);

  return (
    <div className="w-full mx-auto px-4 md:px-8 lg:px-16 py-16">
      {/* Main active testimonial */}
      <div className="relative mb-12 h-[350px] md:h-[400px] w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 rounded-2xl border border-neutral-400/30 dark:border-white/[0.08] bg-white/30 dark:bg-white/[0.03] backdrop-blur-sm p-8 md:p-12 flex flex-col justify-between overflow-hidden"
          >
            {/* Quote icon */}
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-neutral-400/20 dark:border-white/[0.08]">
                <IconQuote className="w-6 h-6 text-purple-500 dark:text-purple-400" />
              </div>
            </div>

            {/* Quote text with word-by-word reveal */}
            <motion.blockquote className="text-lg md:text-2xl font-light leading-relaxed text-neutral-700 dark:text-neutral-200 mb-8">
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, filter: "blur(8px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  transition={{
                    duration: 0.3,
                    delay: 0.015 * index,
                    ease: "easeOut",
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.blockquote>

            {/* Author info */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="flex items-center gap-2"
            >
              <div className="w-8 h-px bg-gradient-to-r from-purple-500 to-blue-500" />
              <p className="text-neutral-900 dark:text-white font-medium text-base">
                {testimonials[active].name}
              </p>
              <span className="text-neutral-300 dark:text-neutral-600">|</span>
              <p className="text-neutral-500 text-sm">
                {testimonials[active].designation}
              </p>
            </motion.div>

            {/* Decorative corner lines */}
            <div className="absolute top-0 right-0 w-20 h-20 pointer-events-none">
              <div className="absolute top-4 right-4 w-8 h-px bg-gradient-to-l from-purple-500/40 to-transparent" />
              <div className="absolute top-4 right-4 w-px h-8 bg-gradient-to-b from-purple-500/40 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 w-20 h-20 pointer-events-none">
              <div className="absolute bottom-4 left-4 w-8 h-px bg-gradient-to-r from-blue-500/40 to-transparent" />
              <div className="absolute bottom-4 left-4 w-px h-8 bg-gradient-to-t from-blue-500/40 to-transparent" />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom navigation cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {testimonials.map((testimonial, index) => (
          <motion.button
            key={index}
            onClick={() => setActive(index)}
            className={`relative text-left rounded-xl border p-4 transition-all duration-300 ${
              index === active
                ? "border-purple-500/40 bg-purple-500/[0.08]"
                : "border-neutral-400/25 dark:border-white/[0.06] bg-white/20 dark:bg-white/[0.02] hover:border-neutral-400/40 dark:hover:border-white/[0.12] hover:bg-white/40 dark:hover:bg-white/[0.04]"
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {index === active && (
              <motion.div
                layoutId="activeIndicator"
                className="absolute inset-x-4 -top-px h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}

            <div className="min-w-0">
              <p
                className={`text-sm font-medium truncate ${
                  index === active ? "text-neutral-900 dark:text-white" : "text-neutral-500 dark:text-neutral-400"
                }`}
              >
                {testimonial.name}
              </p>
              <p className="text-xs text-neutral-500 dark:text-neutral-600 truncate">
                {testimonial.designation}
              </p>
            </div>

            {index === active && autoplay && (
              <motion.div
                className="absolute inset-x-4 bottom-0 h-px bg-gradient-to-r from-purple-500/60 to-blue-500/60"
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 6, ease: "linear" }}
                key={`progress-${active}`}
              />
            )}
          </motion.button>
        ))}
      </div>
    </div>
  );
};
