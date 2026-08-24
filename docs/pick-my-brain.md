# Pick My Brain — v1.1 plan

An AI interface to Jonathan's writing, research, notes and technical work. Not a
generic chatbot: a retrieval-first surface over the curated corpus, with
citations to the original source material.

## Scope for v1.1 (not v1)

Ship the site (v1) first. Introduce Pick My Brain once the corpus has ~30+
pieces so retrieval has enough substance to work with. Below that threshold,
answers feel thin and hurt the brand more than they help.

## Content model — the visibility field

Add to every MDX frontmatter:

```yaml
visibility: public | brain | private
```

Meaning:

- `public` — indexed by search engines, browsable on the site, usable by Pick My Brain.
- `brain` — not browsable, not indexed by Google, but **usable by Pick My Brain**. This is where semi-polished notes live.
- `private` — never leaves the machine. Not shipped, not indexed, not retrievable.

Bake this into `src/lib/content.ts` before shipping v1 so the future feature can
be layered on cleanly. Only `public` items appear in `getAllArticles()`; a
separate `getBrainCorpus()` includes `public` + `brain`.

Directory:

```
/content
  /writing        # public essays
  /research
  /notes          # public notes
  /brain          # brain-only, non-public but retrievable
```

## Stack (v1.1)

- **Agent framework:** [Mastra SDK](https://mastra.ai) — TypeScript-native, first-class support for tools, memory, evals, streaming. Fits the Next.js + TS setup without dragging in a Python service.
- **Embeddings:** Hugging Face Inference API for embeddings. Model TBD — likely `BAAI/bge-large-en-v1.5` or `mixedbread-ai/mxbai-embed-large-v1` (both hold up well on MTEB and are open weights).
- **Generation:** Groq for hosted inference of open-weight models — either GPT-OSS (OpenAI's open-weight release) or Llama 3.3 70B / Qwen 2.5 depending on how each holds up on citation-grounded generation. Groq's speed makes streaming feel instant, which matters for the interface.
- **Alternative — client-side WebGPU:** `transformers.js` running a small model in the browser via WebGPU. Zero server cost, works offline, respects privacy. Trade-off: model size is limited (~1–3B), first load is slow, and quality on complex citation-grounded answers will be noticeably worse. Interesting fit for a "lightweight" mode or for embedding-time similarity search in the browser, but probably not the default generation path.

Vector store: Postgres + pgvector on Neon or Supabase. No separate vector DB
needed at this scale for a long time.

## Retrieval design

```
Query
  ↓
Query rewriting (LLM, cheap)
  ↓
Hybrid retrieval
  ├─ BM25 (Postgres full-text)
  └─ Vector similarity (pgvector, cosine)
  ↓
Reranker (Cohere Rerank or a cross-encoder via HF)
  ↓
Top-k chunks with metadata
  ↓
LLM (grounded prompt: cite or refuse)
  ↓
Streamed answer + citations
```

Chunk schema:

```ts
{
  id: string
  chunk: string
  embedding: number[]
  title: string
  url: string
  type: "writing" | "research" | "notes" | "brain" | "talks" | "projects"
  date: string
  topics: string[]
  visibility: "public" | "brain"
}
```

## Interface (UI)

Route: `/brain`

- Prompt input + `Ask` button
- Popular questions (curated)
- Topic filter chips: `All` `AI Agents` `Research` `Career` `Engineering`
- Answer view: streamed markdown + inline citation numbers linked to source articles
- "I couldn't find Jonathan's position on that yet." when no chunks pass the reranker threshold

Nav: add **Pick My Brain** to the primary nav in v1.1.

## Prompt discipline

The model represents the corpus, not Jonathan. When uncertain:

- ✅ "Jonathan has written that…"
- ✅ "Based on Jonathan's notes and published work…"
- ❌ "I believe…"

If the retrieved chunks don't answer the question, refuse:

- ✅ "I couldn't find Jonathan's position on that yet."
- ❌ Invent an answer.

## Indexing pipeline

At deploy time (or on `postbuild`), a script:

1. Walks `/content/{writing,research,notes,brain,talks,projects}`
2. Filters to `public` + `brain` visibility
3. Chunks each doc (~500 tokens with 50-token overlap)
4. Embeds each chunk via HF
5. Upserts into pgvector with the schema above

Re-index on content change only (hash-check per file).

## Open questions to resolve before building

- Which open-weight model on Groq produces the best citation-grounded answers? Needs an eval set of ~30 Q/A pairs derived from the corpus.
- Reranker: Cohere Rerank v3 (paid, high quality) vs. a HF cross-encoder (free, self-hosted).
- Rate limiting: unauthenticated public endpoint needs cost + abuse protection (Vercel edge rate limit + captcha fallback).
- Analytics: which questions are asked most, which surface answers users click through to — feeds the "what to write next" loop.

## What NOT to build in v1.1

- Multi-turn chat (single-turn Q&A first; conversation adds retrieval complexity)
- User accounts
- Personalisation
- Voice
- A knowledge graph UI at `/brain/[topic]` (nice idea, but wait until there's data behind it)
