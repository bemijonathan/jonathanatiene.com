# Personal Website Redesign Brief

## 1. Project Goal

Redesign the current personal website into a **personal publication, technical archive, and authority platform**.

The site should no longer feel primarily like a software-engineering portfolio or résumé.

It should communicate:

> Jonathan is an AI engineer, researcher, writer, builder, and speaker with a distinct body of ideas and work.

The website should become the canonical home for:

* long-form writing
* technical thinking
* research
* projects
* speaking
* experiments
* short notes
* professional identity

Substack, LinkedIn, X, YouTube, GitHub, and other platforms should distribute or extend the work rather than own it.

---

# 2. Core Inspiration

The site should combine principles from several strong technical personal websites without visually cloning any one of them.

## Theo Browne / T3

Borrow:

* extreme simplicity
* strong personal identity
* minimal navigation
* projects and output over résumé information
* confidence through restraint

Avoid:

* making the site so sparse that a new visitor cannot understand who Jonathan is

Principle:

> Remove anything that does not strengthen the identity or body of work.

---

## Lee Robinson

Borrow:

* simple engineer/writer positioning
* concise homepage introduction
* writing close to the top of the site
* clean typography
* calm visual hierarchy
* biography separated from homepage
* personal rather than corporate tone

Principle:

> A visitor should understand the person within five seconds.

---

## swyx

Borrow:

* website as an intellectual map
* writing + talks + projects + newsletter reinforcing each other
* strong topic ownership
* popular and recent work surfaced clearly
* personal knowledge archive
* newsletter as distribution

Principle:

> The website should reveal what Jonathan thinks about repeatedly, not merely what he has done professionally.

---

## Addy Osmani

Borrow:

* authority architecture
* prominent writing
* research and technical depth
* speaking presence
* professional press resources
* selected achievements without turning the site into a CV
* clear separation between essays, projects, talks, and professional biography

Principle:

> Make it easy for conference organisers, journalists, collaborators, researchers, and companies to understand Jonathan's credibility.

---

## Josh Comeau

Borrow:

* exceptional article reading experience
* MDX-powered interactive content
* diagrams and visual explanations
* technically sophisticated but visually clean essays
* thoughtful typography
* generous whitespace
* reusable article components

Principle:

> Technical articles should feel designed rather than dumped into a Markdown renderer.

---

## Simon Willison

Borrow:

* continuous publishing mentality
* searchable archive
* tags
* notes
* technical logs
* evergreen URLs
* RSS
* internal linking
* chronological archive
* website as public external memory

Principle:

> Every useful idea should have somewhere permanent to live.

---

# 3. Brand Positioning

Primary identity:

**Jonathan Atiene**

Suggested descriptor:

> AI engineer, researcher and writer.

Supporting positioning:

> I build and study intelligent systems, and write about AI agents, memory, human behaviour and the engineering required to make AI work in the real world.

The site should sit at the intersection of:

**AI Engineering × Agentic Systems × Human Behaviour × Research**

These should become recognisable recurring themes throughout the website.

---

# 4. Desired Impression

Within approximately 30 seconds, a new visitor should conclude:

1. Jonathan works deeply in AI.
2. He builds production systems rather than only discussing AI.
3. He thinks independently about agentic systems and human behaviour.
4. He conducts or engages seriously with research.
5. He writes substantial technical material.
6. He speaks publicly.
7. There is enough depth here to explore further.

The desired reaction is not:

> "This person knows React, Python and AWS."

It is:

> "This person has a body of work and a point of view."

---

# 5. Primary Audiences

The site should work simultaneously for:

### Technical peers

AI engineers, founders, researchers, software engineers and technical leaders.

They primarily care about:

* articles
* technical ideas
* architecture
* open-source work
* research
* projects

### Conference organisers

They need to quickly find:

* speaking topics
* previous talks
* biography
* headshots
* contact details

### Journalists and researchers

They need:

* clear areas of expertise
* publications
* notable ideas
* biography
* citations and permanent links

### Potential collaborators and companies

They should quickly see:

* technical depth
* production experience
* projects
* research
* practical AI expertise

### General readers

They should be able to understand the ideas without needing to know Jonathan personally.

---

# 6. Information Architecture

Primary navigation:

```text
Jonathan

Writing
Research
Projects
Talks
About

                         GitHub
                         LinkedIn
                         X
```

Do not overload the navigation.

Secondary destinations can live inside pages or the footer.

Recommended routes:

```text
/
├── /writing
│   ├── /[slug]
│   └── /topics/[topic]
│
├── /notes
│   └── /[slug]
│
├── /research
│   ├── /papers
│   ├── /technical-reports
│   └── /experiments
│
├── /projects
│   └── /[project]
│
├── /talks
│   └── /[talk]
│
├── /about
├── /press
├── /uses
├── /archive
├── /rss.xml
├── /sitemap.xml
└── /robots.txt
```

