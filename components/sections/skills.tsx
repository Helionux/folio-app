import { FadeIn } from "@/components/ui/fade-in"
import { SectionHeading } from "@/components/ui/section-heading"
import { softSkills } from "@/lib/data"
import { ChartSkill } from "./ChartSkill"

export function Skills() {
  return (
    <section id="competences" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-7xl px-6">
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
              <ChartSkill />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
