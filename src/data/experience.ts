export type Experience = {
  title: string;
  company: string;
  location: string;
  period: string;
  summary: string;
  type: "work" | "education";
};

export const experience: Experience[] = [
  {
    title: "Senior AI Engineer",
    company: "HiveScience AI",
    location: "Remote",
    period: "Oct 2025 – Present",
    summary:
      "Architected a patent-pending ML environment and production agent harness spanning context, memory, tools, structured outputs and recovery. Scaled processing from roughly 20 runs a month to more than 60 a week, helping revenue grow by over 100%.",
    type: "work",
  },
  {
    title: "Co-founder & AI Engineer",
    company: "TrendMind",
    location: "Remote",
    period: "Oct 2024 – Present",
    summary:
      "Built a multi-agent content platform with human approval, retrieval, analytics and model fine-tuning workflows. Reduced strategy planning time by 25% while taking features from first implementation through deployment.",
    type: "work",
  },
  {
    title: "Senior Full Stack Engineer",
    company: "CodeRabbit",
    location: "Remote (California, USA)",
    period: "Aug 2023 – Nov 2023",
    summary:
      "Optimized prompt templates and context packing to cut LLM cost ~15%. Migrated review configuration to YAML and built Jira and Linear integrations.",
    type: "work",
  },
  {
    title: "Senior Full Stack Engineer",
    company: "Oaks Lab",
    location: "Remote (Prague)",
    period: "Jul 2022 – Feb 2024",
    summary:
      "Led large features across five startup projects; re-architected the admin portal's front-end and APIs. Improved throughput ~30% and cut error rates ~20%.",
    type: "work",
  },
  {
    title: "Full Stack Engineer",
    company: "Second Company",
    location: "Remote (Haarlem, Netherlands)",
    period: "Sep 2021 – Jun 2023",
    summary:
      "React Native performance and native modules for iGarage; refactored auth and notifications; built a multi-tenant dashboard system.",
    type: "work",
  },
  {
    title: "Full Stack Developer (Lab Head)",
    company: "Deposits",
    location: "Remote (Dallas, TX)",
    period: "Apr 2021 – Oct 2021",
    summary:
      "Built Renapay's web app in Vue.js; rebuilt the invoicing system; automated white-label deployments through a custom CI/CD pipeline.",
    type: "work",
  },
  {
    title: "Full Stack Developer",
    company: "Engage",
    location: "Lagos, Nigeria",
    period: "Mar 2021 – Apr 2022",
    summary:
      "Built a drag-and-drop email template editor, shipped 2FA and multi-role access, improved SDK utilities and observability.",
    type: "work",
  },
  {
    title: "MSc Artificial Intelligence",
    company: "De Montfort University",
    location: "Leicester, UK",
    period: "Feb 2024 – Jun 2025",
    summary:
      "Deep Learning, Machine Learning, Data Mining, Evolutionary Computing, Fuzzy Systems, NLP. Thesis on efficient brain-tumour segmentation using parameter sharing and pruning in RAAGR²-Net.",
    type: "education",
  },
  {
    title: "BSc Human Anatomy / Neuroscience",
    company: "University of Port Harcourt",
    location: "Port Harcourt, Nigeria",
    period: "Jan 2014 – Dec 2019",
    summary:
      "Anatomy, biochemistry, neuroscience, research methods, histology. Project on neural pathway mapping and cognitive function analysis.",
    type: "education",
  },
];