`/uses` is optional.

`/notes` can be added after the initial release if necessary.

---

# 7. Homepage

The homepage should be concise.

It should not attempt to display Jonathan's entire career.

## Hero

Large name.

Minimal descriptor.

Example:

> Jonathan Atiene
> AI engineer, researcher and writer.

Supporting copy:

> I build and study intelligent systems, and write about AI agents, memory, human behaviour and production AI.

Primary actions:

**Read my writing**

**About me**

Optional subtle social links underneath.

---

# 8. Homepage — Featured Writing

Writing should appear immediately after the introduction.

Suggested structure:

```text
FEATURED

The End of AI Slop

AI-generated writing is converging toward
a statistical average. What happens when
everyone begins to sound the same?

AI & Language · 11 min
```

Then two or three smaller articles.

Example:

```text
Agentic Memory Is Not a Database

Why the Harness Is the Product

RAG Is Infrastructure
```

Do not display ten articles on the homepage.

The homepage should lead into `/writing`.

---

# 9. Homepage — Current Focus

Add a small section that answers:

> What is Jonathan thinking about right now?

Example:

```text
CURRENTLY EXPLORING

Agentic memory
Behavioural intelligence
AI system reliability
Human decision-making
Technical stylistics
```

This should be editable and intentionally temporary.

It makes the site feel active without requiring a full status feed.

---

# 10. Homepage — Research

Keep this concise.

Example:

```text
RESEARCH

My research sits between artificial intelligence,
neuroscience and efficient machine-learning systems.

Selected work

Efficient Brain Tumour Segmentation...
Behavioural intelligence...
Agentic memory...

View research →
```

Do not dump academic abstracts onto the homepage.

---

# 11. Homepage — Selected Projects

Only feature projects that contribute meaningfully to Jonathan's identity.

Avoid a generic grid of every project ever built.

Each featured project should answer:

* What is it?
* Why is it interesting?
* What was technically difficult?
* What did Jonathan learn or contribute?

Three strong projects are better than twelve weak ones.

---

# 12. Homepage — Speaking

Example:

```text
SPEAKING

I speak about AI engineering, agentic systems,
human behaviour and building reliable AI products.

Selected appearances

Data Science Festival
...
...

View talks →
```

Include a clear:

**Invite me to speak**

link.

---

# 13. Homepage — Newsletter

The newsletter should feel part of Jonathan's site rather than a Substack advertisement.

Example:

```text
ESSAYS IN YOUR INBOX

Occasional writing about intelligent systems,
engineering and human behaviour.

[your@email.com] [Subscribe]
```

Substack handles the subscriber backend.

Avoid visually prominent "Powered by Substack" branding where possible.

---

# 14. Writing Page

`/writing` should be one of the strongest pages on the site.

Header:

> Writing

Supporting copy:

> Essays, technical notes and ideas about intelligent systems, engineering and human behaviour.

Sections:

### Featured

One large current or canonical article.

### Latest

Chronological essays.

### Popular

A hand-curated list rather than algorithmically determined initially.

### Topics

Suggested initial taxonomy:

* AI Engineering
* Agentic Systems
* Memory
* Human Behaviour
* AI & Language
* Research
* Career / Engineering
* Notes

Avoid dozens of tags.

Five to eight durable themes are preferable.

---

# 15. Article Experience

Articles are the most important design surface.

They should be highly readable.

Recommended width:

approximately `680–760px` for main prose.

Typography should feel editorial rather than application-like.

Every article should support:

* title
* subtitle / description
* publication date
* updated date
* reading time
* topics
* author
* hero image where useful
* table of contents for long articles
* footnotes
* citations
* code blocks
* syntax highlighting
* diagrams
* images
* blockquotes
* callouts
* interactive MDX components
* related writing
* newsletter CTA
* share links

---

# 16. Article Header

Example:

```text
AI & LANGUAGE

The End of AI Slop

The written internet is becoming statistically
homogeneous. Here's why—and what we can do about it.

Jonathan Atiene
24 August 2026 · 11 min
```

Then the article.

No oversized publication chrome.

The content should dominate.

---

# 17. MDX Components

Create reusable components such as:

```text
<Callout />

<Aside />

<Diagram />

<Quote />

<Definition />

<Comparison />

<CodeDemo />

<InteractiveDiagram />

<Figure />

<Reference />

<Footnote />

<NewsletterCTA />
```

This is where the site can gradually develop a Josh Comeau-style advantage over newsletter platforms.

---

# 18. Notes

