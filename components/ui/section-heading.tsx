import { cn } from "@/lib/utils"

type SectionHeadingProps = {
  label: string
  title: string
  description?: string
  className?: string
}


export function SectionHeading({
  label,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-12 max-w-2xl", className)}>
      <p className="mb-3 font-mono text-xs tracking-widest text-primary uppercase">
        {label}
      </p>
      <h2 className="font-syne-mono text-2xl font-semibold text-foreground sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
          {description}
        </p>
      )}
    </div>
  )
}
