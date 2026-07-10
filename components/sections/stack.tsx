import { FadeIn } from "@/components/ui/fade-in"
import { SectionHeading } from "@/components/ui/section-heading"
import { techStack } from "@/lib/data"

export function Stack() {
  return (
    <section
      id="stack"
      className="scroll-mt-20 border-y border-border/40 bg-muted/30 py-24"
    >
      <div className="mx-auto max-w-5xl px-6">
        <FadeIn>
          <SectionHeading
            label="Stack technique"
            title="Technologies & outils"
            description="L'écosystème que j'utilise au quotidien pour livrer des produits robustes."
          />
        </FadeIn>

        <div className="grid gap-8 sm:grid-cols-2">
          {techStack.map((group, gi) => (
            <FadeIn key={group.category} delay={gi * 100}>
              <div className="hover:border-primary/30transition-all rounded-xl border border-border/60 bg-background/60 p-6 backdrop-blur-sm duration-300 hover:bg-primary/5 hover:shadow-2xs hover:shadow-primary">
                <h3 className="mb-4 font-mono font-semibold text-xs tracking-widest text-primary uppercase">
                  {group.category}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item, ii) => (
                    <li key={item}>
                      <span
                        className="inline-block rounded-md border border-border bg-muted/50 px-2.5 py-1 text-xs text-foreground transition-all duration-300 hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
                        style={{ animationDelay: `${gi * 80 + ii * 40}ms` }}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