Long-form essays should not become cluttered with every small thought.

Create `/notes` for:

* observations
* short technical findings
* useful links
* experiments
* responses to papers
* code findings
* unfinished ideas

Typical note length:

100–800 words.

This borrows heavily from Simon Willison's publishing approach.

Over time, `/notes` can become extremely valuable for long-tail SEO.

---

# 19. Research

`/research` should communicate serious academic and technical work without pretending to be an academic lab website.

Suggested structure:

```text
Research

Selected Papers
Technical Reports
Experiments
Thesis / Dissertation
Research Interests
```

Each item should have a permanent URL.

Research pages may include:

* abstract
* publication venue
* authors
* PDF
* code
* dataset
* citation information
* simplified explanation
* related writing

Where possible, write a companion essay explaining the research in accessible language.

Example:

```text
Research paper
        ↓
Accessible essay
        ↓
Talk
        ↓
Short social content
```

---

# 20. Talks

`/talks` should work as a speaking portfolio.

Top section:

> I speak about AI engineering, agentic systems, human behaviour and reliable AI systems.

Then:

### Featured Talks

Each entry:

* title
* event
* location
* date
* video
* slides
* description

### Topics I Speak About

Potential themes:

* Agentic memory
* Building reliable AI agents
* The harness is the product
* AI engineering beyond prompting
* AI and human behaviour
* The AI Register / AI Slop
* From software engineer to AI engineer

### Speaking CTA

> Interested in having me speak at your event?

**Get in touch**

---

# 21. Press Page

Create `/press`.

Include:

### Short Bio

Approximately 40–60 words.

### Medium Bio

Approximately 100–150 words.

### Full Bio

Approximately 250 words.

### Headshots

Professional downloadable images.

### Areas of Expertise

* AI agents
* AI engineering
* agentic memory
* behavioural AI
* production AI systems
* human behaviour and AI

### Speaking Topics

### Selected Appearances

### Contact

This should allow an organiser to prepare an event page without asking Jonathan for additional materials.

---

# 22. About Page

The About page should be narrative.

It should not simply be a résumé.

Suggested structure:

1. Current work
2. How Jonathan arrived in AI
3. Connection between neuroscience, software engineering and AI
4. What he is interested in now
5. Selected professional experience
6. Research
7. Personal philosophy about building
8. Links

A downloadable résumé can sit near the bottom.

---

# 23. Projects

Projects should be presented as case studies rather than portfolio cards.

Recommended template:

```text
Project Name

What it is

The problem

Why I built it

Technical architecture

Interesting decisions

What happened

What I learned

Links
```

Projects should ideally connect to essays.

Example:

```text
Project
   ↕
Technical essay
   ↕
Research
   ↕
Talk
```

This creates a connected body of work instead of isolated portfolio items.

---

# 24. Visual Direction

Overall feeling:

* editorial
* technical
* thoughtful
* understated
* intelligent
* personal
* slightly experimental

Avoid:

* generic SaaS aesthetics
* excessive gradients
* glowing AI graphics
* glassmorphism
* unnecessary cards
* huge icon grids
* excessive animations
* generic stock images
* animated skill bars
* résumé timeline dominating the site
* "AI futuristic" visual clichés

---

# 25. Colour

Use a restrained palette.

Base:

* warm white or neutral off-white
* dark charcoal text

One accent colour maximum.

Accent should be used for:

* links
* selection
* active states
* small diagrams
* occasional annotations

The writing must remain visually dominant.

---

# 26. Typography

Typography is a major design feature.

Recommended combination:

### Headings

Modern sans-serif or slightly expressive grotesk.

### Body

Highly readable serif or neutral sans-serif.

Possible direction:

```text
UI / Navigation
Sans Serif

Article Body
Serif or exceptionally readable Sans Serif

Code
Monospace
```

Do not use overly stylised display fonts.

---

# 27. Layout

Use generous whitespace.

Avoid placing every section inside a bordered card.

Prefer:

```text
Section heading

Content

──────────────────

Next section
```

over:

```text
┌──────────┐
│ Card     │
└──────────┘

┌──────────┐
│ Card     │
└──────────┘
```

Cards should only exist where grouping genuinely helps.

---

# 28. Motion

Motion should be subtle.

Allowed:

* gentle link transitions
* small hover states
* article image transitions
* subtle page entrance
* interactive diagrams

Avoid:

* scrolling gimmicks
* large parallax effects
* excessive Framer Motion usage
* animation delaying navigation

The site should feel fast.

---

# 29. Search

Eventually add full-site search.

Search should cover:

* writing
* notes
* research
* projects
* talks

Potential keyboard shortcut:

`⌘ + K`

Example:

