import { siteConfig } from "@/lib/data"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border/60 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="text-xs text-muted-foreground">
          © {year} {siteConfig.name}. Conçu avec soin.
        </p>
        <p className="font-mono text-[0.65rem] tracking-wider text-muted-foreground uppercase">
          MERN · TypeScript · Next.js
        </p>
      </div>
    </footer>
  )
}
