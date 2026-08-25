import { getAllArticles } from "@/lib/content";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export async function GET() {
  const articles = await getAllArticles();

  const lines: string[] = [
    `# ${site.name}`,
    "",
    `> ${site.tagline}`,
    "",
    `Canonical home for ${site.name}'s writing on AI engineering, agentic systems, memory, evaluation and open models. All articles are published under the author's own name at ${site.url}; syndicated copies on Medium, DEV and Hashnode point back to this site as canonical.`,
    "",
    "## Writing",
    "",
    ...articles
      .filter((a) => !a.archived)
      .map(
        (a) =>
          `- [${a.title}](${site.url}/writing/${a.slug})${a.description ? `: ${a.description}` : ""}`,
      ),
    "",
    "## About",
    "",
    `- [About Jonathan Atiene](${site.url}/about): background, current work and how he thinks about AI systems.`,
    `- [Press & bios](${site.url}/press): short, medium and full bios for organisers and journalists.`,
    `- [Talks](${site.url}/talks): selected speaking appearances.`,
    `- [Projects](${site.url}/projects): featured and archived engineering work.`,
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
