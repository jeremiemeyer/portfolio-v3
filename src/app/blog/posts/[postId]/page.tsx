import { getPostsMeta, getPostByName } from "@/lib/posts"
import Link from "next/link"
import { notFound } from "next/navigation"
import getFormattedDate from "@/lib/utils"
import BlogArticle from "@/components/pages/blog/blog-article"
import "highlight.js/styles/github-dark.css"

export const revalidate = 86400

type Props = {
  params: {
    postId: string
  }
}

export async function generateStaticParams() {
  const posts = await getPostsMeta() //deduped

  if (!posts) return []

  return posts.map((post) => ({
    postId: post.id,
  }))
}

export async function generateMetadata({ params: { postId } }: Props) {
  const post = await getPostByName(`${postId}.mdx`) //deduped!

  if (!post) {
    return {
      title: "Article introuvable | Jeremie Meyer",
    }
  }

  return {
    title: `${post.meta.title} | Jeremie Meyer`,
    description: post.meta.summary,
  }
}

export default async function Post({ params: { postId } }: Props) {
  const post = await getPostByName(`${postId}.mdx`)

  if (!post) notFound()

  const { meta, content } = post

  const pubDate = getFormattedDate(meta.date)

  return (
    <BlogArticle
      title={meta.title}
      pubDate={pubDate}
      content={content}
      tags={meta.tags}
      postId={postId}
    />
  )
}
