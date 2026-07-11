"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from "recharts"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"

export const description = "A radial chart with a label"

const chartData = [
  { browser: "Architecture REST", stats: 85 },
  { browser: "React/Next.js", stats: 95 },
  { browser: "Node.js/Express", stats: 88 },
  { browser: "MongoDB & PostgreSQL", stats: 85 },
  { browser: "TypeScript", stats: 92 },
  { browser: "Test & CI/CD", stats: 88 },
  { browser: "Docker & Déploiement", stats: 78 },
  { browser: "Performance web", stats: 90 },
]

const chartConfig = {
  rest: {
    label: "Architecture REST",
  },
  react: {
    label: "React/Next.js",
    color: "var(--chart-1)",
  },
  express: {
    label: "Node.js/Express",
    color: "var(--chart-2)",
  },
  typescript: {
    label: "Node.js/Express",
    color: "var(--chart-2)",
  },
  mongodb: {
    label: "MongoDB & PostgreSQL",
    color: "var(--chart-3)",
  },
  test: {
    label: "Test & CI/CD",
    color: "var(--chart-4)",
  },
  docker: {
    label: "Docker & Déploiement",
    color: "var(--chart-5)",
  },
  performance: {
    label: "Performance web",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig

export function ChartSkill() {
  return (
    <Card>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              right: 16,
            }}
          >
            <CartesianGrid horizontal={false} />
            <YAxis
              dataKey="browser"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
              hide
            />
            <XAxis dataKey="stats" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Bar dataKey="stats" fill="var(--color-primary)" radius={4}>
              <LabelList
                dataKey="browser"
                position="insideLeft"
                offset={8}
                className="fill-white font-semibold"
                fontSize={12}
              />
              <LabelList
                dataKey="stats"
                position="right"
                offset={8}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex font-medium">
          Apprendre les compétences pour ne pas se perdre sur le marché
          <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Les stats de mes 1 ans d&apos;experiences en dévéloppement web.
        </div>
      </CardFooter>
    </Card>
  )
}
