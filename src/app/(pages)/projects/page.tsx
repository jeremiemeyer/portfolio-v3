import HeadingText from "@/components/common/heading-text"
import ProjectsList from "@/components/pages/realisations/projects-list"

export const revalidate = 86400

export const metadata = {
  title: "Réalisations | Jeremie Meyer",
  description: "Projets réalisés",
}

export default function Projects() {
  return (
    <>
      <div className="flex flex-col items-center space-y-2 text-center my-6">
        <HeadingText title="Projects" subtext="Stuff I have worked on" />
      </div>
      {/* <ProjectsList /> */}
    </>
  )
}
