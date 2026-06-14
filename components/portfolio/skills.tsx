"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { skillGroups } from "@/lib/portfolio-data";
import { SectionHeading } from "./section-heading";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export function Skills() {
  return (
    <section id="skills" className="relative bg-muted/30 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="03 — Toolkit"
          title="Skills & tools"
          description="The technologies I reach for when shipping production interfaces."
        />

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map(({ title, icon: Icon, skills }, i) => (
            <motion.div
              key={title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={cardVariants}
              transition={{ delay: i * 0.06 }}
              whileHover={{ y: -6 }}
            >
              <Card className="group relative h-full overflow-hidden border-border/70 bg-card transition-colors hover:border-primary/50 hover:shadow-xl">
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
                  aria-hidden
                />
                <CardContent className="relative p-6">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary/15 text-primary transition-transform group-hover:scale-110 group-hover:rotate-3">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="font-semibold">{title}</h3>
                  </div>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {skills.map((s) => (
                      <li
                        key={s}
                        className="rounded-md border border-border bg-background px-2.5 py-1 font-mono text-xs text-foreground/90 transition-colors hover:border-primary hover:text-primary"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
