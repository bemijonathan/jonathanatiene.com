import type { Metadata } from "next";
import { SectionPage } from "@/components/section-page";

export const metadata: Metadata = {
  title: "About",
  description:
    "Jonathan Atiene — AI engineer, researcher and writer. Building and studying intelligent systems.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <SectionPage
      title="About"
      intro="I build and study intelligent systems, and write about AI agents, memory, human behaviour and the engineering required to make AI work in the real world."
    >
      <div className="prose">
        <p>
          My work sits at the intersection of AI engineering, agentic systems, human
          behaviour and research. I care about production reliability, memory that behaves
          like memory, and the harness around the model.
        </p>
        <h2>Currently</h2>
        <p>
          Building AI systems in production, writing about what I learn, and publishing
          research on agentic memory and behavioural intelligence.
        </p>
      </div>
    </SectionPage>
  );
}
