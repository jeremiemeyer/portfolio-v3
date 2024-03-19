import { JSXElementConstructor, ReactElement } from "react"

export type SiteConfig = {
  name: string
  author: string
  description: string
  url: string
  links: {
    github: string
    // facebook: string
    // twitter: string
    linkedin: string
    personal: string
  }
}

export type Maybe<T> = T | null

export type Tuple<T> = [T, T]

export type Meta = {
  id: string
  title: string
  summary: string
  date: string
  tags: string[]
}

export type BlogPost = {
  meta: Meta
  content: ReactElement<any, string | JSXElementConstructor<any>>
}

export enum StackTags {
  frontend = "front-end",
  backend = "backend",
  tools = "tools",
}

export type StackElement = {
  label: string
  id: string
  logoComponent: JSX.Element
  description?: string
  tags?: StackTags[]
}

export type Stack = StackElement[]

export enum ProjectCategories {
  dev = "development",
}

export type Project = {
  id: string
  label: string
  category: ProjectCategories
  client: string
  year: string
  description: JSX.Element
}
