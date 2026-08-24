import type { Metadata } from "next";
import { SectionPage } from "@/components/section-page";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected case studies — the problem, the technical decisions, and what I learned building them.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <SectionPage
      title="Projects"
      intro="Selected case studies — the problem, the technical decisions, and what I learned."
    >
      <p className="font-serif text-lg text-muted">Case studies coming soon.</p>
    </SectionPage>
  );
}
