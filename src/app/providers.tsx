// app/providers.tsx
"use client"

import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { useRouter } from "next/navigation"

export function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter()

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      {children}
      <Toaster />
    </ThemeProvider>
  )
}
