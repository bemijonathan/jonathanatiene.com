import type { Metadata } from "next";
import Image from "next/image";
import { SectionPage, Label } from "@/components/section-page";
import { site } from "@/lib/site";
import { speakingTopics } from "@/data/talks";

export const metadata: Metadata = {
  title: "Press",
  description:
    "Bios, headshots, areas of expertise and speaking topics for event organisers and journalists working with Jonathan Atiene.",
  alternates: { canonical: "/press" },
};

const expertise = [
  "AI agents & agentic systems",
  "Production AI engineering",
  "Agentic memory",
  "AI evaluation & reliability",
  "Open models & fine-tuning",
];

const shortBio =
  "Jonathan Atiene is an AI engineer, researcher and writer based in London. He builds and studies intelligent systems, and writes about AI agents, memory, evaluation, open models and the engineering required to make AI work in the real world.";

const mediumBio =
  "Jonathan Atiene is a London-based AI engineer, researcher and writer working at the intersection of production AI, agentic systems and applied research. He originally trained in human anatomy and neuroscience before moving into software engineering, and later completed an MSc in Artificial Intelligence. He currently builds production AI systems at Hive Science and writes about the engineering and research questions emerging as software becomes AI-native.";

const fullBio =
  "Jonathan Atiene is a London-based AI engineer, researcher and writer whose work sits between artificial intelligence, software engineering and applied research. He originally studied human anatomy and neuroscience at the University of Port Harcourt before moving into software engineering, where he spent several years building production backend, frontend, cloud and full-stack systems across companies including CodeRabbit, Oaks Lab and TrendMind. He later completed an MSc in Artificial Intelligence at De Montfort University, with thesis research on efficient brain-tumour segmentation using parameter sharing and pruning. Today he builds production AI systems at Hive Science — LLM agent harnesses, context and memory architectures, and the pipelines that make them reliable — while writing and speaking publicly about production AI, agentic systems, evaluation and open models. He publishes essays and research at jonathanatiene.com.";

export default function PressPage() {
  return (
    <SectionPage
      title="Press"
      intro="Everything an organiser or journalist should need to prepare an event page or article — without needing to email me."
    >
      <section>
        <Label>Headshot</Label>
        <div className="mt-4">
          <Image
            src="/images/me.jpg"
            alt="Jonathan Atiene headshot"
            width={200}
            height={200}
            className="rounded-md"
          />
          <p className="mt-3 font-sans text-sm text-muted">
            <a
              href="/images/me.jpg"
              download
              className="text-accent underline decoration-1 underline-offset-4 hover:text-accent-hover"
            >
              Download headshot →
            </a>
          </p>
        </div>
      </section>

      <section className="mt-14">
        <Label>Short bio (≈40 words)</Label>
        <p className="mt-3 font-serif text-lg leading-relaxed text-foreground/90">
          {shortBio}
        </p>
      </section>

      <section className="mt-10">
        <Label>Medium bio (≈100 words)</Label>
        <p className="mt-3 font-serif text-lg leading-relaxed text-foreground/90">
          {mediumBio}
        </p>
      </section>

      <section className="mt-10">
        <Label>Full bio (≈180 words)</Label>
        <p className="mt-3 font-serif text-lg leading-relaxed text-foreground/90">
          {fullBio}
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
        <Label>Speaking topics</Label>
        <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 font-serif text-lg text-foreground/90">
          {speakingTopics.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </section>

      <section className="mt-14">
        <Label>Contact</Label>
        <p className="mt-3 font-serif text-lg text-muted">
          <a
            className="text-accent underline decoration-1 underline-offset-4 hover:text-accent-hover"
            href={`mailto:${site.email}`}
          >
            {site.email}
          </a>
        </p>
      </section>
    </SectionPage>
  );
}
