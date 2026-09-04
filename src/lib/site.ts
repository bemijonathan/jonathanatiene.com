export const site = {
  name: "Jonathan Atiene",
  descriptor: "Senior AI engineer specialising in production LLM and agentic systems.",
  tagline:
    "I architect and ship agent harnesses, RAG and reranking pipelines, context and memory systems, evaluation frameworks, structured outputs, tool orchestration and human-in-the-loop workflows. My work spans Llama fine-tuning and deep-learning research through to Python and TypeScript platforms on AWS.",
  metaDescription:
    "Senior AI engineer building production LLM and agentic systems, RAG pipelines, model fine-tuning, evaluation and AI infrastructure.",
  url: "https://jonathanatiene.com",
  locale: "en_US",
  email: "bemijonathan@gmail.com",
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
    "AI & Language",
    "Research",
    "Career / Engineering",
    "Notes",
  ] as const,
} as const;

export type SiteConfig = typeof site;
