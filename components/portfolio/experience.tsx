"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { experience } from "@/lib/portfolio-data";
import { SectionHeading } from "./section-heading";

const itemVariants = (i: number) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
      delay: i * 0.08,
    },
  },
});


export function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="02 — Career"
          title="Experience"
          description="A timeline of roles, products, and the teams I've shipped with."
        />

        <ol className="relative mt-14 space-y-6 border-l border-border pl-6 sm:pl-10">
          {experience.map((item, i) => (
            <motion.li
              key={item.company}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={itemVariants(i)}
              className="group relative"
            >
              <motion.span
                whileHover={{ scale: 1.3 }}
                className="absolute -left-[31px] top-6 grid h-4 w-4 place-items-center rounded-full border-2 border-background bg-primary sm:-left-[43px]"
                aria-hidden
              />
              <Card className="overflow-hidden border-border/70 bg-card/50 backdrop-blur transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-lg">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-lg font-semibold sm:text-xl">
                      {item.role}{" "}
                      <span className="text-primary">@ {item.company}</span>
                    </h3>
                    <span className="font-mono text-xs text-muted-foreground">
                      {item.period}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{item.location}</p>
                  <p className="mt-4 text-sm leading-relaxed text-foreground/90">
                    {item.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.stack.map((s) => (
                      <Badge
                        key={s}
                        variant="secondary"
                        className="border border-border/60 font-mono text-[11px] font-normal"
                      >
                        {s}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
