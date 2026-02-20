import Link from "next/link"

export default function About() {
  return (
    <main className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-6">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-balance text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
          על הפרויקט
        </h1>
        <div className="mt-10 flex items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            חזרה לדף הבית
          </Link>
        </div>
      </div>
    </main>
  )
}
