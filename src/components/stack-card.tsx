import { Stack, StackElement, StackTags } from "@/types"
import React from "react"
import { Badge } from "./ui/badge"

interface StackCardProps {
  stackElement: StackElement
  handleTagClick: (filter: StackTags | "all") => void
}

const StackCard = ({ stackElement, handleTagClick }: StackCardProps) => {
  return (
    <div className="relative h-full bg-zinc-50 dark:bg-black p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
      <div className="grid md:grid-cols-[30%_70%] h-full md:grid-flow-col">
        {/* Left side */}
        <div className="flex mx-auto my-auto md:mx-2 md:my-2">
          {stackElement.logoComponent}
        </div>

        {/* Right side */}
        <div className="flex flex-col justify-between h-full
        
        ">
          <div className="space-y-2">
            <h2 className={`font-typewriter text-xl`}>{stackElement.label}</h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm">
              {stackElement.description}
            </p>
          </div>

          {/* Div containing tags at the bottom of the right side */}
          <div className="mt-4 space-y-0 gap-2 flex flex-wrap">
            {stackElement.tags?.map((tagEl) => (
              <Badge
                key={tagEl} // Don't forget to add a unique key for each element in a list
                onClick={() => handleTagClick(tagEl)}
                className="bg-black hover:bg-zinc-900 dark:bg-zinc-400 dark:hover:bg-zinc-300 cursor-pointer inline-block"
              >
                {tagEl}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default StackCard
