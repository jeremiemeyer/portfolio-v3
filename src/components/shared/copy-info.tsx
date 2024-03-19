"use client"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import React, { useEffect, useState } from "react"

interface CopyEmailProps {
  children: React.ReactNode
  infoType: string
  infoToCopy: string
}

const CopyInfo = ({ children, infoType, infoToCopy }: CopyEmailProps) => {
  const [copied, setCopied] = useState<boolean>(false)
  let timeoutId: NodeJS.Timeout | null = null

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(infoToCopy)
    setCopied(true)
    if (timeoutId) {
      clearTimeout(timeoutId)
    }
    timeoutId = setTimeout(() => {
      setCopied(false)
      timeoutId = null
    }, 5000)
  }

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "c" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        copyEmailToClipboard()
      }
    }

    document.addEventListener("keydown", down)
    return () => {
      document.removeEventListener("keydown", down)
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
    }
  }, [])

  return (
    <HoverCard>
      <HoverCardTrigger asChild>{children}</HoverCardTrigger>
      <HoverCardContent
        className="text-xs px-3 py-2 cursor-pointer group"
        onClick={copyEmailToClipboard}
      >
        <p className="text-sm text-muted-foreground flex flex-row justify-between">
          <span className="group-hover:text-black dark:group-hover:text-zinc-200 transition-all">
            {!copied ? `Copy ${infoType}` : "Copied to clipboard!"}
          </span>
          <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
            <span className="text-xs">⌘</span>C
          </kbd>
        </p>
      </HoverCardContent>
    </HoverCard>
  )
}

export default CopyInfo
