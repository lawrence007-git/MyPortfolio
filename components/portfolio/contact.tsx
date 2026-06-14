"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MailIcon, MapPinIcon, SendIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { site, social } from "@/lib/portfolio-data";
import { SectionHeading } from "./section-heading";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export function Contact() {
  // No API — submit composes a mailto so this works on any static host.
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const subject = String(data.get("subject") ?? "");
    const message = String(data.get("message") ?? "");
    const body = `From: ${name} <${email}>\n\n${message}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="04 — Contact"
          title="Let's build something"
          description="Have a project in mind or just want to say hi? Drop me a line."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-start gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/15 text-primary">
                  <MailIcon className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">Email</p>
                  <Link
                    href={`mailto:${site.email}`}
                    className="block truncate font-medium hover:text-primary"
                  >
                    {site.email}
                  </Link>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-start gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/15 text-primary">
                  <MapPinIcon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">Location</p>
                  <p className="font-medium">{site.location}</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-6">
              <p className="text-xs uppercase tracking-wide text-muted-foreground">Find me on</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {social.map(({ label, href, icon: Icon }) => (
                  <Button key={label} asChild variant="outline" size="sm">
                    <Link href={href} target="_blank" rel="noreferrer noopener">
                      <Icon className="h-4 w-4" />
                      {label}
                    </Link>
                  </Button>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.form
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeInUp}
            transition={{ delay: 0.1 }}
            onSubmit={onSubmit}
            className="space-y-5 rounded-xl border border-border bg-card p-6 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" required placeholder="Ada Lovelace" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" required placeholder="you@domain.com" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" name="subject" required placeholder="Project inquiry" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell me a bit about what you're building..."
              />
            </div>
            <Button type="submit" size="lg" className="w-full group">
              Send message
              <SendIcon className="transition-transform group-hover:translate-x-0.5" />
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
