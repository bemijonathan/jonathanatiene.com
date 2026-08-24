import type { Metadata } from "next";
import { SectionPage, Label } from "@/components/section-page";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Work at the intersection of artificial intelligence, neuroscience and efficient machine-learning systems.",
  alternates: { canonical: "/research" },
};

export default function ResearchPage() {
  return (
    <SectionPage
      title="Research"
      intro="My research sits between artificial intelligence, neuroscience and efficient machine-learning systems."
    >
      <section>
        <Label>Selected work</Label>
        <ul className="mt-6 space-y-6 border-t border-border pt-6">
          {[
            { title: "Efficient Brain Tumour Segmentation", venue: "Thesis" },
            { title: "Behavioural intelligence in agentic systems", venue: "Working paper" },
            { title: "Agentic memory beyond retrieval", venue: "Technical report" },
          ].map((p) => (
            <li key={p.title} className="flex flex-col gap-1">
              <span className="font-serif text-xl text-foreground">{p.title}</span>
              <span className="font-sans text-xs uppercase tracking-widest text-subtle">
                {p.venue}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </SectionPage>
  );
}
