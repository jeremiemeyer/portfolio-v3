import React from "react"

const PagesTemplate = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="fade-in container py-4 sm:py-8 flex flex-col items-center">
      {children}
    </main>
  )
}

export default PagesTemplate
