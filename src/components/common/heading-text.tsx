import { unbounded } from "@/app/fonts"
import { Separator } from "../ui/separator"
import { cn } from "@/lib/utils"

interface HeadingProps {
  title: string
  subtext?: string
  children?: React.ReactNode
  className?: string
}

export default function HeadingText({
  title,
  subtext,
  children,
  className,
}: HeadingProps) {
  return (
    <>
      <div className={cn("mb-8", className)}>
        <h1 className="text-2xl leading-9 tracking-tight text-zinc-900 dark:text-zinc-500 sm:leading-10 md:leading-14">
          {title}
        </h1>
        {subtext && (
          <p className="leading-7 text-zinc-500 dark:text-zinc-400">
            {subtext}
          </p>
        )}
        {children}
      </div>
    </>
  )
}
