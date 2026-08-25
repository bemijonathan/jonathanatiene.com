export type ProjectType = "Product" | "Open Source" | "Research" | "Archive";

export type Project = {
  slug: string;
  title: string;
  type: ProjectType;
  date: string;
  summary: string;
  problem?: string;
  whyInteresting?: string;
  learned?: string;
  tags: string[];
  image?: string;
  link?: string;
  github?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "trendmind",
    title: "TrendMind",
    type: "Product",
    date: "2024",
    summary:
      "An AI-assisted personal-branding platform exploring how intelligent systems can behave like a persistent content strategist.",
    problem:
      "Consistent, adaptive content across platforms is expensive to produce and hard to keep on-brand.",
    whyInteresting:
      "It's an applied experiment in agentic workflows, content intelligence and platform adaptation — one product touching every part of production AI I care about.",
    learned:
      "The harness around a model — retrieval, memory, feedback, approvals — matters more than the model itself when reliability is the goal.",
    tags: ["AI", "Agentic Systems", "Product"],
    image: "/images/trendmind.png",
    link: "https://trendmind.co",
    featured: true,
  },
  {
    slug: "code-critique",
    title: "Code-critique",
    type: "Open Source",
    date: "2023-04-01",
    summary:
      "An AI-powered CLI that reviews code inside your project before a pull request is opened.",
    problem:
      "PR review latency and context-loss make expensive humans re-explain the same issues on every branch.",
    whyInteresting:
      "The interesting problem isn't the review itself — it's compressing project context into something a model can act on without hallucinating.",
    tags: ["AI", "CLI", "Developer Tools"],
    image: "/images/code-critique.png",
    github: "https://github.com/bemijonathan/code-critique-ai",
    featured: true,
  },
  {
    slug: "brain-tumour-segmentation",
    title: "Efficient Brain Tumour Segmentation (RAAGR²-Net)",
    type: "Research",
    date: "2025",
    summary:
      "MSc research on reducing model complexity in brain tumour segmentation through parameter sharing and pruning — preserving segmentation quality while cutting computational cost.",
    problem:
      "State-of-the-art segmentation models are too heavy to deploy at the point of care.",
    whyInteresting:
      "A concrete case of the efficiency question I keep coming back to: how much can you take away from a model before its behaviour meaningfully degrades?",
    tags: ["Deep Learning", "Computer Vision", "Research"],
    featured: true,
  },
  {
    slug: "techcify",
    title: "Techcify",
    type: "Product",
    date: "2023-07-15",
    summary:
      "Personalized practice exams and AI-powered learning tools for AWS certifications — reported 95% first-attempt pass rate.",
    tags: ["AI", "Education", "AWS"],
    image: "/images/techcify.png",
    link: "https://techcify.com",
  },
  {
    slug: "vaspera",
    title: "Vaspera",
    type: "Product",
    date: "2023",
    summary:
      "Predictive modelling and analytics platform designed to combat Antimicrobial Resistance (AMR) by improving prediction of resistance patterns.",
    tags: ["AI", "Healthcare", "Analytics"],
    image: "/images/vaspera.png",
    link: "https://github.com/glitzsoftware/vaspera",
  },
  {
    slug: "sayonate",
    title: "Sayonate",
    type: "Product",
    date: "2023",
    summary:
      "A reimagination of API documentation — AI-assisted, readable, and generated from code.",
    tags: ["Docs", "AI", "Developer Tools"],
    image: "/images/sayonate.png",
    link: "https://sayonate.com",
  },
  {
    slug: "synthflow",
    title: "SynthFlow — Synthetic Data for LLMs & Agentic Systems",
    type: "Research",
    date: "2025",
    summary:
      "Co-authored exploration of synthetic data pipelines for training and evaluating LLMs and agentic systems.",
    tags: ["LLMs", "Synthetic Data", "Research"],
  },
  {
    slug: "coderabbit",
    title: "CodeRabbit",
    type: "Archive",
    date: "2023",
    summary:
      "AI-driven contextual code review for engineering teams — built as senior full-stack engineer at the company.",
    tags: ["Node.js", "React", "Prompt Engineering", "AI"],
    image: "/images/code-rabbit.png",
    link: "https://www.coderabbit.ai/",
  },
  {
    slug: "cravekitchens",
    title: "CraveKitchens",
    type: "Archive",
    date: "2023",
    summary:
      "A multi-tenant platform for ordering one meal from several kitchens — white-label restaurant retail systems.",
    tags: ["Redis", "API", "Multi-tenant"],
    image: "/images/crave-kitchens.png",
    link: "https://www.oakslab.com/case-studies/crave",
  },
  {
    slug: "karus-ai",
    title: "Karus AI",
    type: "Archive",
    date: "2022",
    summary: "AI-driven risk-analytics platform for auto finance.",
    tags: ["Frontend", "Backend", "Analytics"],
    image: "/images/karus.png",
    link: "https://www.oakslab.com/case-studies/karus",
  },
  {
    slug: "igarage",
    title: "iGarage",
    type: "Archive",
    date: "2022",
    summary:
      "A mobility platform connecting car-owners, garages, and commercial partners.",
    tags: ["Microservices", "Mobile", "API"],
    image: "/images/igarage.png",
    link: "https://apps.apple.com/gb/app/igarage-car-passport/id1117766263",
  },
  {
    slug: "talenton",
    title: "TalentOn",
    type: "Archive",
    date: "2022",
    summary: "A digital platform for on-the-job training.",
    tags: ["Node.js", "React", "MongoDB"],
    image: "/images/talent-on.png",
    link: "https://talenton.nu/",
  },
  {
    slug: "alphacruise",
    title: "AlphaCruise",
    type: "Archive",
    date: "2022",
    summary: "A travel-agency platform for booking and managing travel in Nigeria.",
    tags: ["Node.js", "React"],
    image: "/images/alpha-cruise.png",
    link: "https://alphacruisetravels.com",
  },
];
