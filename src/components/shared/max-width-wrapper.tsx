import { cn } from "@/lib/utils"
import React from "react"

interface MaxWidthWrapperProps {
  children: React.ReactNode
  className?: string
}

const MaxWidthWrapper = ({ children, className }: MaxWidthWrapperProps) => {
  return (
    <div className={cn(`max-w-[1100px] mx-auto px-2 lg:px-4`, className)}>
      {children}
    </div>
  )
}

export default MaxWidthWrapper
