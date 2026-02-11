import { createId } from "@paralleldrive/cuid2";
import { ChainGpt } from "~/assets/svg";

// Project cover images
import aiTutorCover from "~/assets/images/cover/aitutor.png";
import aiContentCover from "~/assets/images/cover/aigen.png";
import slideAuraCover from "~/assets/images/cover/slideaura.png";
import hotelBookingCover from "~/assets/images/cover/hotel.png";
import aiLogoGeneratorCover from "~/assets/images/cover/ailogogenerator.png";

const projects = [
  {
    id: createId(),
    Icon: ChainGpt,
    title: `AI Voice Tutor – Adaptive Learning Platform`,
    description:
      "Emotion-aware AI tutoring platform with voice interaction, real-time emotion detection, and personalized learning with subscriptions.",
    deployedURL: "https://aitutorial-layfirto.vercel.app/",
    cover: aiTutorCover,
    stacks: ["Next.js", "TypeScript", "Supabase", "Hugging Face SLM", "ElevenLabs", "Deepgram", "Stripe"],
    isRepo: true,
    repoUrl: "https://github.com/rohanrs09/aitutorial",
  },

  {
    id: createId(),
    Icon: ChainGpt,
    title: `AI Content Generator – SaaS Platform`,
    description:
      "AI-powered SaaS for generating blogs and social content with credit-based usage, rich editor, and secure authentication.",
    deployedURL: "https://contentgeneratorai.vercel.app/",
    cover: aiContentCover,
    stacks: ["Next.js", "TypeScript", "Gemini API", "Clerk", "PostgreSQL", "Drizzle ORM"],
    isRepo: true,
    repoUrl: "https://github.com/rohanrs09/ai-content-generator",
  },

  {
    id: createId(),
    Icon: ChainGpt,
    title: `SlideAura – AI Presentation Platform`,
    description:
      "AI SaaS platform that creates professional PPTs from prompts with real-time editing and one-click export.",
    deployedURL: "https://slideaura.vercel.app",
    cover: slideAuraCover,
    stacks: ["React", "TypeScript", "Firebase", "Clerk", "Tailwind CSS"],
    isRepo: true,
    repoUrl: "https://github.com/rohanrs09/slideaura",
  },

  {
    id: createId(),
    Icon: ChainGpt,
    title: `Smart Hotel Booking System`,
    description:
      "Full-stack hotel booking platform with search, booking, payments, role-based access, and loyalty rewards.",
    deployedURL: "#",
    cover: hotelBookingCover, // Placeholder image
    stacks: ["React.js", "ASP.NET Core", "MySQL", "SQL Server"],
    isRepo: true,
    repoUrl: "https://github.com/rohanrs09/SHMS",
  },

  {
    id: createId(),
    Icon: ChainGpt,
    title: `AI Logo Generator`,
    description:
      "AI-powered logo generator tool that creates unique brand logos based on user text input and style preferences.",
    deployedURL: "#",
    cover: aiContentCover, // Placeholder image
    stacks: ["Next.js", "TypeScript", "Tailwind CSS", "AI API", "Logo Generation"],
    isRepo: true,
    repoUrl: "https://github.com/rohanrs09/ai-logo-generator",
  },
];

export default projects;
export type TProject = (typeof projects)[0];
