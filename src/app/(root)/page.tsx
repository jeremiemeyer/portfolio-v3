import { siteConfig } from "@/../config/site"
import Hero from "@/components/pages/home/hero"
// import Projects from "@/components/pages/home/old.projects"
import "./../globals.css"
import Stack from "@/components/pages/home/stack"
import Contact from "@/components/pages/home/contact"
import { Viewport } from "next/dist/lib/metadata/types/metadata-interface"
import FadeInOnEntry from "@/components/animations/fade-in-on-entry"
import MaxWidthWrapper from "@/components/shared/max-width-wrapper"
import { Separator } from "@/components/ui/separator"
import ZoomParallax from "@/components/animations/zoom-parallax"
import Projects from "@/components/projects"

export const metadata = {
  title: {
    default: `${siteConfig.name} | Développement web freelance`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Création site internet",
    "développpeur",
    "freelance",
    "Wordpress",
    "Next.js",
    "React",
    "Tailwind",
    "Portfolio",
  ],
  authors: [
    {
      name: siteConfig.author,
      url: siteConfig.url,
    },
  ],
  creator: siteConfig.author,

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: siteConfig.name,
  //   description: siteConfig.description,
  //   images: [`${siteConfig.url}/xxx.jpg`],
  //   creator: "@",
  // },
  icons: {
    icon: "/favicon.ico",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

export default function Home() {
  const components = [<Projects />, <Stack />, <ZoomParallax />, <Contact />]

  return (
    <>
      <div className="fade-in">
        <MaxWidthWrapper>
          <Hero />
          <Separator className="my-8" />
          <main className="mb-12 container grid gap-12">
            {components.map((component, index) => (
              <FadeInOnEntry key={index}>{component}</FadeInOnEntry>
            ))}
          </main>
        </MaxWidthWrapper>
        <div id="__next" />
      </div>
    </>
  )
}
