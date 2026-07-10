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
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    title: `${siteConfig.name} — Portfolio`,
    description: siteConfig.tagline,
    type: "website",
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
