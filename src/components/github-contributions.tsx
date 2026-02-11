"use client";

import dynamic from "next/dynamic";

const GitHubCalendar = dynamic(() => import("react-github-calendar"), {
  ssr: false,
});

const GitHubContributions = () => {
  return (
    <section aria-label="github-contributions" className="space-y-4">
      <h2 className="font-serif text-2xl sm:text-3xl">GitHub Contributions</h2>
      <div className="w-full">
        <GitHubCalendar
          username="rohanrs09"
          colorScheme="dark"
          fontSize={12}
          blockSize={12}
          theme={{
            dark: ["#1b1b1b", "#333333", "#666666", "#999999", "#ffffff"],
          }}
          throwOnError={false}
        />
      </div>
      <p className="text-sm text-muted-foreground text-center">
        Contributions from public repositories only
      </p>
    </section>
  );
};

export default GitHubContributions;
