"use client";

import Image from "next/image";
import config from "~/config";
import { cn } from "~/lib/utils";
import { typo } from "./ui/typograpghy";
import codingImage from "~/assets/images/rohan.jpeg";

const AboutSection = () => {
  return (
    <section className="grid gap-8 sm:gap-4 md:grid-cols-3" aria-label="About">
      <div className="order-2 space-y-3 sm:order-1 md:col-span-2">
        <h1 className="font-serif text-2xl sm:text-3xl">Rohan, 21</h1>

        <p className={typo({ variant: "paragraph", font: "sans" })}>
          Product-focused Engginer who ships and learns fast.
I turn ideas into working products and focus on the details that make software useful and reliable.
        </p>

        <p className={typo({ variant: "paragraph", font: "sans" })}>
          Currently building{" "}
          <a
            href="https://aitutorial-layfirto.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:underline"
          >
            AI Voice Tutor
          </a>
          , an AI-powered voice tutor that detects emotions, adapts teaching styles, and delivers personalized learning in real time.
        </p>

        <p className={typo({ variant: "paragraph", font: "sans" })}>
  Before that: built an AI-powered content platform at{" "}
  <a
    href="https://contentgeneratorai.vercel.app/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-white hover:underline"
  >
    AI-Gen
  </a>{" "}
  that generated blogs, articles, marketing copy, product descriptions, and social media
  content from prompts. Solo-built the entire software stack for AI-Gen: authentication,
  credit-based usage by word count, rich text editor, content history, and template-driven
  content workflows.
</p>


        <p className={typo({ variant: "paragraph", font: "sans" })}>
  3+ Hackathons. <span className="text-white">5+ Freelance & Personal Products</span> shipped. 
  1 Startup Internship. 2 failed startups of my own, each one worth the lessons.
</p>



        <p className={cn(typo({ variant: "paragraph", font: "sans" }), "sm:!mt-4")}>
          <span className="text-white">Open to Work</span>: Full-Time, Freelance, or Collabs.{" "}
          <a
            href={`mailto:${config.social.email}`}
            aria-label="Hire Me"
            className="el-focus-styles text-ring"
          >
            Let&apos;s talk.
          </a>
        </p>
      </div>

      <div className="relative order-1 block aspect-square sm:order-2 sm:hidden md:block md:h-[360px] md:w-[360px] md:self-center">
        <div className="absolute inset-0 -z-10 size-full rounded-md bg-gradient-to-br from-muted via-secondary to-background opacity-80" />
        <Image
          alt="Locked In"
          src={codingImage}
          placeholder="blur"
          className="size-full -rotate-3 transform rounded-md object-cover shadow-md brightness-90 contrast-125 grayscale saturate-0"
          priority
        />
      </div>
    </section>
  );
};

export default AboutSection;
