"use client"
import HeadingText from "@/components/common/heading-text"
import SectionCard from "./section-card"
import StackCard from "@/components/stack-card"
import { stack } from "@/config/stack"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { StackElement, StackTags } from "@/types"
import { useEffect, useMemo, useState } from "react"
import { motion } from "framer-motion"
import FadeInIndex from "@/components/animations/fade-in-index"
import Spotlight, { SpotlightCard } from "@/components/spotlight"

export default function Stack() {
  const [selectedFilter, setSelectedFilter] = useState<StackTags | "all">("all")
  const stackTagsKeys = Object.keys(StackTags) as Array<keyof typeof StackTags>
  const [keyCounter, setKeyCounter] = useState(0) // Counter to force re-render

  const handleFilterChange = (filter: StackTags | "all") => {
    setSelectedFilter(filter)
    setKeyCounter((prevCounter) => prevCounter + 1)
  }

  const filteredStack: StackElement[] = useMemo(() => {
    return stack.filter((stackEl) =>
      selectedFilter === "all" ? true : stackEl.tags?.includes(selectedFilter)
    )
  }, [selectedFilter, stack])

  return (
    <>
      <HeadingText title="Stack" className="mb-4 pl-4" />
      <SectionCard>
        <div className="flex flex-col items-center gap-2">
          {/* Filter  */}
          <div className="bg-blur px-1 py-1 text-zinc-400 dark:text-zinc-400 dark:bg-zinc-800/70 border border-zinc-400 border-opacity-20 dark:border-zinc-800 rounded-full select-none mx-auto">
            <div className="flex justify-between mx-auto text-sm">
              <span
                role="button"
                tabIndex={0}
                onClick={(e) => handleFilterChange("all")}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    handleFilterChange("all")
                  }
                }}
                className={`${
                  selectedFilter === "all" ? "" : "dark:hover:text-white/60"
                } flex flex-row relative px-3 rounded-full py-1.5 outline-sky-400 transition focus-visible:outline-2`}
                style={{
                  WebkitTapHighlightColor: "transparent",
                }}
              >
                {selectedFilter === "all" && (
                  <motion.span
                    layoutId="bubble-two"
                    className="absolute inset-0 z-10 bg-white border border-zinc-200 mix-blend-exclusion"
                    style={{ borderRadius: 9999, originY: "0px" }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                all
              </span>
              {stackTagsKeys.map((tagKey) => (
                <span
                  key={tagKey}
                  role="button"
                  tabIndex={0}
                  // value={tag}
                  onClick={(e) => handleFilterChange(StackTags[tagKey])}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      handleFilterChange(StackTags[tagKey])
                    }
                  }}
                  className={`${
                    selectedFilter === StackTags[tagKey]
                      ? ""
                      : "dark:hover:text-white/60"
                  } flex flex-row relative px-3 rounded-full py-1.5 outline-sky-400 transition focus-visible:outline-2`}
                  style={{
                    WebkitTapHighlightColor: "transparent",
                  }}
                >
                  {selectedFilter === StackTags[tagKey] && (
                    <motion.span
                      layoutId="bubble-two"
                      className="absolute inset-0 z-10 bg-white border border-zinc-200 mix-blend-exclusion"
                      style={{ borderRadius: 9999, originY: "0px" }}
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                  {StackTags[tagKey]}
                </span>
              ))}
            </div>
          </div>

          {/* Results  */}
          <div className="mt-4">
            <Spotlight className="mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-start max-w-none group">
              {filteredStack.map((stackEl, index) => (
                <FadeInIndex key={`${stackEl.id}_${keyCounter}`} index={index}>
                  <SpotlightCard>
                    <StackCard
                      stackElement={stackEl}
                      handleTagClick={handleFilterChange}
                    />
                  </SpotlightCard>
                </FadeInIndex>
              ))}
            </Spotlight>
          </div>
        </div>
      </SectionCard>
    </>
  )
}
