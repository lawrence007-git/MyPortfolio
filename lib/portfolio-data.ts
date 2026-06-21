/**
 * 📝 EDIT THIS FILE to customize your portfolio.
 * All content (name, bio, experience, skills, contact) lives here.
 */

import {
  Code2, Palette, Server, Database, Wrench, Sparkles,
  GitBranch, Link, Send, Mail, type LucideIcon,
} from "lucide-react";

export const site = {
  name: "Lawrence Bautista",
  role: "Frontend Developer",
  tagline: "Aspiring Frontend Developer and UI Designer with a strong foundation in modern web technologies and user-centered design.",
  location: "San Pablo City, Laguna, Philippines",
  email: "lawrence.bautista007@gmail.com",
  resumeUrl: "#",
};

export const social: { label: string; href: string; icon: LucideIcon }[] = [
  { label: "GitHub", href: "https://github.com/lawrence007-git", icon: GitBranch },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/lawrence-bautista-b3a64a383/", icon: Link },
  { label: "Email", href: "lawrence.bautista007@gmail.com", icon: Mail },
];

export const stats = [
  { label: "Years experience", value: "1+" },
  { label: "Projects shipped", value: "2+" },
  { label: "Certifications", value: "5" },
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  stack: string[];
};

export const experience: Experience[] = [
  {
    company: "Opalus Solutions Inc.",
    role: "Frontend/UI Design Intern",
    period: "Jan 2026 — Present",
    location: "Philippines",
    description:
      "Contributed to the development of a Trucking Management System (TMS) designed to streamline logistics operations, fleet management, delivery scheduling, and business reporting. Designed a unified platform to replace fragmented spreadsheets and manual tracking, creating a centralized system for live fleet monitoring, automated driver scheduling, fuel tracking, and billing. Collaborated with cross-functional teams to transform business requirements into intuitive user interfaces using Figma, Git, and GitHub.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "ShadCN UI"],
  },
  {
    company: "Rural Health Unit Nagcarlan",
    role: "Frontend Developer",
    period: "Feb 2025 — Jan 2026",
    location: "Nagcarlan, Laguna, Philippines",
    description:
      "Contributed to the development of the Integrated Inventory Management System (IIMS) for the Nagcarlan Rural Health Unit (RHU), designed to improve inventory tracking, patient record management, and healthcare service delivery. Transformed complex healthcare workflows into intuitive and accessible interfaces, reducing reliance on manual record-keeping and improving operational visibility across departments.",
    stack: ["HTML", "CSS", "JavaScript", "Figma"],
  },
];

export type SkillGroup = {
  title: string;
  icon: LucideIcon;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["HTML", "CSS", "JavaScript", "TypeScript"],
  },
  {
    title: "Frameworks",
    icon: Sparkles,
    skills: ["Next.js", "React", "Tailwind CSS", "ShadCN UI"],
  },
  {
    title: "Styling & UI",
    icon: Palette,
    skills: ["Tailwind CSS", "ShadCN UI", "Figma"],
  },
  {
    title: "Tooling",
    icon: Wrench,
    skills: ["VSCode", "Git", "GitHub", "Figma"],
  },
];