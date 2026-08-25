import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SectionPage, Label } from "@/components/section-page";
import { experience } from "@/data/experience";

export const metadata: Metadata = {
  title: "About",
  description:
    "Jonathan Atiene — AI engineer, researcher and writer. Building and studying intelligent systems at the intersection of engineering and applied AI research.",
  alternates: { canonical: "/about" },
};

const work = experience.filter((e) => e.type === "work");
const education = experience.filter((e) => e.type === "education");

export default function AboutPage() {
  return (
    <SectionPage
      title="About"
      intro="I build and study intelligent systems, and write about AI agents, memory, evaluation, open models and the engineering required to make AI work in the real world."
    >
      <div className="mb-12">
        <Image
          src="/images/me.jpg"
          alt="Jonathan Atiene"
          width={160}
          height={160}
          className="rounded-full"
          priority
        />
      </div>

      <div className="prose">
        <p>
          I'm an AI engineer, researcher and software builder interested in one broad
          question:
        </p>
        <p>
          <em>
            What does it take to turn increasingly capable AI models into systems people
            can actually depend on?
          </em>
        </p>
        <p>
          My path into AI has been unusually interdisciplinary. I originally studied human
          anatomy and neuroscience before moving into software engineering, where I spent
          several years building backend, frontend, cloud and production systems. That
          engineering foundation eventually led me deeper into machine learning, and I
          later completed an MSc in Artificial Intelligence. Today those fields overlap in
          my work. I'm currently based in London, building production AI systems at
          Hive Science.
        </p>
        <p>
          I'm interested not only in what models can do, but also in the infrastructure
          around them — how we evaluate their behaviour, how they interact with existing
          software systems, and how humans interpret and make decisions with their
          outputs.
        </p>

        <h2>What I work on</h2>

        <h3>Production AI systems</h3>
        <p>
          Building and studying the engineering layers required to move AI from prototypes
          into reliable software: agentic workflows, evaluation, context engineering,
          retrieval, memory, observability, structured generation, reliability, and
          human-in-the-loop systems.
        </p>

        <h3>Applied AI research</h3>
        <p>
          Practical machine-learning problems where model efficiency, intelligent systems
          and real-world deployment intersect. Neuroscience and behavioural science show
          up here as supporting lenses — useful when they genuinely inform how a system
          should be built, evaluated or trusted, not as ends in themselves.
        </p>

        <h2>How I think</h2>
        <p>I approach AI from three perspectives simultaneously:</p>
        <ul>
          <li>
            <strong>Engineer</strong> — can this system be built, tested, operated and
            trusted in production?
          </li>
          <li>
            <strong>Researcher</strong> — what evidence supports the assumptions we're
            making?
          </li>
          <li>
            <strong>Product thinker</strong> — how will a human actually understand and
            use what the system produces?
          </li>
        </ul>
        <p>The interesting AI problems increasingly need all three.</p>
      </div>

      <section className="mt-20">
        <Label>Selected experience</Label>
        <ul className="mt-6 divide-y divide-border border-t border-border">
          {work.map((e) => (
            <li key={`${e.company}-${e.period}`} className="py-6">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                <div>
                  <p className="font-serif text-lg text-foreground">
                    {e.title}{" "}
                    <span className="text-muted">· {e.company}</span>
                  </p>
                  <p className="mt-1 font-serif text-base text-muted">{e.summary}</p>
                </div>
                <p className="font-sans text-xs uppercase tracking-widest text-subtle whitespace-nowrap">
                  {e.period}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16">
        <Label>Education</Label>
        <ul className="mt-6 divide-y divide-border border-t border-border">
          {education.map((e) => (
            <li key={`${e.company}-${e.period}`} className="py-6">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                <div>
                  <p className="font-serif text-lg text-foreground">
                    {e.title}{" "}
                    <span className="text-muted">· {e.company}</span>
                  </p>
                  <p className="mt-1 font-serif text-base text-muted">{e.summary}</p>
                </div>
                <p className="font-sans text-xs uppercase tracking-widest text-subtle whitespace-nowrap">
                  {e.period}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16 border-t border-border pt-8">
        <p className="font-serif text-lg text-muted">
          A full CV is{" "}
          <a
            href="/resume.pdf"
            className="text-accent underline decoration-1 underline-offset-4 hover:text-accent-hover"
          >
            available as a PDF
          </a>
          . For anything else,{" "}
          <Link
            href="/press"
            className="text-accent underline decoration-1 underline-offset-4 hover:text-accent-hover"
          >
            press &amp; contact
          </Link>{" "}
          has bios, headshots and email.
        </p>
      </section>
    </SectionPage>
  );
}
