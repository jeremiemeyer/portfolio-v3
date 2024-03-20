"use client"
import HeadingText from "@/components/common/heading-text"
import MaxWidthWrapper from "@/components/shared/max-width-wrapper"
import { projects } from "@/config/projects"
import { Project } from "@/types"
import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import FadeInIndex from "./animations/fade-in-index"

interface ProjectElementProps {
  project: Project
  isSelected: boolean
  isExpanded: boolean
  onExpandProject: () => void
  onProjectHover: () => void
  onProjectMouseLeave: () => void
}

const ProjectElement = ({
  project,
  isSelected,
  isExpanded,
  onExpandProject,
  onProjectHover,
  onProjectMouseLeave,
}: ProjectElementProps) => {
  return (
    <>
      <motion.div
        className={`relative grid grid-cols-[80%_20%] md:grid-cols-[30%_30%_30%_10%] border-t border-zinc-600 py-2 cursor-pointer font-light`}
        onMouseEnter={onProjectHover}
        onMouseLeave={onProjectMouseLeave}
        variants={{
          selected: {
            paddingLeft: "20px",
            paddingRight: "20px",
          },
          notSelected: {
            paddingLeft: "15px",
            paddingRight: "15px",
          },
        }}
        initial={false}
        animate={isSelected ? "selected" : "notSelected"}
        transition={{ type: "spring", bounce: 0.1, duration: 0.5 }}
        onClick={onExpandProject}
      >
        {isSelected ? (
          <motion.span
            layoutId="bubble3"
            className="absolute inset-0 z-10 bg-zinc-200 border00 mix-blend-exclusion"
            initial={{ height: "100%" }}
            exit={{ height: "0%" }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
          />
        ) : null}
        <span>{project.label}</span>
        <span className="hidden md:block capitalize">{project.category}</span>
        <span className="hidden md:block">{project.client}</span>
        <span>{project.year}</span>
      </motion.div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className="left-0 w-full"
            initial={{ height: "0px" }}
            animate={{ height: "100%" }}
            exit={{ height: "0px" }}
            transition={{ type: "spring", bounce: 0, duration: 0.3 }}
            style={{ originX: "0px" }}
          >
            <motion.p
              initial={{ opacity: 0, height: "0px" }}
              animate={{ opacity: 1, height: "100%" }}
              exit={{ opacity: 0, height: "0px" }}
              transition={{ duration: 0.1 }}
              className="p-4"
              style={{ originX: "0px" }}
            >
              {project.description}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState<string | null>(null)
  const [selectedProject, setSelectedProject] = useState<string | null>(null)

  return (
    <>
      <MaxWidthWrapper>
        <div className="grid grid-cols-[80%_20%] md:grid-cols-[30%_30%_30%_10%]  text-zinc-400 uppercase text-sm mb-4 px-4 font-light">
          <span>Project</span>
          <span className="hidden md:block">Category</span>
          <span className="hidden md:block">Client</span>
          <span>Year</span>
        </div>
        <div onMouseLeave={() => setSelectedProject(null)}>
          {projects.map((project, i) => (
            <FadeInIndex index={i}>
              <ProjectElement
                project={project}
                isSelected={selectedProject === project.id}
                isExpanded={expandedProject === project.id}
                onProjectHover={() => setSelectedProject(project.id)}
                onProjectMouseLeave={() => setSelectedProject(null)}
                onExpandProject={() =>
                  setExpandedProject(
                    expandedProject !== project.id ? project.id : null
                  )
                }
              />
            </FadeInIndex>
          ))}
        </div>
      </MaxWidthWrapper>
    </>
  )
}

export default Projects
