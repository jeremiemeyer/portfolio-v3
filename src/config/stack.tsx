
import { Stack, StackTags} from "@/types"
import NextjsLogo from "@/components/logos/nextjs-logo"
import TypeScriptLogo from "@/components/logos/typescript-logo"
import TailwindCssLogo from "@/components/logos/tailwindcss-logo"
import NodeJsLogo from "@/components/logos/nodejs-logo"
import ExpressJsLogo from "@/components/logos/expressjs-logo"
import GitHubLogo from "@/components/logos/github-logo"
import ReactJsLogo from "@/components/logos/reactjs-logo"

export const stack: Stack = [
    {
      label: "React.js",
      id: "reactjs",
      logoComponent: <ReactJsLogo />,
      description: "A JavaScript library for building user interfaces",
      tags: [StackTags.frontend],
    },
    {
      label: "Next.js",
      id: "nextjs",
      logoComponent: (
        <NextjsLogo />
      ),
      description: "A React framework for building static and dynamic websites",
      tags: [StackTags.frontend, StackTags.backend],
    },
    {
      label: "TypeScript",
      id: "typescript",
      logoComponent: <TypeScriptLogo />,
      description:
        "A typed superset of JavaScript that compiles to plain JavaScript",
      tags: [StackTags.frontend, StackTags.backend],
    },
    {
      label: "TailwindCSS",
      id: "tailwindcss",
      logoComponent: <TailwindCssLogo />,
      description:
        "A utility-first CSS framework for rapidly building custom designs",
      tags: [StackTags.frontend],
    },
    {
      label: "Node.js",
      id: "nodejs",
      logoComponent: <NodeJsLogo />,
      description:
        "A JavaScript runtime built on Chrome's V8 JavaScript engine",
      tags: [StackTags.backend],
    },
    {
      label: "Express.js",
      id: "expressjs",
      logoComponent: <ExpressJsLogo />,
      description: "A web application framework for Node.js",
      tags: [StackTags.backend],
    },
    {
      label: "GitHub",
      id: "github",
      logoComponent: <GitHubLogo />,
      description: "A web-based platform for version control and collaboration",
      tags: [StackTags.tools],
    },
  ]