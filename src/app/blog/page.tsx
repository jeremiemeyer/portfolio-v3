import HeadingText from "@/components/common/heading-text"
import PostsList from "@/components/pages/blog/posts-list"
import MaxWidthWrapper from "@/components/shared/max-width-wrapper"
import { Suspense } from "react"

export const revalidate = 86400

export const metadata = {
  title: "Blog | Jeremie Meyer",
  description:
    "Mes articles conception et développement web, SEO, bonnes pratiques, découvertes etc.",
}

export default async function page() {
  return (
    <>
      <main className="fade-in flex flex-col items-center py-4 divide-y-2 divide-zinc-100 dark:divide-zinc-800 sm:py-8">
        <MaxWidthWrapper>
          <div className="flex flex-col items-center space-y-2 text-center my-6">
            <HeadingText title="Blog" />
          </div>
          <PostsList />
        </MaxWidthWrapper>
      </main>
    </>
  )
}
