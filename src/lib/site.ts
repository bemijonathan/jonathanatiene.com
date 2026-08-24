export const site = {
  name: "Jonathan Atiene",
  descriptor: "AI engineer, researcher and writer.",
  tagline:
    "I build and study intelligent systems, and write about AI agents, memory, human behaviour and the engineering required to make AI work in the real world.",
  url: "https://jonathanatiene.com",
  locale: "en_US",
  email: "bemijonathan.softwares@gmail.com",
  social: {
    github: "https://github.com/bemijonathan",
    x: "https://x.com/bemijonathan",
    linkedin: "https://www.linkedin.com/in/jonathan-atiene",
    substack: "https://mixedcode.substack.com",
  },
  themes: [
    "AI Engineering",
    "Agentic Systems",
    "Memory",
    "Human Behaviour",
    "AI & Language",
    "Research",
    "Career / Engineering",
    "Notes",
  ] as const,
} as const;

export type SiteConfig = typeof site;
