import { ConfigProps } from "./types/config";

export const config = {
  appName: "$whoami",
  appDesignation: "Software Engineer",
  appDescription: `Hi, I'm Rohan. I'm funny.`,

  domainName: "rohanworks.com",

  colors: {
    theme: "dark",
    main: "#000000",
  },

  social: {
    github: "https://github.com/rohanrs09",
    linkedin: "https://www.linkedin.com/in/rohan-shelke-bba43b22b/",
    instagram: "https://www.instagram.com/layfirto/",
    twitter: "https://x.com/RohanSh52817293 ",
    // discord: "https://discordapp.com/users/xxxx",
    email: "shelkerohan7309@gmail.com",
    phone: "+919359477309",
    youtube: "https://www.youtube.com/@shodhakpravsi",
  },

  auth: {
    loginUrl: "/api/auth/signin",
    callbackUrl: "/dashboard",
  },
} as ConfigProps;

export default config;
