import { ArrowDown, Mail } from "lucide-react"

import { GitHubIcon, LinkedInIcon } from "@/components/icons/social"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/ui/fade-in"
import { siteConfig } from "@/lib/data"
import Link from "next/link"
import Image from "next/image"

export function Hero() {
  return (
    <section
      id="accueil"
      className="relative flex min-h-svh items-center overflow-hidden border-b pt-16"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40 dark:opacity-25"
        aria-hidden
      >
        <div className="background-size-[24px_24px] absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,var(--border)_1px,transparent_0)]" />
        <div className="animate-glow absolute -top-1/4 right-0 h-125 w-125 rounded-full bg-primary/10 blur-3xl" />
        <div className="animate-glow absolute -bottom-1/4 left-0 h-100 w-100 rounded-full bg-primary/5 blur-3xl [animation-delay:2s]" />
      </div>

      <div className="relative mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-6 py-20">
        <div>
          <FadeIn delay={0}>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-3 py-1 text-xs text-muted-foreground backdrop-blur-sm">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
              </span>
              {siteConfig.availability}
            </p>
          </FadeIn>

          <FadeIn delay={100}>
            <h1 className="font-syne-mono text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Bonjour, je suis{" "}
              <span className="bg-linear-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent">
                {siteConfig.name}
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={200}>
            <p className="mt-2 font-mono text-sm text-primary sm:text-base">
              {siteConfig.title}
            </p>
          </FadeIn>

          <FadeIn delay={300}>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              {siteConfig.tagline}
            </p>
          </FadeIn>

          <FadeIn delay={400}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild size="lg">
                <Link href="#projets">Voir mes projets</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#contact">Me contacter</Link>
              </Button>
            </div>
          </FadeIn>
          <FadeIn delay={500}>
            <div className="mt-10 flex items-center gap-4">
              <Link
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label="GitHub"
              >
                <GitHubIcon className="size-6" />
              </Link>
              <Link
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="size-6" />
              </Link>
              <Link
                href={`mailto:${siteConfig.email}`}
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label="Email"
              >
                <Mail className="size-6" />
              </Link>
            </div>
          </FadeIn>
        </div>
        <div className="hidden h-full w-full md:block">
          <FadeIn delay={600}>
            <Image
              src="/helionux-saitama.png"
              alt="Photo"
              height={850}
              width={700}
              className="object-cover rounded-full shadow-md dark:shadow-amber-300 shadow-red-500"
            />
          </FadeIn>
        </div>
        <FadeIn
          delay={700}
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block"
        >
          <Link
            href="#competences"
            className="flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Défiler vers le bas"
          >
            <span className="text-[0.65rem] tracking-widest uppercase">
              Explorer
            </span>
            <ArrowDown className="size-4 animate-bounce" />
          </Link>
        </FadeIn>
      </div>
    </section>
  )
}
