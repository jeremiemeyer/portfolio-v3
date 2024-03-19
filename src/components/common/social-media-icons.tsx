import { FaGithub, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa"
import { siteConfig } from "@/../config/site"
import { FaXTwitter } from "react-icons/fa6"

export default function SocialMediaIcons() {
  return (
    <div className="flex gap-6 items-center">
      <a
        target="_blank"
        href={siteConfig.links.github}
        rel="noopener noreferrer"
        aria-label="Github"
        className="text-4xl text-zinc-800 dark:text-zinc-400 lg:hover:scale-125 duration-200"
      >
        <FaGithub className="h-8 w-8" />
      </a>
      <a
        target="_blank"
        href={siteConfig.links.linkedin}
        rel="noopener noreferrer"
        aria-label="Linkedin"
        className="text-4xl text-zinc-800 dark:text-zinc-400 lg:hover:scale-125 duration-200"
      >
        <FaLinkedin className="h-8 w-8" />
      </a>
      <a
        target="_blank"
        href={siteConfig.links.linkedin}
        rel="noopener noreferrer"
        aria-label="Linkedin"
        className="text-4xl text-zinc-800 dark:text-zinc-400 lg:hover:scale-125 duration-200"
      >
        <FaXTwitter className="h-8 w-8" />
      </a>
    </div>
  )
}
