"use client"

import { useEffect, useRef } from "react"
import { BsX } from "react-icons/bs"
// import { X } from "lucide-react"

interface VideoModalProps {
  videoUrl: string
  onClose: () => void
}

export default function VideoModal({ videoUrl, onClose }: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    document.addEventListener("keydown", handleEscape)

    // Auto-play video when modal opens
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Video autoplay failed:", error)
      })
    }

    // Prevent scrolling on body when modal is open
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "auto"
    }
  }, [onClose])

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center p-4">
      <div className="relative w-full max-w-4xl">
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white hover:text-gray-300 focus:outline-none"
        >
          <BsX className="h-8 w-8" />
        </button>
        <div className="relative rounded-lg overflow-hidden bg-black">
          <video ref={videoRef} src={videoUrl} controls className="w-full aspect-video" />
        </div>
      </div>
    </div>
  )
}
