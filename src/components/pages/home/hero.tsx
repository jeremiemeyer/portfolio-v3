import { Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import CalendlyCustomBtn from "./calendly-custom-btn"

import CodeTime from "../../code-time"
import SocialMediaIcons from "../../common/social-media-icons"
import { buttonVariants } from "../../ui/button"

import { Badge } from "@/components/ui/badge"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import CopyInfo from "@/components/shared/copy-info"

export const revalidate = 100

export default function Hero() {
  return (
    <header className="">
      <div className="py-8 px-8 md:px-0 flex flex-col items-center text-center gap-2">
        <HoverCard>
          <HoverCardTrigger>
            <div className="group">
              <Image
                className="hover:grayscale-0 overlay-btn rounded-full bg-white group-hover:bg-blue-50 dark:bg-zinc-900/40 dark:group-hover:bg-zinc-900/70 group-hover:scale-105 transition-all"
                src="/static/pic-no-bg-bw.webp"
                alt="profile pic"
                width={120}
                height={120}
              />
              <Badge
                variant="outline"
                className="overlay-btn font-light bg-white hover:bg-zinc-50 dark:bg-zinc-900 text-zinc-500 group-hover:text-black dark:text-zinc-600 dark:group-hover:text-zinc-200 dark:group-hover:border-zinc-600 transition-all mt-2 cursor-default"
              >
                Hover me!
              </Badge>
            </div>
          </HoverCardTrigger>
          <HoverCardContent side="bottom" className="rounded-2xl">
            <CodeTime />
          </HoverCardContent>
        </HoverCard>

        <h1
          className={`text-3xl lg:text-4xl font-semibold text-black dark:text-zinc-300 text-opacity-70 font-typewriter`}
        >
          Jeremie Meyer
        </h1>
        <h2 className="text-lg lg:text-xl text-black dark:text-zinc-400 text-opacity-70">
          Front-end developer –{" "}
          <span className="text-md lg:text-lg font-typewriter">
            TypeScript, React.js
          </span>
        </h2>
        <p className="flex flex-row items-center mb-2">
          {/* <span className="bg-green-400 rounded-full h-3 w-3 drop-shadow-glow" /> */}
          <span className="ml-3 flex flex-row items-center text-green-500 dark:text-green-400 drop-shadow-glowLight dark:drop-shadow-glowDark">
            <span className="pulsating-circle h-2 w-2 mr-2" />
            Available for work
          </span>
        </p>
        <SocialMediaIcons />
        <div className="flex flex-col md:flex-row md:gap-2">
          {/* Contact button  */}
          <CopyInfo
            infoType="email"
            infoToCopy={process.env.NEXT_PUBLIC_CONTACT_EMAIL!}
          >
            <Link href="/contact" className={buttonVariants({ variant: "jm" })}>
              Let's get in touch
              <Mail className="h-4 w-4 ml-2" />
            </Link>
          </CopyInfo>

          {/* Calendly button */}
          <CalendlyCustomBtn />
        </div>
      </div>
    </header>
  )
}
