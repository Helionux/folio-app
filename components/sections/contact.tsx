"use client"

import * as React from "react"
import { MapPin, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/ui/fade-in"
import { SectionHeading } from "@/components/ui/section-heading"
import { siteConfig } from "@/lib/data"
import { cn } from "@/lib/utils"

export function Contact() {
  const [status, setStatus] = React.useState<"idle" | "sent">("idle")

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("sent")
    setTimeout(() => setStatus("idle"), 3000)
  }

  return (
    <section id="contact" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <FadeIn>
          <SectionHeading
            label="Contact"
            title="Travaillons ensemble"
            description="Une idée de projet, une opportunité ou simplement envie d'échanger ? Écrivez-moi."
          />
        </FadeIn>

        <div className="grid gap-12 lg:grid-cols-5">
          <FadeIn delay={100} className="lg:col-span-2">
            <div className="space-y-6">
              <div>
                <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
                  Email
                </p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="mt-1 block text-sm transition-colors hover:text-primary"
                >
                  {siteConfig.email}
                </a>
              </div>

              <div>
                <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
                  Localisation
                </p>
                <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                  <MapPin className="size-3.5 shrink-0" />
                  {siteConfig.location}
                </p>
              </div>

              <div className="rounded-xl border border-border/60 bg-muted/30 p-4">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Je réponds généralement sous 24 à 48 h. Pour les missions
                  freelance, précisez votre budget et vos délais.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={200} className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="space-y-4 rounded-xl border border-border/60 bg-card/30 p-6"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-xs text-muted-foreground"
                  >
                    Nom
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className={inputClass}
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-xs text-muted-foreground"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className={inputClass}
                    placeholder="vous@email.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-1.5 block text-xs text-muted-foreground"
                >
                  Sujet
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  className={inputClass}
                  placeholder="Collaboration, mission freelance..."
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-xs text-muted-foreground"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className={cn(inputClass, "resize-none")}
                  placeholder="Décrivez votre projet..."
                />
              </div>

              <Button type="submit" size="lg" className="w-full sm:w-auto">
                <Send />
                {status === "sent" ? "Message envoyé !" : "Envoyer le message"}
              </Button>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

const inputClass =
  "w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary/50 focus:ring-2 focus:ring-primary/20"
