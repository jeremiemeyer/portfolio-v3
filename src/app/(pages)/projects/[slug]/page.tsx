import React from "react"
import config from "@/config"
// import type { Project } from "@/config/projects"
// import ProjectPage from "@/components/pages/realisations/project-page"

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
    slug: project.id,
  }))
}


export default function Page({ params }: { params: { slug: string } }) {
  return (
      <p></p>
  )
}
