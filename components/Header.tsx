import Link from "next/link"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link href="/" className="text-lg font-semibold tracking-tight font-sans text-foreground">
          v0 Project
        </Link>
        <nav aria-label="Main navigation">
          <ul className="flex items-center gap-8">
            <li>
              <Link
                href="/"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
