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

        <div className="flex flex-col gap-2 font-light dark:text-zinc-200">
          <p>
            I'm a passionate front-end developer based in France, specializing
            in crafting captivating websites and web apps using React, Next.js.
          </p>
          <p>
            With a keen eye for design and a knack for problem-solving, I strive
            to deliver engaging digital experiences that leave a lasting
            impression.
          </p>
          <p>Let's create something amazing together.</p>
        </div>
      </SectionCard>
      {/* <Timeline /> */}
    </>
  )
}

export default Page
