//@ts-nocheck
import BlogPostCard from "@/components/pages/blog/blog-post-card"
import { getPostsMeta } from "@/lib/posts"
import Link from "next/link"
import HeadingText from "@/components/common/heading-text"
import { H2 } from "@/components/form"
import { MdArrowBackIos } from "react-icons/md"

export const revalidate = 86400

type Props = {
  params: {
    tag: string
  }
}

export async function generateStaticParams() {
  const posts = await getPostsMeta() //deduped!

  if (!posts) return []

  const tags = new Set(posts.map((post) => post.tags).flat())

  return Array.from(tags).map((tag) => ({ tag }))
}

export function generateMetadata({ params: { tag } }: Props) {
  return {
    title: `Résultats pour #${tag} | Jeremie Meyer`,
  }
}

export default async function TagPostList({ params: { tag } }: Props) {
  const posts = await getPostsMeta()

  if (!posts) return <p className="mt-10 text-center">Sorry, no posts</p>

  const tagPosts = posts.filter((post) => post.tags.includes(tag))

  if (!tagPosts.length) {
    return (
      <main className="fade-in container flex flex-col items-center py-4 divide-y-2 divide-zinc-100 dark:divide-zinc-800 sm:py-8">
        <div className="flex flex-col items-center space-y-2 text-center my-6">
          <HeadingText title="Blog" />
        </div>
        <div className="flex-col w-full">
          <p className="mt-10 mb-4">Aucun article avec ce mot-clé.</p>

          <Link
            href="/blog"
            className="group hover:underline text-zinc-500"
          >
            <p className="group hover:text-blue-600 hover:underline flex flex-row items-center">
              <span className="inline-block transition-transform group-hover:-translate-x-1 group- motion-reduce:transform-none">
                <MdArrowBackIos className="mr-2" />
              </span>

              {`voir tous les articles`}
            </p>
          </Link>
        </div>
      </main>
    )
  }

  return (
    <>
      <main className="fade-in container flex flex-col items-center py-4 divide-y-2 divide-zinc-100 dark:divide-zinc-800 sm:py-8">
        <div className="flex flex-col items-center space-y-2 text-center my-6">
          <HeadingText title="Blog" />
        </div>
        <div className="flex-col w-full">
          <H2 className="pt-2">
            {tagPosts.length} résultat{tagPosts.length > 1 ? "s" : ""} pour le
            tag <span className="bg-blue-600 text-white px-1">#{tag}</span>
          </H2>

          <Link
            href="/blog"
            className="group hover:underline text-zinc-500"
          >
            <p className="group hover:text-blue-600 hover:underline flex flex-row items-center">
              <span className="inline-block transition-transform group-hover:-translate-x-1 group- motion-reduce:transform-none">
                <MdArrowBackIos className="mr-2" />
              </span>

              {`voir tous les articles`}
            </p>
          </Link>
          <div className="mt-4 items-center grid gap-4 w-full pb-12">
            {tagPosts.map((post) => (
              <BlogPostCard key={post.id} post={post} highlightTag={tag} />
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
