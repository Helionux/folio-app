"use client"

import { TrendingUp } from "lucide-react"
import {
  Bar,
  BarChart,
  LabelList,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts"

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import {
  Card,
  CardContent,
  CardFooter,
} from "../ui/card"

export const description = "A radial chart with a label"

const chartData = [
  { browser: "Architecture REST", visitors: 85, fill: "var(--color-primary)" },
  { browser: "React/Next.js", visitors: 95, fill: "var(--color-primary)" },
  { browser: "Node.js/Express", visitors: 88, fill: "var(--color-primary)" },
  { browser: "MongoDB/PostgreSQL", visitors: 85, fill: "var(--color-primary)" },
  { browser: "TypeScript", visitors: 92, fill: "var(--color-primary)" },
  { browser: "Test & CI/CD", visitors: 88, fill: "var(--color-primary)" },
  {
    browser: "Docker & Déploiement",
    visitors: 78,
    fill: "var(--color-primary)",
  },
  { browser: "Performance web", visitors: 90, fill: "var(--color-primary)" },
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
    label: "MongoDB/PostgreSQL",
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
        <ChartContainer config={chartConfig} className="h-105 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              layout="vertical"
              margin={{
                top: 10,
                right: 20,
                left: 10,
                bottom: 10,
              }}
            >
              <XAxis type="number" hide />

              <YAxis
                dataKey="browser"
                type="category"
                width={100}
                tickLine={false}
                axisLine={false}
                tick={{ fontSize: 12 }}
              />

              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="line" />}
              />

              <Bar dataKey="visitors" fill="var(--primary)" radius={8}>
                <LabelList dataKey="visitors" position="right" />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}
