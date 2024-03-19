'use client'
import { motion } from "framer-motion"
import { navlinks } from "./data"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Index() {
  const pathname = usePathname()

  return (
    <nav className="bg-blur w-[335px] px-1 py-1 text-zinc-400 dark:text-zinc-400 dark:bg-zinc-800/70 border border-zinc-400 border-opacity-20 dark:border-zinc-800 rounded-full mt-4 select-none sticky top-2 z-50 mx-auto">
      <div className="flex justify-between mx-auto">
        {navlinks.map((tab) => (
          <Link
            key={tab.id}
            href={tab.href}
            // onClick={() => setActiveTab(tab.id)}
            className={`${
              pathname === tab.href ? "" : "dark:hover:text-white/60"
            } flex flex-row capitalize relative px-3 rounded-full py-1.5 outline-sky-400 transition focus-visible:outline-2`}
            style={{
              WebkitTapHighlightColor: "transparent",
            }}
          >
            {pathname === tab.href && (
              <motion.span
                layoutId="bubble"
                className="absolute inset-0 z-10 bg-white border border-zinc-200 mix-blend-exclusion"
                style={{ borderRadius: 9999, originY: "0px" }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            {tab.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}
