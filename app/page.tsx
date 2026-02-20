export default function Home() {
  return (
    <main className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-6">
      <div className="mx-auto max-w-2xl text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Welcome
        </p>
        <h1 className="text-balance text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
          שלום אהד! זה השינוי הראשון שלי ב‑Cursor 🎉
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          A minimal Next.js project with App Router, Tailwind CSS, and
          TypeScript. Ready for you to build something great.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Read the Docs
          </a>
          <a
            href="https://github.com/vercel/next.js"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center justify-center rounded-md border border-border bg-background px-6 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            GitHub
          </a>
        </div>
      </div>
    </main>
  )
}
