//@ts-nocheck
"use client"
import { Button } from "@/components/ui/button"
import { PhoneCall } from "lucide-react"
import React, { useEffect, useState } from "react"
import { PopupModal } from "react-calendly"

const CalendlyCustomBtn = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null)

  useEffect(() => {
    // Wait for the component to be mounted before setting the rootElement
    if (typeof window !== "undefined") {
      const nextElement = document.getElementById("__next")
      setRootElement(nextElement)
    }
  }, [])

  return (
    <div>
      <Button
        onClick={() => setIsOpen(true)}
        variant="jm"
      >
        Schedule a call
        <PhoneCall className="h-4 w-4 ml-2" />
      </Button>

      <PopupModal
        url="https://calendly.com/jeremiem/30min"
        // pageSettings={props.pageSettings}
        // utm={props.utm}
        // prefill={props.prefill}
        onModalClose={() => setIsOpen(false)}
        open={isOpen}
        /*
         * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
         * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
         */
        rootElement={rootElement}
      />
    </div>
  )
}

export default CalendlyCustomBtn
