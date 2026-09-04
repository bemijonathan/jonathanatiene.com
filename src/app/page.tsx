import Link from "next/link";
import { getFeaturedArticles, getLatestArticles } from "@/lib/content";
import { site } from "@/lib/site";

const skills = [
  {
    area: "LLM and agent architecture",
    expertise:
      "Production agent harnesses, multi-agent workflows, LangGraph state graphs, tool orchestration, Pydantic-validated structured outputs, context windows, long-term memory, human approval gates and failure recovery.",
  },
  {
    area: "Retrieval and knowledge systems",
    expertise:
      "RAG pipelines, vector retrieval with Qdrant, query and document representation, reranking, citation grounding and knowledge graphs—including retrieval across more than 70,000 clinical records.",
  },
  {
    area: "Language models and fine-tuning",
    expertise:
      "Llama 3B fine-tuning with PyTorch, Hugging Face and Vertex AI; dataset preparation, synthetic-data pipelines, prompt and context optimisation, and open-model inference workflows.",
  },
  {
    area: "Deep learning and model efficiency",
    expertise:
      "RAAGR²-Net brain-tumour segmentation, model pruning, weight sharing and parameter-efficiency research focused on reducing model size and deployment cost without losing useful performance.",
  },
  {
    area: "Evaluation and reliability",
    expertise:
      "Agent evaluation, red teaming, Langfuse tracing, schema validation, evidence checks, observability and recovery paths for long-running model and tool workflows.",
  },
  {
    area: "AI platform engineering",
    expertise:
      "Python, TypeScript, Node.js, PostgreSQL, AWS Glue, serverless AWS services, GCP, Docker, Terraform, CI/CD and scalable data and ML pipelines.",
  },
];

const selectedSystems = [
  {
    name: "HiveScience AI",
    title: "Audience intelligence at enterprise scale",
    summary:
      "A patent-pending ML environment for Fortune 500 teams, with a production agent harness spanning context, memory, tool orchestration, structured outputs, validation and failure recovery.",
  },
  {
    name: "Axon · Neurochecklists",
    title: "Evidence-grounded answers for neurology",
    summary:
      "A privacy-conscious RAG agent that searches and reranks more than 70,000 clinical checklist records to return structured, cited answers in under 2.5 seconds.",
  },
  {
    name: "AskHook",
    title: "Social intelligence from short-form video",
    summary:
      "An agentic system that distinguishes organic virality from paid promotion and turns patterns across more than 500 content pieces into actionable ideas in minutes.",
  },
];

const currentlyExploring = [
  "Agentic memory",
  "Open-model fine-tuning",
  "AI system reliability",
  "Agent evaluation",
  "Context engineering",
];

