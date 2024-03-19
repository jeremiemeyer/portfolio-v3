import React from "react"

const data = [
  {
    title: "Titre",
    subtitle: "subtitle",
    content: (
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus
        temporibus et reiciendis quas magnam ipsum?
      </p>
    ),
    date: "May 2010",
  },
  {
    title: "Titre",
    subtitle: "subtitle",
    content: (
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus
        temporibus et reiciendis quas magnam ipsum?
      </p>
    ),
    date: "May 2010",
  },
  {
    title: "Titre",
    subtitle: "subtitle",
    content: (
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus
        temporibus et reiciendis quas magnam ipsum?
      </p>
    ),
    date: "May 2010",
  },
  {
    title: "Titre",
    subtitle: "subtitle",
    content: (
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus
        temporibus et reiciendis quas magnam ipsum?
      </p>
    ),
    date: "May 2010",
  },
]

interface TimelineElementProps {
  title: string
  subtitle: string
  content: React.ReactNode
  date: string
}

const TimelineElement = ({
  title,
  subtitle,
  content,
  date,
}: TimelineElementProps) => {
  return (
    <div className="relative pl-8 sm:pl-32 py-6 group">
      <div className="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">
        {title}
      </div>
      <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
        <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
          {date}
        </time>
        <div className="text-xl font-bold text-slate-900">{subtitle}</div>
      </div>
      <div className="text-slate-500">{content}</div>
    </div>
  )
}

const Timeline = () => {
  return (
    <div className="-my-6">
      {data.map((entry) => (
        <TimelineElement
          title={entry.title}
          subtitle={entry.subtitle}
          content={entry.content}
          date={entry.date}
        />
      ))}
    </div>
  )
}

export default Timeline
