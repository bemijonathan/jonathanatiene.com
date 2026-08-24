import type { Metadata } from "next";
import { SectionPage, Label } from "@/components/section-page";

export const metadata: Metadata = {
  title: "Press",
  description:
    "Bios, headshots, areas of expertise and speaking topics for event organisers and journalists.",
  alternates: { canonical: "/press" },
};

const expertise = [
  "AI agents",
  "AI engineering",
  "Agentic memory",
  "Behavioural AI",
  "Production AI systems",
  "Human behaviour and AI",
];

export default function PressPage() {
  return (
    <SectionPage
      title="Press"
      intro="Everything an organiser or journalist should need to prepare an event page or article."
    >
      <section>
        <Label>Short bio</Label>
        <p className="mt-3 font-serif text-lg leading-relaxed text-foreground/90">
          Jonathan Atiene is an AI engineer, researcher and writer. He builds and studies
          intelligent systems, and writes about AI agents, memory and human behaviour.
        </p>
      </section>

      <section className="mt-14">
        <Label>Areas of expertise</Label>
        <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 font-serif text-lg text-foreground/90">
          {expertise.map((e) => (
            <li key={e}>{e}</li>
          ))}
        </ul>
      </section>

      <section className="mt-14">
        <Label>Contact</Label>
        <p className="mt-3 font-serif text-lg text-muted">
          <a
            className="text-accent underline decoration-1 underline-offset-4 hover:text-accent-hover"
            href="mailto:bemijonathan.softwares@gmail.com"
          >
            bemijonathan.softwares@gmail.com
          </a>
        </p>
      </section>
    </SectionPage>
  );
}
