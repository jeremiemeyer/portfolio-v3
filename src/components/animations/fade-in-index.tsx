
import React from "react"
import { motion } from "framer-motion"

interface FadeInIndexProps {
  index: number
  children: React.ReactNode
}

const FadeInIndex = ({ index, children }: FadeInIndexProps) => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{
        delay: index * 0.1,
        ease: "easeInOut",
        duration: 0.5,
      }}
      viewport={{ amount: 0 }}
      className="rounded relative w-full h-full"
    >
      {children}
    </motion.div>
  )
}

export default FadeInIndex
