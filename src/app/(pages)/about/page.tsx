import HeadingText from "@/components/common/heading-text"
import SectionCard from "@/components/pages/home/section-card"
import Timeline from "@/components/timeline"
import Image from "next/image"
import React from "react"

const Page = () => {
  return (
    <>
      <div className="flex flex-col items-center text-center sPace-y-2 gap-4 my-6">
        <HeadingText title="About" subtext="let's get acquainted" />
      </div>
      <SectionCard className="max-w-2xl flex flex-row">
        <Image
          className="hover:grayscale-0 overlay-btn rounded-full bg-white group-hover:bg-blue-50 dark:bg-zinc-900/40 dark:group-hover:bg-zinc-900/70 group-hover:scale-105 transition-all"
          src="/static/pic-no-bg-bw.webp"
          alt="profile pic"
          width={120}
          height={120}
        />
      </SectionCard>
      <Timeline />
    </>
  )
}

export default Page
