import GithubSlugger from "github-slugger";

export type TocHeading = {
  depth: 2 | 3;
  text: string;
  id: string;
};

/**
 * Extract top-level headings (h2/h3) from raw MDX.
 *
 * Matches rehype-slug's slugging (github-slugger) so anchor links line up
 * with what the rendered article emits. Skips headings inside fenced code
 * blocks to avoid picking up commented `##` lines.
 */
export function extractToc(source: string): TocHeading[] {
  const slugger = new GithubSlugger();
  const headings: TocHeading[] = [];

  let inFence = false;
  for (const rawLine of source.split(/\r?\n/)) {
    const line = rawLine.trimEnd();
    if (/^```/.test(line)) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;

    const match = /^(#{2,3})\s+(.+?)\s*#*\s*$/.exec(line);
    if (!match) continue;

    const depth = match[1].length as 2 | 3;
    const text = match[2].replace(/[*_`]/g, "").trim();
    if (!text) continue;

    headings.push({ depth, text, id: slugger.slug(text) });
  }

  return headings;
}
