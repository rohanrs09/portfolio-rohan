import AboutSection from "~/components/about-section";
import { ProjectList, projects } from "~/components/project";
import Skills from "~/components/skills";
import { WorkExperienceList, workExperiences } from "~/components/work-experience";
import ContactUs from "../../components/contact-us";
import GitHubContributions from "~/components/github-contributions";
import Certifications from "~/components/certifications";
import certifications from "~/components/certifications/_certifications-data";

const HomePage = () => {
  return (
    <div className="!mt-8 space-y-14">
      <AboutSection />
      <Skills />
      <WorkExperienceList experiences={workExperiences} />
      <Certifications items={certifications.slice(0, 2)} showViewAll />
      <GitHubContributions />
      <ProjectList projects={projects.slice(0, 4)} />
      <ContactUs />
    </div>
  );
};

export default HomePage;
