import { contact, Contact } from "./contact"
import { BlogPost, blogposts } from "./blogposts"
import { Project } from "@/types"
import { projects } from "./projects"

export interface Config {
  contact: Contact
  projects: Project[]
  blogposts: BlogPost[]
}

const config: Config = {
  contact,
  projects,
  blogposts,
}

export const POSTS_PER_PAGE = 10

export default config
