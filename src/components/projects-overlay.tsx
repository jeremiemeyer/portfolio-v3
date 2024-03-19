"use client"
import React, { useEffect } from "react"


import { buttonVariants } from "./ui/button"
import useModal from "@/hooks/use-modal"

const ProjectsOverlay = () => {
  const {isOpen, onOpen, onClose} = useModal()

  const overlayContent = {
    title: "My projects",
    content: (
      <>
        <p>Some jsx stuff</p>
      </>
    ),
  }

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "a") {
        e.preventDefault()
        if (isOpen) {
          onClose() // Close the overlay if it's already open
        } else {
          onOpen(overlayContent) // Open the overlay if it's closed
        }
      }
    }

    document.addEventListener("keydown", down)
    // return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <>
      <div
        role="button"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            // Activate on Enter or Space key
            event.preventDefault() // Prevent default behavior
            onOpen(overlayContent)
          }
        }}
        className={buttonVariants({
          className:
            "overlay-btn fixed z-[10] hidden lg:flex top-2 right-6 py-6",
          variant: "jm",
        })}
        onClick={() => onOpen(overlayContent)}
      >
        <span className="group text-zinc-800  hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-200">
          Press{" "}
          <kbd
            className={buttonVariants({
              className:
                "mr-4 ml-4 py-1 px-3 bg-blue-50 group-hover:bg-blue-a text-blue-600 group-hover:text-blue-700 border-blue-200 group-hover:border-blue-300  dark:group-hover:border-blue-600 dark:text-zinc-300 dark:group-hover:text-zinc-200 border dark:border-zinc-800 dark:group-ahover:border-zinc-600 dark:bg-black dark:group-hover:bg-black dark:hover:bg-zinc-800 transition-all",
              variant: "outline",
            })}
          >
            {/* className="bg-zinc-2aa00 dark:bg-black  rounded-lg border dark:border-zinc-800" */}
            A
          </kbd>{" "}
          to see the apps I made
        </span>
      </div>
    </>
  )
}

export default ProjectsOverlay
