import { getPostsMeta } from "@/lib/posts"
import BlogPostCard from "./blog-post-card"
import FadeInOnEntry from "@/components/animations/fade-in-on-entry"

export default async function PostsList() {
  const posts = await getPostsMeta()

  if (!posts) {
    return <p>Aucun article disponible.</p>
  }
  return (
    <>
      <div className="flex flex-col w-full">
        <div className="mt-4 items-center grid gap-4 w-full pb-12">
          {posts.map((post) => (
            <FadeInOnEntry>
              <BlogPostCard key={post.id} post={post} />
            </FadeInOnEntry>
          ))}
        </div>
      </div>
    </>
  )
}
