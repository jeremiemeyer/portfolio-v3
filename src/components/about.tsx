import React from "react"
import MaxWidthWrapper from "./shared/max-width-wrapper"
import HeadingText from "./common/heading-text"

const About = () => {
  return (
    <MaxWidthWrapper>
      <HeadingText title="About" />
      <div className="flex flex-col gap-2 font-light">
        <p>Hi, I'm Jeremie.</p>
        <p>
          I'm a passionate front-end developer based in France, specializing in
          crafting captivating websites and web apps using React, Next.js.
        </p>
        <p>
          With a keen eye for design and a knack for problem-solving, I strive to deliver engaging digital experiences that
          leave a lasting impression.
        </p>
        <p>Let's create something amazing together.</p>
      </div>
    </MaxWidthWrapper>
  )
}

export default About
