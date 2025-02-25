import type React from "react"

interface SheetProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

const FilterLayout: React.FC<SheetProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity" onClick={onClose}></div>
        <div className="fixed inset-y-0 left-0 max-w-full flex">
          <div className="relative w-screen max-w-md">
            <div className="h-full flex flex-col py-6 bg-white shadow-xl overflow-y-scroll">{children}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilterLayout

