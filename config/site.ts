import { SiteConfig } from "../src/types"
import { env } from "../env.mjs"

export const siteConfig: SiteConfig = {
  name: "Jeremie Meyer",
  author: "Jeremie Meyer",
  description:
    "Développeur web front-end freelance basé à Strasbourg. Je m'occupe de la conception de votre : landing page, site web vitrine, solution sur mesure, web-app. Stack : React.js / Next.js / Node.js / Express.js / MongoDB. Jetez un œil à mes projets réalisés dans mon portfolio et contactez-moi si vous souhaitez que l'on travaille ensemble.",
  url: env.NEXT_PUBLIC_APP_URL,
  links: {
    github: "https://github.com/jeremiemeyer",
    // facebook: "",
    // twitter: "",
    linkedin: "https://www.linkedin.com/in/jeremiemeyer/",
    personal: "https://www.jeremiemeyer.fr",
  },
}
