import CertificationsPageClient from "~/components/certifications/certifications-page-client";
import { getSEOTags } from "~/lib/seo";

export const metadata: ReturnType<typeof getSEOTags> = getSEOTags({
  title: "Certifications - Rohan Shelke",
  description:
    "Professional certifications and courses including Microsoft Azure Data Fundamentals, Azure Fundamentals, GitHub Advanced Security, GitHub Copilot, Microsoft Fabric, Spanish Language, and Japanese Language from Udemy and Microsoft.",
  canonicalUrlRelative: "/certifications",
  keywords: [
    "Certifications",
    "Microsoft Azure",
    "Azure Data Fundamentals",
    "Azure Fundamentals",
    "GitHub Advanced Security",
    "GitHub Copilot",
    "Microsoft Fabric",
    "Spanish Language",
    "Japanese Language",
    "Udemy Courses",
    "Cloud Computing",
    "Professional Development",
    "Rohan Shelke",
  ],
});

const CertificationsPage = () => {
  return (
    <div className="!mt-8">
      <CertificationsPageClient />
    </div>
  );
};

export default CertificationsPage;
