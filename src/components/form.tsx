import clsx from "clsx"
import { unbounded } from "@/app/fonts"

interface BaseProps {
  className?: string
  children?: React.ReactNode
}

interface HeaderProps extends BaseProps {
  title: React.ReactNode
  subtitle?: React.ReactNode
}

export function Header(props: HeaderProps): React.ReactElement {
  const { title, subtitle, children } = props

  return (
    <div className="space-y-2 pt-6 pb-8 md:space-y-5">
      <h1 className={`${unbounded.className} text-3xl font-extrabold leading-9 tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14`}>
        {title}
      </h1>
      {subtitle && (
        <p className="text-lg leading-7 text-zinc-500 dark:text-zinc-400">
          {subtitle}
        </p>
      )}
      {children}
    </div>
  )
}

export function H1(props: BaseProps): React.ReactElement {
  const { className, children } = props

  return (
    <h1
      className={clsx(
        "lg:text-5x mb-4 text-3xl font-bold dark:text-white",
        className,
      )}
    >
      {children}
    </h1>
  )
}

export function H2(props: BaseProps): React.ReactElement {
  const { className, children } = props

  return (
    <h2
      className={clsx(
        "mb-4 text-2xl font-semibold dark:text-zinc-200",
        className,
      )}
    >
      {children}
    </h2>
  )
}

export function H3(props: BaseProps): React.ReactElement {
  const { className, children } = props

  return (
    <h3
      className={clsx(
        "mb-1 text-md font-semibold dark:text-zinc-200",
        className,
      )}
    >
      {children}
    </h3>
  )
}
