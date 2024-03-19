import React, { ReactNode } from "react"
import { cn } from "@/lib/utils"

type SectionCardProps = {
  children: ReactNode
  className?: string
}

export default function SectionCard({ children, className }: SectionCardProps) {
  return (
    <section
      className={cn(
        "p-6 rounded-[1.5rem] bg-white dark:bg-zinc-900/40 border border-zinc-600 border-opacity-20 dark:border-zinc-800 mx-auto w-full",
        className
      )}
    >
      {children}
    </section>
  )
}
