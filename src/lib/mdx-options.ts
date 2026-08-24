import type { PluggableList } from "unified";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";

export const mdxOptions = {
  remarkPlugins: [remarkGfm] as PluggableList,
  rehypePlugins: [
    rehypeSlug,
    [
      rehypeAutolinkHeadings,
      { behavior: "wrap", properties: { className: ["heading-anchor"] } },
    ],
    [
      rehypePrettyCode,
      {
        theme: { light: "github-light", dark: "github-dark-dimmed" },
        keepBackground: false,
      },
    ],
  ] as PluggableList,
};
