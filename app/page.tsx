import { Footer } from "@/components/layout/footer"
import { Navbar } from "@/components/layout/navbar"
import { Contact } from "@/components/sections/contact"
import { Experience } from "@/components/sections/experience"
import { Hero } from "@/components/sections/hero"
import { Projects } from "@/components/sections/projects"
import { Skills } from "@/components/sections/skills"
import { Stack } from "@/components/sections/stack"

export default function Page() {
  return (
    <>
      <a
        href="#accueil"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Aller au contenu
      </a>
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Stack />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
