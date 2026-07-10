import type { CSSProperties } from "react"

import { FadeIn } from "@/components/ui/fade-in"
import { SectionHeading } from "@/components/ui/section-heading"
import { hardSkills, softSkills } from "@/lib/data"
import { cn } from "@/lib/utils"

export function Skills() {
  return (
    <section id="competences" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <FadeIn>
          <SectionHeading
            label="Compétences"
            title="Soft skills & hard skills"
            description="Un équilibre entre savoir-être collaboratif et expertise technique pointue."
          />
        </FadeIn>

        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <FadeIn delay={100}>
              <h3 className="mb-6 font-mono text-xs tracking-widest text-muted-foreground uppercase">
                Soft skills
              </h3>
            </FadeIn>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {softSkills.map((skill, i) => (
                <FadeIn key={skill.name} delay={150 + i * 60}>
                  <div className="group rounded-xl border border-border/60 bg-card/50 p-4 transition-all duration-300 hover:border-primary/30 hover:bg-card hover:shadow-sm">
                    <p className="text-sm font-medium">{skill.name}</p>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      {skill.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          <div>
            <FadeIn delay={100}>
              <h3 className="mb-6 font-mono text-xs tracking-widest text-muted-foreground uppercase">
                Hard skills
              </h3>
            </FadeIn>
            <div className="space-y-4">
              {hardSkills.map((skill, i) => (
                <FadeIn key={skill.name} delay={150 + i * 60}>
                  <div>
                    <div className="mb-1.5 flex items-center justify-between">
                      <span className="text-sm">{skill.name}</span>
                      <span className="font-mono text-xs text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-muted">
                      <div
                        className={cn(
                          "h-full rounded-full bg-primary transition-all duration-1000 ease-out",
                          "w-0 [transition-delay:200ms] group-data-[visible=true]:w-full"
                        )}
                        style={
                          {
                            width: `${skill.level}%`,
                            "--skill-width": `${skill.level}%`,
                          } as CSSProperties
                        }
                      />
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
