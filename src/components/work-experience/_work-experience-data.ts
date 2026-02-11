import { createId } from "@paralleldrive/cuid2";

export type TWorkExperience = {
  id: string;
  company: string;
  website: string;
  role: string;
  description: string;
  stacks: string[];
};

const workExperiences: TWorkExperience[] = [
  {
    id: createId(),
    company: "Cognizant Technology Solutions",
    website: "https://www.cognizant.com/",
    role: "Software Engineer",
    description:
      "Building and improving enterprise web applications with full-stack development. Worked on API integrations, performance optimization, and UI improvements in a team environment.",
    stacks: [
      "React.js",
      "ASP.NET Core",
      "SQL Server",
      "REST APIs",
      "TypeScript",
      "TailwindCSS",
    ],
  },
  {
    id: createId(),
    company: "Freelancing",
    website: "#",
    role: "Web Developer Intern",
    description:
      "Improved web app performance and usability, contributed to front-end and basic back-end features, and streamlined payment workflows.",
    stacks: [
      "React.js",
      "JavaScript",
      "Node.js",
      "Payment Integrations",
      "Express.js",
      "MongoDB",
    ],
  },
];

export default workExperiences;
