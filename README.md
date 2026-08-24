<div align="center">

# 🧠 ThinkPad

**A Notion-style workspace for notes, planning, and to-dos.**

Build, organize, and publish your ideas — with a nested document tree, rich-text blocks, emoji icons, cover images, search, a trash bin, dark mode, and one-click publishing.

Built with **Next.js 13** · **Convex** · **Clerk** · **EdgeStore** · **BlockNote** · **Tailwind CSS**

</div>

---

## ✨ Features

- **Nested document tree** — create child documents under any page and collapse/expand the sidebar, just like Notion.
- **Rich-text editor (BlockNote)** — a block-based editor with headings, lists, to-do items, code, images, and more.
- **Emoji icons & cover images** — pick an emoji icon per document and upload cover images to EdgeStore.
- **Search** — a global command-palette (⌘K) that searches across all your documents via Convex.
- **Publish** — share any document as a public read-only page at `/preview/[documentId]`.
- **Trash & archive** — archive (or recursively archive) documents; restore or permanently delete from Trash.
- **Dark / light mode** — automatic, with a manual theme toggle and system preference support.
- **Secure auth** — Clerk handles sign-in/sign-up and identity, wired into Convex authorisation.
- **Toasts & modals** — polished UX with Sonner notifications and an accessible Radix/shadcn UI kit.

## 🧰 Tech stack

| Layer       | Technology                                              |
|-------------|--------------------------------------------------------|
| Framework   | [Next.js 13](https://nextjs.org) (App Router), React 18, TypeScript |
| Backend/DB  | [Convex](https://convex.dev) (realtime, reactive queries) |
| Auth        | [Clerk](https://clerk.com)                              |
| File upload | [EdgeStore](https://edgestore.dev)                      |
| Editor      | [BlockNote](https://www.blocknotejs.org)                |
| Styling     | [Tailwind CSS](https://tailwindcss.com) + [shadcn/ui](https://ui.shadcn.com) (Radix UI) |
| Icons       | [Lucide](https://lucide.dev)                            |
| UX          | next-themes (dark mode), sonner (toasts), zustand, zod, cmdk (command palette) |

## 🚀 Getting started

### Prerequisites

- Node.js 18+
- A Convex project
- A Clerk application
- An EdgeStore bucket

### Install & run

```bash
# 1. Install dependencies
npm install

# 2. Configure environment variables (see below)
cp .env.example .env      # add your keys

# 3. Run Convex in a separate terminal (it watches your functions)
npx convex dev

# 4. Start the Next.js dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment variables

| Variable                              | Where to get it                                   |
|---------------------------------------|---------------------------------------------------|
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`   | Clerk dashboard → API keys                       |
| `CLERK_SECRET_KEY`                    | Clerk dashboard → API keys                       |
| `NEXT_PUBLIC_CONVEX_URL`              | `npx convex dev` (printed in the terminal)       |
| `EDGE_STORE_ACCESS_KEY` / `EDGE_STORE_SECRET_KEY` | EdgeStore dashboard            |

> **Note:** the Clerk instance `domain` is also referenced in `convex/auth.config.js`. Update it to match your own Clerk application, then run `npx convex dev` to deploy the auth config.

## 📁 Project structure

```
app/
  (marketing)/      # Public landing page (Heading, Heroes, Footer)
  (main)/           # Authenticated app: sidebar, navbar, document tree
    (routes)/
      documents/[documentId]/   # Document page + editor
  (public)/         # Published read-only previews
  api/edgestore/    # EdgeStore handler
components/         # Editor, toolbar, cover, icons, search, modals, ui primitives
convex/             # Schema + queries/mutations (archive, restore, search, publish…)
hooks/              # useSearch, useSettings, useCoverImage, etc.
lib/                # EdgeStore + utils
```

## 🗄️ Data model

Documents live in Convex and are linked with a self-referential `parentDocument` relation, which powers the nested tree:

```ts
documents: {
  title: string
  userId: string
  isArchieved: boolean
  parentDocument?: id("documents")
  content?: string        // BlockNote JSON
  coverImage?: string
  icon?: string
  isPublished: boolean
}
```

## 🛠️ Scripts

| Command         | Description                 |
|-----------------|-----------------------------|
| `npm run dev`   | Start the Next.js dev server |
| `npm run build` | Production build             |
| `npm run start` | Serve the production build   |
| `npm run lint`  | Lint the codebase            |

## 🎯 Purpose

ThinkPad is a personal project built to practise building a production-grade, full-stack, AI-adjacent web app end to end: realtime database design, nested data, authentication, file uploads, rich-text editing, publishing, and a polished UI. It's a working example of the kind of complete product engineering I enjoy doing — part of my roadmap into cloud and AI application development.

---

*Built and maintained by [Rinards Sondors](https://github.com/TurboK1D).*
