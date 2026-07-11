import type { Metadata } from "next"
import { Inter, JetBrains_Mono, Syne, Syne_Mono } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { siteConfig } from "@/lib/data"
import { cn } from "@/lib/utils"

const jetbrainsMonoHeading = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-heading",
})

const syneMono = Syne_Mono({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-syne-mono",
})

const syne = Syne({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-syne",
})

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const siteUrl = "https://heliodore-pholio.vercel.app/"

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.title}`,
  description: siteConfig.tagline,
  keywords: [
    "développeur fullstack",
    "MERN",
    "React",
    "Next.js",
    "Node.js",
    "portfolio",
    "Tchad",
    "N'Djamena",
    "Helionux",
    "un",
    "dev",
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    title: `${siteConfig.name} — Portfolio`,
    description: siteConfig.tagline,
    url: siteUrl,
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Heliodore Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description: "Découvrez mon portfolio, mes projets et mes compétences.",
    images: ["/og-image.png"],
  },
  verification: {
    google: "AbCdEfGh123456789",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={cn(
        "scroll-smooth antialiased",
        inter.variable,
        syneMono.variable,
        syne.variable,
        jetbrainsMonoHeading.variable,
        "font-sans"
      )}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
