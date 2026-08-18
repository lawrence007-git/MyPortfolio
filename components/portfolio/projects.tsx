"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLinkIcon, GitBranchIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { projects } from "@/lib/portfolio-data";
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

export function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="03 — Work"
          title="Projects"
          description="A selection of things I've built, from client work to personal experiments."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={itemVariants(i)}
            >
              <Card className="flex h-full flex-col overflow-hidden border-border/70 bg-card/50 backdrop-blur transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-lg">
                <CardContent className="flex flex-1 flex-col p-6 sm:p-8">
                  <h3 className="text-lg font-semibold sm:text-xl">
                    {project.name}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/90">
                    {project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((s) => (
                      <Badge
                        key={s}
                        variant="secondary"
                        className="border border-border/60 font-mono text-[11px] font-normal"
                      >
                        {s}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    {project.liveUrl && (
                      <Button asChild size="sm" className="group">
                        <Link href={project.liveUrl} target="_blank" rel="noreferrer noopener">
                          <ExternalLinkIcon className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                          Live Demo
                        </Link>
                      </Button>
                    )}
                    <Button asChild size="sm" variant="outline">
                      <Link href={project.githubUrl} target="_blank" rel="noreferrer noopener">
                        <GitBranchIcon />
                        Source
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}