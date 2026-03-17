"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="w-10 h-10" />;

  const handleToggle = () => {
    // Add transitioning class for smooth animation
    document.documentElement.classList.add("transitioning");
    setTheme(resolvedTheme === "dark" ? "light" : "dark");

    // Remove transitioning class after animation completes
    setTimeout(() => {
      document.documentElement.classList.remove("transitioning");
    }, 1500);
  };

  return (
    <button
      onClick={handleToggle}
      className="group relative flex items-center justify-center w-10 h-10 rounded-full text-neutral-500 transition-all duration-300 hover:text-amber-400 dark:hover:text-amber-300 hover:bg-neutral-100 dark:hover:bg-neutral-800"
      aria-label="Toggle theme"
    >
      {resolvedTheme === "dark" ? (
        <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
        </svg>
      ) : (
        <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
        </svg>
      )}
      <span className="absolute -top-8 px-2 py-1 rounded-md bg-[#fdf6f0] dark:bg-neutral-800 border border-neutral-200/50 dark:border-neutral-700/50 text-[10px] text-neutral-600 dark:text-neutral-300 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        {resolvedTheme === "dark" ? "Light" : "Dark"}
      </span>
    </button>
  );
}
