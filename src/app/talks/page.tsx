import type { Metadata } from "next";
import { SectionPage, Label } from "@/components/section-page";

export const metadata: Metadata = {
  title: "Talks",
  description:
    "I speak about AI engineering, agentic systems, human behaviour and reliable AI systems.",
  alternates: { canonical: "/talks" },
};

const topics = [
  "Agentic memory",
  "Building reliable AI agents",
  "The harness is the product",
  "AI engineering beyond prompting",
  "AI and human behaviour",
  "From software engineer to AI engineer",
];

export default function TalksPage() {
  return (
    <SectionPage
      title="Talks"
      intro="I speak about AI engineering, agentic systems, human behaviour and reliable AI systems."
    >
      <section>
        <Label>Topics I speak about</Label>
        <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-serif text-lg text-foreground/90">
          {topics.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </section>
      <section className="mt-16 border-t border-border pt-8">
        <Label>Invite me to speak</Label>
        <p className="mt-3 font-serif text-lg text-muted">
          Interested in having me speak at your event?{" "}
          <a
            className="text-accent underline decoration-1 underline-offset-4 hover:text-accent-hover"
            href="mailto:bemijonathan.softwares@gmail.com"
          >
            Get in touch
          </a>
          .
        </p>
      </section>
    </SectionPage>
  );
}
