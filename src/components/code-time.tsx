import { Languages, Repo } from "@/types/api"
import SectionCard from "@/components/pages/home/section-card"
import { H2, H3 } from "@/components/form"
import { getCodingStats } from "@/lib/api/wakatime"
import { Languages as LanguagesType } from "@/types/api"
import { getRepo } from "@/lib/api/github"
import { Separator } from "./ui/separator"

interface ResponseData {
  data: {
    human_readable_range: string
    human_readable_total_including_other_language: string
    languages: LanguagesType[]
  }
}

export default async function CodeTime() {
  const data = (await getCodingStats()) as ResponseData
  const started = data.data.human_readable_range
  const totalTime = data.data.human_readable_total_including_other_language
  const languages: LanguagesType[] = data.data.languages

  const repoData = (await getRepo()) as Repo[]

  return (
    <>
      <p className="mb-2">Hey there 👋</p>
      <p>
        I've spent{" "}
        <span className="font-semibold dark:text-blue-600">{totalTime}</span>{" "}
        coding over the last 7 days.
      </p>

      {languages && languages.length > 1 ? (
        <>
          <Separator className="mt-4 mb-4" />
          <p>Top languages:</p>
          <ul>
            {languages.slice(0, 3).map((language) => (
              <li key={language.name} className="font-typewriter">
                <span>{language.name}</span> /{" "}
                <span className="dark:text-blue-600">
                  {Math.ceil(language.total_seconds / 3600)}h
                </span>
              </li>
            ))}
          </ul>
        </>
      ) : (
        ""
      )}
    </>
  )
}
