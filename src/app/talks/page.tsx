import type { Metadata } from "next";
import Image from "next/image";
import { SectionPage, Label } from "@/components/section-page";
import { talks, speakingTopics } from "@/data/talks";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Talks",
  description:
    "I speak about AI engineering, agentic systems, open models and the engineering questions emerging as software becomes AI-native.",
  alternates: { canonical: "/talks" },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function TalksPage() {
  return (
    <SectionPage
      title="Talks"
      intro="I speak about the engineering and research questions emerging as software becomes AI-native — drawing from production AI, agentic systems and open-model research, with an emphasis on practical ideas engineers can apply."
    >
      <section>
        <Label>Topics I speak about</Label>
        <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-serif text-lg text-foreground/90">
          {speakingTopics.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </section>

      <section className="mt-20">
        <Label>Selected appearances</Label>
        <ul className="mt-6 space-y-12 border-t border-border pt-8">
          {talks.map((talk) => (
            <li
              key={talk.id}
              className="grid grid-cols-1 gap-6 sm:grid-cols-[180px_1fr] sm:gap-10"
            >
              {talk.image ? (
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md bg-surface">
                  <Image
                    src={talk.image}
                    alt={talk.title}
                    fill
                    sizes="(min-width: 640px) 180px, 100vw"
                    className="object-cover"
                  />
                </div>
              ) : (
                <div />
              )}
              <div>
                <p className="font-sans text-xs uppercase tracking-widest text-subtle">
                  {formatDate(talk.date)} · {talk.location}
                </p>
                <h3 className="mt-2 font-serif text-2xl leading-snug text-foreground">
                  {talk.title}
                </h3>
                <p className="mt-1 font-sans text-sm text-muted">{talk.event}</p>
                <p className="mt-3 font-serif text-lg text-muted">{talk.description}</p>
                {(talk.slidesUrl || talk.recordingUrl) && (
                  <p className="mt-3 flex flex-wrap gap-x-6 text-sm">
                    {talk.slidesUrl ? (
                      <a
                        href={talk.slidesUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-accent underline decoration-1 underline-offset-4 hover:text-accent-hover"
                      >
                        Slides →
                      </a>
                    ) : null}
                    {talk.recordingUrl ? (
                      <a
                        href={talk.recordingUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-accent underline decoration-1 underline-offset-4 hover:text-accent-hover"
                      >
                        Watch recording →
                      </a>
                    ) : null}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-20 border-t border-border pt-8">
        <Label>Invite me to speak</Label>
        <p className="mt-3 font-serif text-lg text-muted">
          Interested in having me speak at your event?{" "}
          <a
            className="text-accent underline decoration-1 underline-offset-4 hover:text-accent-hover"
            href={`mailto:${site.email}`}
          >
            Get in touch
          </a>
          .
        </p>
      </section>
    </SectionPage>
  );
}
