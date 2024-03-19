import React from "react"
import config from "@/config"
import type { Project } from "@/config/projects"
import ProjectPage from "@/components/pages/realisations/project-page"

export const revalidate = 86400

const { projects } = config

type Props = {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {

  if (!projects) return []

  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params: { slug } }: Props) {
  const project: Project | undefined = projects.find(
    (project: Project) => project.slug === slug
  )
  if (!project) {
    return {
      title: "Projet introuvable | Jeremie Meyer",
    }
  }

  return {
    title: `${project.title} | Jeremie Meyer`,
  }
}

export default function page({ params }: { params: { slug: string } }) {
  return (
      <ProjectPage params={params} />
  )
}
