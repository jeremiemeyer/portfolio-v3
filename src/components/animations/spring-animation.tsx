import React from "react"
import { motion } from "framer-motion"

const SpringAnimation = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      {children}
    </motion.div>
  )
}

export default SpringAnimation