```text
Search Jonathan's work...

agentic memory
─────────────────────

Writing
Agentic Memory Is Not a Database

Notes
Memory consolidation in agents

Research
...
```

Search is not required for V1 but should be considered architecturally.

---

# 30. SEO

Every permanent page should be designed for search discovery.

Required:

* canonical URLs
* metadata
* Open Graph data
* Twitter/X cards
* sitemap
* robots.txt
* RSS
* Article JSON-LD
* Person JSON-LD
* Breadcrumb structured data where appropriate
* descriptive URLs
* internal linking
* meaningful headings
* image alt text
* fast loading
* server-rendered/static content

All long-form writing should originate on the personal domain.

---

# 31. URL Philosophy

URLs should be human-readable and permanent.

Good:

```text
/writing/agentic-memory-is-not-a-database
/writing/the-end-of-ai-slop
/research/brain-tumour-segmentation
/talks/the-harness-is-the-product
```

Avoid:

```text
/blog/post?id=192
/articles/2026/08/24/something-v2-final
```

Once published, URLs should rarely change.

---

# 32. Substack Strategy

Substack is the mailing and distribution layer.

The website is canonical.

Workflow:

```text
Research / idea
       ↓
Personal-site article
       ↓
Substack adaptation
       ↓
LinkedIn
       ↓
X
       ↓
YouTube / short-form
```

Substack should primarily contain:

* adapted essays
* newsletter introductions
* occasional subscriber-specific notes
* links back to canonical articles

Do not treat Substack as the main archive.

---

# 33. Publishing Workflow

V1 should remain developer-friendly.

```text
/content
   /writing
   /notes
   /research
```

Each article stored as MDX.

Example frontmatter:

```yaml
title:
description:
date:
updated:
slug:
topics:
featured:
draft:
image:
canonical:
```

Publishing:

```text
Write MDX
   ↓
Commit
   ↓
Push
   ↓
Vercel
   ↓
Published
```

No CMS required for V1.

---

# 34. Technical Stack

Preferred:

* Next.js
* TypeScript
* MDX
* Tailwind CSS
* Vercel
* GitHub
* Substack
* RSS
* static generation where possible

Optional later:

* Pagefind or similar search
* analytics
* custom CMS/editor
* automatic OG image generation
* content recommendations

Avoid introducing infrastructure that does not materially improve publishing.

---

# 35. Analytics

Track useful behaviour rather than vanity metrics.

Useful events:

* article viewed
* article completed
* newsletter subscribed
* related article clicked
* research paper opened
* project opened
* talk video played
* speaking enquiry clicked

Useful high-level metrics:

* organic search traffic
* returning readers
* newsletter conversion
* highest-retention essays
* referring domains
* branded searches
* backlinks

---

# 36. Content Hierarchy

The site should visibly communicate this hierarchy:

```text
1. Ideas
2. Work
3. Research
4. Speaking
5. Biography
6. Résumé
```

Not:

```text
1. Résumé
2. Skills
3. Employers
4. Projects
5. Ideas
```

This is one of the most important changes from the current website.

---

# 37. What Should Be Removed From the Current Site

Remove or substantially reduce:

* outdated annual goals
* skill percentages
* large technology lists
* stale career targets
* old progress trackers
* generic portfolio descriptions
* duplicated project information
* excessive timeline information

Move résumé-specific information to `/about` or a downloadable CV.

---

# 38. What Must Remain

Preserve and strengthen:

* research
* publications
* technical reports
* speaking
* selected projects
* professional credibility
* existing personal identity

Do not erase Jonathan's software engineering history.

Reframe it as evidence behind the ideas rather than the centre of the site.

---

# 39. V1 Scope

The first version should include only:

```text
Homepage
Writing index
Individual MDX articles
Research
Projects
Talks
About
Newsletter subscription
RSS
SEO infrastructure
Sitemap
Structured data
Responsive navigation
Dark mode optional
```

Do not initially build:

* comments
* accounts
* CMS
* community features
* custom newsletter software
* recommendation algorithms
* elaborate search
* complex animations

---

# 40. Success Criteria

The redesign succeeds when:

A first-time visitor can explain Jonathan's focus after viewing only the homepage.

A technical reader can move from an essay into related research or projects.

A conference organiser can find speaking information within two clicks.

Google can crawl and understand every substantive article.

A new article can be published quickly using MDX.

The site remains visually coherent after 100+ essays and notes.

Jonathan's name gradually becomes associated with a recognisable set of ideas rather than merely a list of technologies or employers.

---

# 41. Final Design Principle

The website should feel less like:

> "Here is everything I've done."

and more like:

> "Here is what I'm thinking about, building and discovering."

Every design decision should reinforce that distinction.
