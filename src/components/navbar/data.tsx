import { Briefcase, Home, Mail, Brush } from "lucide-react"

export const navlinks = [
  {
    id: "home",
    label: "home",
    href: "/",
    icon: <Home />,
  },
  {
    id: "about",
    label: "about",
    href: "/about",
    icon: <Briefcase />,
  },
  {
    id: "projects",
    label: "projects",
    href: "/projects",
    icon: <Brush />,
  },
  {
    id: "contact",
    label: "contact",
    href: "/contact",
    icon: <Mail />,
  },
]
