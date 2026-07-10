import { FadeIn } from "@/components/ui/fade-in"
import { SectionHeading } from "@/components/ui/section-heading"
import { experiences } from "@/lib/data"

export function Experience() {
  return (
    <section
      id="experiences"
      className="scroll-mt-20 border-y border-border/40 bg-muted/30 py-24"
    >
      <div className="mx-auto max-w-5xl px-6">
        <FadeIn>
          <SectionHeading
            label="Expériences"
            title="Parcours professionnel"
            description="Mon évolution au fil des formations et des missions, des startups."
          />
        </FadeIn>

        <div className="relative">
          <div
            className="absolute top-0 left-1.75 hidden h-full w-px bg-border md:block"
            aria-hidden
          />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <FadeIn key={exp.company + exp.role} delay={i * 100}>
                <article className="relative md:pl-10">
                  <div
                    className="absolute top-1.5 left-0 hidden size-3.5 rounded-full border-2 border-primary bg-background md:block"
                    aria-hidden
                  />

                  <div className="rounded-xl border border-border/60 bg-background/60 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-sm">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <h3 className="font-heading text-xl font-medium">
                          {exp.role}
                        </h3>
                        <p className="text-sm text-primary">{exp.company}</p>
                      </div>
                      <time className="font-mono text-xs text-muted-foreground">
                        {exp.period}
                      </time>
                    </div>

                    <p className="mt-3 text-md leading-relaxed text-muted-foreground">
                      {exp.description}
                    </p>

                    <ul className="mt-4 flex flex-wrap gap-1.5">
                      {exp.technologies.map((tech) => (
                        <li
                          key={tech}
                          className="rounded-md border border-border bg-muted/50 px-2 py-0.5 font-mono text-[1rem] text-muted-foreground"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
