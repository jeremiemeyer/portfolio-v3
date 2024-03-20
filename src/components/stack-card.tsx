import { Stack, StackElement, StackTags } from "@/types"
import React from "react"
import { Badge } from "./ui/badge"

interface StackCardProps {
  stackElement: StackElement
  handleTagClick: (filter: StackTags | "all") => void
}

const StackCard = ({ stackElement, handleTagClick }: StackCardProps) => {
  return (
    <div className="relative aspect-[1/1] sm:aspect-[6/5] md:aspect-[12/6] lg:aspect-[12/7] xl:aspect-[12/6] h-full w-full bg-zinc-50 dark:bg-black p-4 rounded-[inherit] z-20 overflow-hidden">
      <div className="grid w-full md:grid-cols-[30%_70%] h-full md:grid-flow-col">
        {/* Left side */}
        <div className="flex mx-auto my-auto md:mx-2 md:my-2">
          {stackElement.logoComponent}
        </div>

        {/* Right side */}
        <div
          className="flex flex-col justify-between h-full"
        >
          <div className="space-y-2 flex mx-auto sm:block">
            <h2 className={`font-typewriter text-md sm:text-xl mt-2 lg:mt-0`}>{stackElement.label}</h2>
            <p className="hidden sm:flex text-zinc-600 dark:text-zinc-500 text-sm">
              {stackElement.description}
            </p>
          </div>

          {/* Div containing tags at the bottom of the right side */}
          <div className="hidden sm:flex mt-4 space-y-0 gap-2 flex-wrap">
            {stackElement.tags?.map((tagEl) => (
              <Badge
                key={tagEl} // Don't forget to add a unique key for each element in a list
                onClick={() => handleTagClick(tagEl)}
                className="bg-black hover:bg-zinc-900 dark:bg-zinc-400 dark:hover:bg-zinc-300 cursor-pointer inline-block font-light"
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
