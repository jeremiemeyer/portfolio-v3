import HeadingText from "@/components/common/heading-text"
import Timeline from "@/components/timeline"
import React from "react"

const page = () => {
  return (
    <>
      <div className="flex flex-col items-center text-center space-y-2 gap-4 my-6">
        <HeadingText title="Timeline" />
      </div>
      <Timeline />
    </>
  )
}

export default page
