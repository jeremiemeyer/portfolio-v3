// This file contains all types for api calls

export type Repo = {
  repo: string
  description: string
  language: string
  languageColor: string
  stars: number
  link: string
  website: string
}

export type Languages = {
  name: string
  total_seconds: number
  percent: number
  digital: string
  decimal: string
  text: string
  hours: number
  minutes: number
}
