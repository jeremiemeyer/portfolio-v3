"use client"
import "./globals.css"
import Navbar from "../components/navbar/index"
// import Navbar from "../components/layout/navbar"
import Footer from "../components/footer"
import "./globals.css"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false
import { worksans } from "./fonts"
import { sourcecodepro } from "./fonts"
import { Providers } from "./providers"
import MaxWidthWrapper from "@/components/shared/max-width-wrapper"
import { Separator } from "@/components/ui/separator"
import ProjectsOverlay from "@/components/projects-overlay"
import ModalProvider from "@/providers/modal-provider"

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="fr">
        <body
          className={`${worksans.className} ${sourcecodepro.variable} text-zinc-800 dark:text-zinc-200`}
        >
          <Providers>
            <MaxWidthWrapper>
              <Navbar />
              <ProjectsOverlay />
              <ModalProvider />
              {children}
              <Separator />
              <Footer />
            </MaxWidthWrapper>
            <div className="fixed w-full h-full inset-0 bg-gradient-to-b from-zinc-100 dark:from-zinc-900/50 to-zinc-50 dark:to-black z-[-1]" />
          </Providers>
        </body>
        {/* <CookiesConsent /> */}
      </html>
    </>
  )
}
