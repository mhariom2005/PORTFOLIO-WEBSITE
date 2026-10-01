# Hari Om Mishra — Engineering Portfolio

A deliberately non-vibe-coded portfolio: editorial typography, architecture diagrams, case studies, restrained motion and a portfolio-grounded AI assistant.

## Stack
- Next.js App Router + TypeScript
- React
- Motion for React
- Optional OpenAI Responses API integration for “Ask Hari”

Next.js App Router is the current routing approach documented by Next.js. Motion for React supports scroll, layout and gesture animations; the site keeps animation purposeful and includes a reduced-motion-friendly structure. 

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Optional AI

Copy `.env.example` to `.env.local` and add an OpenAI API key. The `/api/ask` endpoint sends the user's question with a server-side portfolio knowledge source. Without a key, it uses a deterministic local fallback so the demo still works.

Do not expose `OPENAI_API_KEY` in client-side code.

## Resume

Put the final PDF resume at `public/resume.pdf` to activate the Resume link. The portfolio content is based on the supplied resume; replace or add only details you can verify.

## Links

The initial LinkedIn and GitHub URLs are taken from the supplied resume. Verify them before publishing.
