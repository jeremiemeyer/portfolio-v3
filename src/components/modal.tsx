import React from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog"
import useModal from "@/hooks/use-modal"

const Modal = () => {
  const { isOpen, data, onClose } = useModal() // Destructure data from useModal result
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{data?.title}</DialogTitle>{" "}
          <DialogDescription
            className={`
              ${
                data?.showScrollbar
                  ? `max-h-[calc(100vh-10rem)] pr-4 overflow-y-scroll`
                  : ""
              }
                `}
          >
            {data?.content}
          </DialogDescription>{" "}
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default Modal
