import { Button } from "@/components/ui/button"
import { Project, ProjectCategories } from "@/types"
import Image from "next/image"

export const projects: Project[] = [
  {
    id: "denat",
    label: "Denat Environnement",
    category: ProjectCategories.dev,
    client: "Denat Environnement",
    year: "2023",
    description: (
      <>
        <div className="space-y-4">
          <p className="text-lg">
            Designed and developed a website for a French company specializing
            in gas cylinder recycling.
          </p>
          <Button variant="jm">See website</Button>
          <ul className="flex flex-row gap-4">
            <li>- Design</li>
            <li>- Development</li>
          </ul>
          <div className="grid grid-cols-2 gap-2">
            <Image
              src="/static/projects/denat-environnement/screenshots/desktop/screenshot01.jpg"
              height={250}
              width={500}
              alt="image"
            />
            <Image
              src="/static/projects/denat-environnement/screenshots/desktop/screenshot02.jpg"
              height={250}
              width={500}
              alt="image"
            />
          </div>
        </div>
      </>
    ),
  },
  {
    id: "denat2",
    label: "Denat Environnement",
    category: ProjectCategories.dev,
    client: "Denat Environnement",
    year: "2023",
    description: <p>ezz</p>,
  },
  {
    id: "denat3",
    label: "Denat Environnement",
    category: ProjectCategories.dev,
    client: "Denat Environnement",
    year: "2023",
    description: <p>ezz</p>,
  },
]