export default async function HomePage() {
  const [featured] = await getFeaturedArticles();
  const latest = (await getLatestArticles(4)).filter((a) => a.slug !== featured?.slug).slice(0, 3);

  return (
    <div className="mx-auto max-w-4xl px-6 py-20 sm:py-28">
      {/* Hero */}
      <section className="max-w-2xl">
        <h1 className="font-serif text-4xl leading-[1.1] tracking-tight text-foreground sm:text-5xl">
          {site.name}
        </h1>
        <p className="mt-3 font-sans text-lg text-muted">{site.descriptor}</p>
        <p className="mt-1 font-sans text-sm text-subtle">
          United Kingdom <span aria-label="United Kingdom">🇬🇧</span>
        </p>
        <p className="mt-6 max-w-xl font-serif text-lg leading-relaxed text-foreground/90">
          {site.tagline}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
          <Link
            href="/projects"
            className="text-accent underline decoration-1 underline-offset-4 hover:text-accent-hover"
          >
            See selected systems →
          </Link>
          <Link href="/writing" className="text-muted hover:text-foreground">
            Read my writing
          </Link>
          <Link href="/about" className="text-muted hover:text-foreground">
            About me
          </Link>
        </div>
      </section>

      {/* Skills */}
      <section className="mt-24">
        <SectionLabel>Deep technical skills</SectionLabel>
        <ul className="mt-6 divide-y divide-border border-y border-border">
          {skills.map((skill) => (
            <li key={skill.area} className="py-5">
              <p className="font-serif text-xl text-foreground">{skill.area}</p>
              <p className="mt-1 font-serif text-base leading-relaxed text-muted">
                {skill.expertise}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* Featured */}
      {featured ? (
        <section className="mt-24">
          <SectionLabel>Featured writing</SectionLabel>
          <Link href={`/writing/${featured.slug}`} className="group mt-4 block">
            <h2 className="font-serif text-3xl leading-tight tracking-tight text-foreground transition-colors group-hover:text-accent">
              {featured.title}
            </h2>
            <p className="mt-3 max-w-2xl font-serif text-lg leading-relaxed text-muted">
              {featured.description}
            </p>
            <p className="mt-3 font-sans text-xs uppercase tracking-widest text-subtle">
              {featured.topics[0] ?? "Writing"} · {featured.readingTimeMinutes} min
            </p>
          </Link>

          {latest.length > 0 ? (
            <ul className="mt-10 space-y-6 border-t border-border pt-8">
              {latest.map((a) => (
                <li key={a.slug}>
                  <Link
                    href={`/writing/${a.slug}`}
                    className="group flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
                  >
                    <span className="font-serif text-xl leading-snug text-foreground transition-colors group-hover:text-accent">
                      {a.title}
                    </span>
                    <span className="font-sans text-xs uppercase tracking-widest text-subtle whitespace-nowrap">
                      {a.topics[0] ?? "Writing"}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </section>
      ) : null}

      {/* Selected systems */}
      <section className="mt-24">
        <SectionLabel>Selected systems</SectionLabel>
        <p className="mt-4 max-w-2xl font-serif text-lg leading-relaxed text-muted">
          My strongest work sits in the engineering around the model: context, memory,
          retrieval, tools, evaluation, infrastructure and human review.
        </p>
        <ul className="mt-8 space-y-10 border-t border-border pt-8">
          {selectedSystems.map((project) => (
            <li key={project.name}>
              <p className="font-sans text-xs uppercase tracking-widest text-accent">
                {project.name}
              </p>
              <h2 className="mt-2 font-serif text-2xl leading-snug text-foreground">
                {project.title}
              </h2>
              <p className="mt-3 max-w-2xl font-serif text-lg leading-relaxed text-muted">
                {project.summary}
              </p>
            </li>
          ))}
        </ul>
        <Link
          href="/projects"
          className="mt-8 inline-block text-sm text-accent underline decoration-1 underline-offset-4 hover:text-accent-hover"
        >
          View all projects →
        </Link>
      </section>

      {/* Currently exploring */}
      <section className="mt-24">
        <SectionLabel>Currently exploring</SectionLabel>
        <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-serif text-lg text-foreground/90">
          {currentlyExploring.map((topic) => (
            <li key={topic}>{topic}</li>
          ))}
        </ul>
      </section>

      {/* Newsletter */}
      <section className="mt-24 border-t border-border pt-10">
        <SectionLabel>Essays in your inbox</SectionLabel>
        <p className="mt-4 max-w-xl font-serif text-lg text-muted">
          Occasional writing about intelligent systems, agents and the engineering behind them.
        </p>
        <form
          action={`${site.social.substack}/api/v1/free`}
          method="post"
          target="_blank"
          className="mt-6 flex max-w-md flex-col gap-3 sm:flex-row"
        >
          <input
            type="email"
            name="email"
            required
            placeholder="your@email.com"
            className="flex-1 border-b border-border bg-transparent px-1 py-2 font-sans text-base placeholder:text-subtle focus:border-accent focus:outline-none"
          />
          <button
            type="submit"
            className="font-sans text-sm uppercase tracking-widest text-accent hover:text-accent-hover"
          >
            Subscribe →
          </button>
        </form>
      </section>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-sans text-xs uppercase tracking-[0.18em] text-subtle">{children}</p>
  );
}
