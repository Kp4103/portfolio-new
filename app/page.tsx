"use client";

import React, { useState } from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { FloatingDock } from "@/components/ui/floating-dock";
import Image from "next/image";
import { TestimonialCards } from "@/components/ui/testimonial-cards";


import { useWindowSize } from '@/hooks/useWindowSize';
import Link from "next/link"
import {
  IconBrandGithub,
  IconTerminal2,
  IconBrandLinkedin,
  IconBrandDiscord,
  IconInfoCircle,
  IconMessageDots,
  IconUserCircle,
} from "@tabler/icons-react";

function CustomGridDemo() {

    const size = useWindowSize();
  const isMobile = size.width < 640;
  const [workTab, setWorkTab] = useState<"web" | "bot">("web");

  const testimonials = [
    {
      quote:
        "Kunal is an amazing web designer and developer. He took all of my input and turned it into an absolute masterpiece. He was patient with me when bug testing and was able to understand what my end goal was which is a huge plus when working with any developer. 10/10 would recommend to anyone who needs masterful work done to their website!",
      name: "Jared",
      designation: "Web Development",
    },
    {
      quote:
        "Great response. Very extremely patient seller, we went through everything like it was needed. He was really super helpful and I’m thankful that he helped me a lot.",
      name: "Matic Bonica",
      designation: "Web Development",
    },
    {
      quote:
        "Amazing work and met all my needs.",
      name: "Drafter",
      designation: "Web Development",
    },
    {
      quote:
        "Kunal has amazed me for the first and what is likely not going to be the last time. I requested a portfolio page to advertise my services, and he has completely outdone himself, with excellent communication and work. He was so patient with me even when I was nitpicky and wanted to add a lot of changes to the site, and he was patient and willing to do it. I had set a deadline of a month and a half, and he completed it within two weeks. I would highly recommend! Thank you Kunal!",
      name: "certifiedlevi",
      designation: "Web Development",
    },
  ];


  const links = [
    {
      title: "About",
      icon: <IconInfoCircle className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-neutral-500 dark:text-neutral-300" />,
      href: "#about",
    },
    {
      title: "Projects",
      icon: <IconTerminal2 className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-neutral-500 dark:text-neutral-300" />,
      href: "#projects",
    },
    {
      title: "Testimonials",
      icon: <IconUserCircle className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-neutral-500 dark:text-neutral-300" />,
      href: "#testimonials",
    },
    {
      title: "Contact",
      icon: <IconMessageDots className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-neutral-500 dark:text-neutral-300" />,
      href: "#contact",
    },
    {
      title: "LinkedIn",
      icon: <IconBrandLinkedin className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-neutral-500 dark:text-neutral-300" />,
      href: "https://linkedin.com/in/kunal-pawar4103",
    },
    {
      title: "GitHub",
      icon: <IconBrandGithub className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-neutral-500 dark:text-neutral-300" />,
      href: "https://github.com/Kp4103",
    },
  ];
   
  const scrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const projectsSection = document.getElementById("projects")
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleDownload = () => {
    // Assuming the resume is stored in the public directory
    const resumeUrl = "/new resume.pdf"
    
    // Create a temporary anchor element
    const link = document.createElement("a")
    link.href = resumeUrl
    link.download = "Kunal_Pawar_Resume.pdf" // Set the desired file name for download
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="min-h-screen w-full bg-neutral-900 flex flex-col items-center justify-center overflow-hidden">
<div id="about" className="relative flex items-center justify-center min-h-screen w-full px-4 py-8 z-20">
  {/* Subtle radial glow behind content */}
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/[0.07] rounded-full blur-[120px] pointer-events-none" />

  <div className="relative max-w-3xl mx-auto">
    {/* Badge */}
    <div className="flex justify-center mb-8 animate-[fadeUp_0.5s_ease-out_both]">
      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-800/80 border border-neutral-700/50">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-neutral-300 text-xs font-medium">Available for freelance work</span>
      </div>
    </div>

    {/* Name */}
    <div className="text-center mb-6 animate-[fadeUp_0.5s_ease-out_0.1s_both]">
      <p className="text-neutral-500 text-sm tracking-[0.3em] uppercase font-medium mb-4">Web Developer & Designer</p>
      <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight">
        Kunal{" "}
        <span className="bg-[length:200%_100%] animate-[shimmer_3s_linear_infinite] bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 via-pink-400 to-purple-400" style={{ paddingBottom: "0.1em" }}>
          Pawar
        </span>
      </h1>
    </div>

    {/* Description */}
    <p className="text-center text-neutral-400 text-base sm:text-lg max-w-lg mx-auto mb-10 leading-relaxed animate-[fadeUp_0.5s_ease-out_0.2s_both]">
      I craft modern websites, Discord bots, and digital experiences that help businesses stand out.
    </p>

    {/* CTAs */}
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-[fadeUp_0.5s_ease-out_0.3s_both]">
      <Link href="#projects" onClick={scrollToProjects} passHref>
        <button className="group relative px-8 py-3.5 rounded-full bg-white text-neutral-900 font-semibold text-sm overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]">
          <span className="relative z-10">View my work</span>
        </button>
      </Link>
      <a
        href="#contact"
        className="group relative px-8 py-3.5 rounded-full border border-neutral-700 text-neutral-300 font-semibold text-sm transition-all duration-300 overflow-hidden hover:text-white hover:border-transparent"
      >
        {/* Shimmer shine overlay */}
        <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="absolute inset-[-2px] rounded-full bg-[length:200%_100%] animate-[shimmer_2s_linear_infinite] bg-gradient-to-r from-transparent via-purple-500/60 to-transparent" />
          <span className="absolute inset-[1px] rounded-full bg-neutral-900" />
        </span>
        <span className="relative z-10">Contact me</span>
      </a>
    </div>

    {/* Scroll indicator */}
    <div className="flex justify-center mt-16 animate-[fadeUp_0.5s_ease-out_0.5s_both]">
      <div className="w-5 h-8 rounded-full border-2 border-neutral-700 flex justify-center pt-1.5">
        <div className="w-1 h-2 rounded-full bg-neutral-500 animate-bounce" />
      </div>
    </div>
  </div>
</div>

    <div className="flex justify-center fixed bottom-4 left-0 right-0 z-50">
      <FloatingDock
        mobileClassName="translate-y-30 left-40" // only for demo, remove for production
        items={links}
      />
    </div>


    {/* Services Section */}
    <div className="w-full max-w-5xl z-20 min-h-screen flex flex-col items-center justify-center px-4 md:px-8 py-12">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white">
          What I{" "}
          <span className="bg-[length:200%_100%] animate-[shimmer_3s_linear_infinite] bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 via-pink-400 to-purple-400" style={{ paddingBottom: "0.15em", lineHeight: 1.4 }}>
            Offer
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 w-full">
        {/* Web Development */}
        <div className="group relative p-8 md:p-10 border border-neutral-800 md:border-r-0 rounded-2xl md:rounded-r-none transition-all duration-500 hover:bg-neutral-800/30">
          {/* Top accent line */}
          <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <span className="text-6xl font-bold text-neutral-600 group-hover:text-purple-500/20 transition-colors duration-500 select-none">01</span>

          <div className="mt-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                </svg>
              </div>
              <h3 className="text-white font-semibold text-xl">Web Development</h3>
            </div>
            <p className="text-neutral-500 text-sm leading-relaxed mb-6">
              Modern, responsive websites built with Next.js and React. From landing pages to full-stack web applications.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 rounded-lg text-[11px] font-medium bg-purple-500/[0.08] text-purple-400/80 border border-purple-500/10">Next.js</span>
              <span className="px-3 py-1.5 rounded-lg text-[11px] font-medium bg-purple-500/[0.08] text-purple-400/80 border border-purple-500/10">React</span>
              <span className="px-3 py-1.5 rounded-lg text-[11px] font-medium bg-purple-500/[0.08] text-purple-400/80 border border-purple-500/10">TypeScript</span>
              <span className="px-3 py-1.5 rounded-lg text-[11px] font-medium bg-purple-500/[0.08] text-purple-400/80 border border-purple-500/10">Tailwind</span>
            </div>
          </div>
        </div>

        {/* Discord Bots */}
        <div className="group relative p-8 md:p-10 border border-neutral-800 rounded-2xl md:rounded-none transition-all duration-500 hover:bg-neutral-800/30">
          <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <span className="text-6xl font-bold text-neutral-600 group-hover:text-indigo-500/20 transition-colors duration-500 select-none">02</span>

          <div className="mt-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center">
                <IconBrandDiscord className="w-5 h-5 text-indigo-400" />
              </div>
              <h3 className="text-white font-semibold text-xl">Discord Bots</h3>
            </div>
            <p className="text-neutral-500 text-sm leading-relaxed mb-6">
              Custom Discord bots for moderation, music, utilities, and more. Reliable and scalable solutions for your server.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 rounded-lg text-[11px] font-medium bg-indigo-500/[0.08] text-indigo-400/80 border border-indigo-500/10">Discord.js</span>
              <span className="px-3 py-1.5 rounded-lg text-[11px] font-medium bg-indigo-500/[0.08] text-indigo-400/80 border border-indigo-500/10">Node.js</span>
              <span className="px-3 py-1.5 rounded-lg text-[11px] font-medium bg-indigo-500/[0.08] text-indigo-400/80 border border-indigo-500/10">MongoDB</span>
            </div>
          </div>
        </div>

        {/* Tebex Stores */}
        <div className="group relative p-8 md:p-10 border border-neutral-800 md:border-l-0 rounded-2xl md:rounded-l-none transition-all duration-500 hover:bg-neutral-800/30">
          <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <span className="text-6xl font-bold text-neutral-600 group-hover:text-emerald-500/20 transition-colors duration-500 select-none">03</span>

          <div className="mt-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold text-xl">Tebex Stores</h3>
            </div>
            <p className="text-neutral-500 text-sm leading-relaxed mb-6">
              Professional Tebex store setups and customization for Minecraft servers. Themes, packages, and branding.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 rounded-lg text-[11px] font-medium bg-emerald-500/[0.08] text-emerald-400/80 border border-emerald-500/10">Tebex</span>
              <span className="px-3 py-1.5 rounded-lg text-[11px] font-medium bg-emerald-500/[0.08] text-emerald-400/80 border border-emerald-500/10">HTML/CSS</span>
              <span className="px-3 py-1.5 rounded-lg text-[11px] font-medium bg-emerald-500/[0.08] text-emerald-400/80 border border-emerald-500/10">Design</span>
            </div>
          </div>
        </div>
      </div>
    </div>
      
    {/* Projects Section */}
    <div id="projects" className="w-full max-w-6xl z-20 min-h-screen flex flex-col items-center justify-center px-4 md:px-8 py-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white">
          My{" "}
          <span className="bg-[length:200%_100%] animate-[shimmer_3s_linear_infinite] bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 via-pink-400 to-purple-400" style={{ paddingBottom: "0.15em", lineHeight: 1.4 }}>
            Work
          </span>
        </h2>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 mb-8 p-1 rounded-full bg-neutral-800/60 border border-neutral-700/40">
        <button
          onClick={() => setWorkTab("web")}
          className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
            workTab === "web"
              ? "bg-purple-500/20 text-purple-300 border border-purple-500/30"
              : "text-neutral-400 hover:text-neutral-200 border border-transparent"
          }`}
        >
          Web Development
        </button>
        <button
          onClick={() => setWorkTab("bot")}
          className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
            workTab === "bot"
              ? "bg-indigo-500/20 text-indigo-300 border border-indigo-500/30"
              : "text-neutral-400 hover:text-neutral-200 border border-transparent"
          }`}
        >
          Discord Bots
        </button>
      </div>

      {/* Web Development Projects */}
      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full ${workTab === "web" ? "" : "hidden"}`}>
          {[
            { title: "InfraCharm", desc: "Business website for a construction & infrastructure company", href: "https://infracharm.com/" },
            { title: "Unlimited Projects Studio", desc: "Creative studio portfolio & services showcase", href: "https://unlimitedprojectstudio.com/" },
            { title: "Certified Levi", desc: "Portfolio website for a Minecraft skin artist", href: "https://certifiedlevi.com/" },
          ].map((project) => (
            <a key={project.title} href={project.href} target="_blank" rel="noopener noreferrer"
              className="group relative rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_-15px_rgba(168,85,247,0.15)]">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-purple-500/0 via-purple-500/0 to-blue-500/0 group-hover:from-purple-500/20 group-hover:via-transparent group-hover:to-blue-500/20 transition-all duration-500 pointer-events-none" />
              {/* Live site preview */}
              <div className="relative h-44 w-full overflow-hidden">
                <div className="absolute inset-0 origin-top-left scale-[0.25] w-[400%] h-[400%]">
                  <iframe
                    src={project.href}
                    title={project.title}
                    className="w-full h-full border-0 pointer-events-none"
                    loading="lazy"
                    sandbox="allow-scripts allow-same-origin"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent" />
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                  <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </div>
              </div>
              <div className="relative p-4">
                <h3 className="text-white font-semibold text-base mb-1.5 group-hover:text-purple-300 transition-colors duration-300">{project.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{project.desc}</p>
              </div>
            </a>
          ))}
        </div>

      {/* Discord Bot Projects */}
      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full ${workTab === "bot" ? "" : "hidden"}`}>
          {[
            { title: "ExylCraft Music Bot", desc: "Custom music bot built for the ExylCraft Discord server", client: "ExylCraft" },
            { title: "Wave Bot", desc: "Multi-purpose bot for Unlimited Projects Studio", client: "Unlimited Projects Studio" },
            { title: "Wiki Bot", desc: "Information & wiki lookup bot for Unlimited Projects Studio", client: "Unlimited Projects Studio" },
          ].map((project) => (
            <div key={project.title}
              className="group relative rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_-15px_rgba(99,102,241,0.15)]">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-indigo-500/0 via-indigo-500/0 to-blue-500/0 group-hover:from-indigo-500/20 group-hover:via-transparent group-hover:to-blue-500/20 transition-all duration-500 pointer-events-none" />
              {/* Bot icon area */}
              <div className="relative h-36 w-full overflow-hidden bg-gradient-to-br from-indigo-500/10 via-neutral-900 to-purple-500/10 flex items-center justify-center">
                <div className="relative w-16 h-16 group-hover:scale-110 transition-transform duration-500" style={{ perspective: "200px" }}>
                  <div className="w-full h-full rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-[0_8px_30px_rgba(99,102,241,0.4)] group-hover:shadow-[0_12px_40px_rgba(99,102,241,0.5)] transition-shadow duration-500" style={{ transform: "rotateX(10deg) rotateY(-10deg)" }}>
                    <IconBrandDiscord className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
              <div className="relative p-4 flex flex-col h-[140px]">
                <h3 className="text-white font-semibold text-base mb-1.5 group-hover:text-indigo-300 transition-colors duration-300">{project.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed flex-1">{project.desc}</p>
                <span className="text-[11px] text-indigo-400/60 font-medium mt-2">{project.client}</span>
              </div>
            </div>
          ))}
        </div>
    </div>

      <h2 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20 mt-20">
        Testimonials
      </h2>

      <div id="testimonials" className="z-20 w-full max-w-6xl">
      <TestimonialCards testimonials={testimonials} />
      </div>

    {/* Why Me Section */}
    <div className="w-full max-w-5xl z-20 py-20 md:py-28 px-4 md:px-8">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white">
          Why{" "}
          <span className="bg-[length:200%_100%] animate-[shimmer_3s_linear_infinite] bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 via-pink-400 to-purple-400" style={{ paddingBottom: "0.15em", lineHeight: 1.4 }}>
            Me?
          </span>
        </h2>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-neutral-800/50 rounded-2xl overflow-hidden mb-12">
        {[
          { number: "5+", label: "Projects Delivered" },
          { number: "100%", label: "Client Satisfaction" },
          { number: "5+", label: "Happy Clients" },
          { number: "24h", label: "Avg. Response Time" },
        ].map((stat) => (
          <div key={stat.label} className="bg-neutral-900 p-6 md:p-8 text-center">
            <p className="text-2xl md:text-4xl font-bold text-white mb-1">{stat.number}</p>
            <p className="text-neutral-500 text-xs md:text-sm">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {[
          {
            icon: (
              <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            ),
            title: "Fast Turnaround",
            desc: "I respect deadlines. Most projects are delivered ahead of schedule. One client set a 6-week deadline, and I delivered in 2 weeks.",
            color: "purple",
          },
          {
            icon: (
              <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
              </svg>
            ),
            title: "Clear Communication",
            desc: "No ghosting, no jargon. I keep you updated at every step with clear progress reports and quick responses.",
            color: "blue",
          },
          {
            icon: (
              <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
              </svg>
            ),
            title: "Quality First",
            desc: "Every project is built with clean code, modern best practices, and attention to detail. No shortcuts.",
            color: "emerald",
          },
          {
            icon: (
              <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182" />
              </svg>
            ),
            title: "Flexible & Adaptable",
            desc: "Every project is unique. I tailor my approach to fit your specific needs, timeline, and budget.",
            color: "amber",
          },
        ].map((item) => (
          <div key={item.title} className="group relative flex gap-4 p-6 rounded-2xl border border-neutral-800 transition-all duration-300 hover:border-transparent hover:bg-neutral-800/30 overflow-hidden">
            {/* Shiny border on hover — color matched */}
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <span className={`absolute inset-[-2px] rounded-2xl bg-[length:200%_100%] animate-[shimmer_2s_linear_infinite] bg-gradient-to-r from-transparent to-transparent ${
                item.color === "purple" ? "via-purple-500/40" :
                item.color === "blue" ? "via-blue-500/40" :
                item.color === "emerald" ? "via-emerald-500/40" :
                "via-amber-500/40"
              }`} />
              <span className="absolute inset-[1px] rounded-[14px] bg-neutral-900" />
            </span>
            <div className={`relative z-10 w-10 h-10 shrink-0 rounded-xl flex items-center justify-center ${
              item.color === "purple" ? "bg-purple-500/10" :
              item.color === "blue" ? "bg-blue-500/10" :
              item.color === "emerald" ? "bg-emerald-500/10" :
              "bg-amber-500/10"
            }`}>
              {item.icon}
            </div>
            <div className="relative z-10">
              <h3 className="text-white font-semibold text-base mb-1">{item.title}</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Contact Section */}
    <div id="contact" className="relative w-full max-w-5xl z-20 min-h-screen flex flex-col items-center justify-center px-4 md:px-8">
      {/* Header */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight pb-2">
          Let&apos;s work{" "}
          <span className="bg-[length:200%_100%] animate-[shimmer_3s_linear_infinite] bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 via-pink-400 to-purple-400" style={{ paddingBottom: "0.15em", lineHeight: 1.4 }}>
            together
          </span>
        </h2>
        <p className="text-neutral-400 text-base md:text-lg max-w-md mx-auto">
          Have a project in mind? Reach out through any of these channels.
        </p>
      </div>

      {/* Contact links — inline horizontal */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 w-full max-w-2xl">
        {/* Email */}
        <a
          href="mailto:kunal4103@gmail.com"
          className="group flex items-center justify-center gap-3 px-6 py-4 rounded-full bg-neutral-800 border border-neutral-700/60 transition-all duration-300 hover:border-purple-500/50 hover:bg-neutral-800/80"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400 shrink-0"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
          <span className="text-neutral-200 text-sm font-medium">kunal4103@gmail.com</span>
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/kunal-pawar4103"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center gap-3 px-6 py-4 rounded-full bg-neutral-800 border border-neutral-700/60 transition-all duration-300 hover:border-blue-500/50 hover:bg-neutral-800/80"
        >
          <IconBrandLinkedin className="w-5 h-5 text-blue-400" />
          <span className="text-neutral-200 text-sm font-medium">LinkedIn</span>
        </a>

        {/* Discord */}
        <button
          onClick={() => {
            navigator.clipboard.writeText("cryocreza");
            const el = document.getElementById("discord-copy-text");
            if (el) {
              el.textContent = "Username copied!";
              setTimeout(() => { el.textContent = "cryocreza"; }, 2000);
            }
          }}
          className="group flex items-center justify-center gap-3 px-6 py-4 rounded-full bg-neutral-800 border border-neutral-700/60 transition-all duration-300 hover:border-indigo-500/50 hover:bg-neutral-800/80"
        >
          <IconBrandDiscord className="w-5 h-5 text-indigo-400" />
          <span id="discord-copy-text" className="text-neutral-200 text-sm font-medium transition-all">cryocreza</span>
        </button>
      </div>
    </div>

    {/* Footer */}
    <div className="w-full z-20 py-6 px-4 md:px-8 text-center">
      <p className="text-xs text-neutral-600">
        &copy; {new Date().getFullYear()} Kunal Pawar. All Rights Reserved.
      </p>
    </div>
    {/* Scroll to top */}
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="group fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full bg-neutral-800 border border-neutral-700/60 flex items-center justify-center transition-all duration-300 hover:bg-neutral-700 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]"
      aria-label="Scroll to top"
    >
      <svg className="w-4 h-4 text-neutral-400 group-hover:text-purple-400 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
      </svg>
    </button>

    <div className="absolute inset-0 z-0 h-full w-full">
    <ShootingStars />
    <StarsBackground />
    </div>
    </div>
  );
}

export default CustomGridDemo;

