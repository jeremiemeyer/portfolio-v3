import { FaFacebook, FaLinkedin } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6";

export default function ShareIcons({ pathToShare }: { pathToShare: string }) {
  const links = [
    {
      icon: <FaFacebook />,
      href: `https://www.facebook.com/sharer/sharer.php?u=https://www.jeremiemeyer.fr${pathToShare}`,
    },
    {
      icon: <FaXTwitter />,
      href: `http://twitter.com/share?text=&url=https://www.jeremiemeyer.fr${pathToShare}`,
    },
    {
      icon: <FaLinkedin />,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=https://www.jeremiemeyer.fr${pathToShare}`,
    },
  ]

  return (
    <div className="flex gap-3">
      {links.map((link) => (
        <a
          target="_blank"
          key={link.href}
          href={link.href}
          rel="noopener noreferrer"
          aria-label="Github"
          className="text-2xl text-github dark:text-zinc-300 hover:scale-125 duration-200"
        >
          {link.icon}
        </a>
      ))}
    </div>
  )
}
