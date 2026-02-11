import { createId } from "@paralleldrive/cuid2";
import { StaticImageData } from "next/image";

// Import certificate images
import githubGH900Image from "~/assets/images/certificate/GH-900.jpg";
import githubCopilotImage from "~/assets/images/certificate/GitHub Copilot.jpg";
import msFabricImage from "~/assets/images/certificate/MS Fabric.jpg";
import spanishImage from "~/assets/images/certificate/Spanish.jpg";
import japaneseImage from "~/assets/images/certificate/japanese.jpg";

export type TCertification = {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  credentialUrl?: string;
  image?: StaticImageData;
};

const certifications: TCertification[] = [
  // Microsoft Official Certifications
  {
    id: createId(),
    title: "Microsoft Certified: Azure Data Fundamentals",
    issuer: "Microsoft",
    issueDate: "Feb 2026",
    credentialId: "C67166CE6108515F",
    credentialUrl:
      "https://learn.microsoft.com/en-gb/users/shelkerohancognizant-3675/credentials/c67166ce6108515f?ref=https%3A%2F%2Fwww.linkedin.com%2F",
  },
  {
    id: createId(),
    title: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    issueDate: "Nov 2025",
    credentialId: "17427A307A3489CA",
    credentialUrl:
      "https://learn.microsoft.com/en-gb/users/ShelkeRohanCognizant-3675/credentials/17427A307A34B9CA?ref=https%3A%2F%2Fwww.linkedin.com%2F",
  },
  // Udemy Certifications
  {
    id: createId(),
    title: "GitHub Advanced Security (GH-900)",
    issuer: "Udemy",
    issueDate: "2025",
    image: githubGH900Image,
  },
  {
    id: createId(),
    title: "GitHub Copilot",
    issuer: "Udemy",
    issueDate: "2025",
    image: githubCopilotImage,
  },
  {
    id: createId(),
    title: "Microsoft Fabric Complete Course",
    issuer: "Udemy - Ansh Lamba",
    issueDate: "2025",
    image: msFabricImage,
  },
  {
    id: createId(),
    title: "Spanish Language Complete Course",
    issuer: "Udemy",
    issueDate: "2025",
    image: spanishImage,
  },
  {
    id: createId(),
    title: "Japanese Language Complete Course",
    issuer: "Udemy",
    issueDate: "2025",
    image: japaneseImage,
  },
];

export default certifications;
