import { ArrowUpRight } from "lucide-react"

import { GitHubIcon } from "@/components/icons/social"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/ui/fade-in"
import { SectionHeading } from "@/components/ui/section-heading"
import { projects } from "@/lib/data"
import { cn } from "@/lib/utils"
import Link from "next/link"

export function Projects() {
  return (
    <section id="projets" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <FadeIn>
          <SectionHeading
            label="Projets"
            title="Réalisations sélectionnées"
            description="Une sélection de projets qui illustrent mon approche : code propre, UX réfléchie et livraison continue."
          />
        </FadeIn>

        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project, i) => (
            <FadeIn key={project.title} delay={i * 80}>
              <article
                className={cn(
                  "group relative flex h-full flex-col rounded-xl border border-border/60 bg-card/30 p-6 transition-all duration-300",
                  "hover:border-primary/30 hover:bg-primary/5 hover:shadow-2xs hover:shadow-primary",
                  project.featured && "md:col-span-1"
                )}
              >
                {project.featured && (
                  <span className="absolute top-4 right-4 rounded-full bg-primary/10 px-2 py-0.5 font-mono text-[0.6rem] tracking-wider text-primary uppercase">
                    Featured
                  </span>
                )}

                <h3 className="font-heading text-lg font-medium tracking-tight">
                  {project.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-md bg-muted px-2 py-0.5 font-mono text-[0.9rem] text-muted-foreground border hover:text-primary hover:border-primary transition-colors duration-300 cursor-pointer"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex gap-2">
                  <Button asChild variant="outline" size="sm">
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GitHubIcon />
                      Code
                    </Link>
                  </Button>
                  {project.live && (
                    <Button asChild variant="ghost" size="sm">
                      <Link
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Démo
                        <ArrowUpRight />
                      </Link>
                    </Button>
                  )}
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
