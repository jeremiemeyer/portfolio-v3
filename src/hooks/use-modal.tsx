import { create } from "zustand"

interface ModalStore {
  isOpen: boolean
  data?: {
    title: string
    content: React.ReactNode
    showScrollbar?: boolean
  }
  setIsOpen: (value: boolean) => void
  onOpen: (data: { title: string; content: React.ReactNode }) => void
  onClose: () => void
}

const useModal = create<ModalStore>((set) => ({
  isOpen: false,
  data: undefined,
  setIsOpen: (value) => set({ isOpen: value }),
  onOpen: (data) => set({ data: data, isOpen: true }),
  onClose: () => set({ isOpen: false }),
}))

export default useModal
