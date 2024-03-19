import { contact, Contact } from "./contact"
import { Project, projects } from "./projects"
import { BlogPost, blogposts } from "./blogposts"

interface Config {
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
