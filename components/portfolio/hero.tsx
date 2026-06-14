"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRightIcon, DownloadIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site, social, stats } from "@/lib/portfolio-data";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <div className="grid-bg absolute inset-0 -z-10 opacity-40" aria-hidden />
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-10 top-24 -z-10 hidden h-72 w-72 rounded-full bg-primary/20 blur-3xl lg:block"
        aria-hidden
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-10 -z-10 hidden h-56 w-56 rounded-full bg-primary/10 blur-3xl lg:block"
        aria-hidden
      />

      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="flex flex-col items-start gap-6"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Available for new projects
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Hi, I&apos;m <span className="text-gradient">{site.name}</span>
            <br />
            <span className="text-muted-foreground">a {site.role}</span>
            <span className="ml-1 inline-block h-[0.9em] w-[3px] translate-y-1 animate-blink bg-primary" />
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="max-w-2xl text-base text-muted-foreground sm:text-lg"
          >
            {site.tagline}
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="group glow-primary">
              <Link href="#contact">
                Get in touch
                <ArrowRightIcon className="transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href={site.resumeUrl}>
                <DownloadIcon />
                Resume
              </Link>
            </Button>
            <div className="ml-1 flex items-center gap-1">
              {social.map(({ label, href, icon: Icon }) => (
                <Button key={label} asChild variant="ghost" size="icon" aria-label={label}>
                  <Link href={href} target="_blank" rel="noreferrer noopener">
                    <Icon className="h-4 w-4" />
                  </Link>
                </Button>
              ))}
            </div>
          </motion.div>

          <motion.dl
            variants={fadeInUp}
            className="mt-8 grid w-full grid-cols-3 gap-px overflow-hidden rounded-xl border border-border bg-border"
          >
            {stats.map((s) => (
              <div key={s.label} className="bg-background p-4 sm:p-6">
                <dt className="text-xs text-muted-foreground sm:text-sm">{s.label}</dt>
                <dd className="mt-1 font-mono text-2xl font-bold sm:text-3xl">
                  <span className="text-primary">{s.value}</span>
                </dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>
      </div>
    </section>
  );
}
