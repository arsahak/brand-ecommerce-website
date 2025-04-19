// "use client"

// import { useRef, useState } from "react"
// import Image from "next/image"
// import { GrGrid } from "react-icons/gr"
// import { FiVolume2 } from "react-icons/fi"
// import { BiPlay } from "react-icons/bi"

// const videos = [
//   {
//     id: 1,
//     title: "Fashion Week Live",
//     views: 1243,
//     thumbnail: "/assets/product/live-1.jpeg",
//     videoUrl: "/assets/live/live.mp4",
//     isLive: true,
//   },
//   {
//     id: 2,
//     title: "Runway Show",
//     views: 856,
//     thumbnail: "/assets/product/live-1.jpeg",
//     videoUrl: "/assets/live/live.mp4",
//     isLive: true,
//   },
//   {
//     id: 3,
//     title: "Designer Showcase",
//     views: 621,
//     thumbnail: "/assets/product/live-1.jpeg",
//     videoUrl: "/assets/live/live.mp4",
//     isLive: true,
//   },
//   {
//     id: 4,
//     title: "Backstage Access",
//     views: 1089,
//     thumbnail: "/assets/product/live-1.jpeg",
//     videoUrl: "/assets/live/live.mp4",
//     isLive: true,
//   },
//   {
//     id: 5,
//     title: "Style Interview",
//     views: 734,
//     thumbnail: "/assets/product/live-1.jpeg",
//     videoUrl: "/assets/live/live.mp4",
//     isLive: true,
//   },
// ]

// export default function VideoSection() {
//   const [isGridView, setIsGridView] = useState(true)
//   const [isMuted, setIsMuted] = useState(false)
//   const [isHovering, setIsHovering] = useState(false)
//   const [isPlaying, setIsPlaying] = useState(false)
//   const videoRef = useRef<HTMLVideoElement>(null)

//   const handleMouseEnter = () => {
//     setIsHovering(true)
//     if (videoRef.current) {
//       videoRef.current.play().catch((err) => console.error("Video play failed:", err))
//       setIsPlaying(true)
//     }
//   }

//   const handleMouseLeave = () => {
//     setIsHovering(false)
//     if (videoRef.current) {
//       videoRef.current.pause()
//       videoRef.current.currentTime = 0
//       setIsPlaying(false)
//     }
//   }
//   const formatViews = (views: number) => {
//     return views.toLocaleString()
//   }

//   return (
//     <section className="container mx-auto">
//       <div className="flex justify-between items-center mb-4">
//         <div>
//           <h1 className="text-2xl font-bold">Live Fashion Streams</h1>
//           <p className="text-gray-500">Watch all our live fashion coverage</p>
//         </div>
//         <div className="flex gap-2">
//           <button
//             className="p-2 rounded-md border border-gray-200 hover:bg-gray-100"
//             onClick={() => setIsGridView(true)}
//             aria-label="Grid view"
//           >
//             <GrGrid className={`h-5 w-5 ${isGridView ? "text-black" : "text-gray-400"}`} />
//           </button>
//           <button
//             className="p-2 rounded-md border border-gray-200 hover:bg-gray-100"
//             onClick={() => setIsMuted(!isMuted)}
//             aria-label={isMuted ? "Unmute" : "Mute"}
//           >
//             <FiVolume2 className={`h-5 w-5 ${!isMuted ? "text-black" : "text-gray-400"}`} />
//           </button>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
//         {videos.map((video) => (
//           <div
//           key={video.id}
//           className="relative rounded-lg overflow-hidden cursor-pointer group"
//           onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave}
//         >
//           <div className="relative aspect-[9/16] bg-gray-100">
//             {isPlaying ? (
//               <video ref={videoRef} className="w-full h-full object-cover" muted={isMuted} loop playsInline>
//                 {/* Replace with actual video source */}
//                 <source src={video?.videoUrl} type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
//             ) : (
//               <Image src={video.thumbnail || "/placeholder.svg"} alt={video.title} fill className="object-cover" />
//             )}
    
//             {/* Live badge */}
//             <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-2 py-0.5 rounded">
//               LIVE
//             </div>
    
//             {/* Play button overlay on hover */}
//             {isHovering && !isPlaying && (
//               <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
//                 <div className="rounded-full bg-white bg-opacity-80 p-3">
//                   <BiPlay className="h-6 w-6 text-black" />
//                 </div>
//               </div>
//             )}
//           </div>
    
//           {/* Video info */}
//           <div className="p-2">
//             <h3 className="font-medium text-sm">{video.title}</h3>
//             <p className="text-xs text-gray-500">{formatViews(video.views)}</p>
//           </div>
//         </div>
//         ))}
//       </div>
//     </section>
//   )
// }


// "use client"

// import { useRef, useState } from "react"
// import Image from "next/image"
// import { GrGrid } from "react-icons/gr"
// import { FiVolume2 } from "react-icons/fi"
// import { BiPlay } from "react-icons/bi"

// const videos = [
//   {
//     id: 1,
//     title: "Fashion Week Live",
//     views: 1243,
//     thumbnail: "/assets/product/live-1.jpeg",
//     videoUrl: "/assets/live/live.mp4",
//     isLive: true,
//   },
//   {
//     id: 2,
//     title: "Runway Show",
//     views: 856,
//     thumbnail: "",
//     videoUrl: "/assets/live/live.mp4",
//     isLive: true,
//   },
//   {
//     id: 3,
//     title: "Designer Showcase",
//     views: 621,
//     thumbnail: "/assets/product/live-1.jpeg",
//     videoUrl: "/assets/live/live.mp4",
//     isLive: true,
//   },
//   {
//     id: 4,
//     title: "Backstage Access",
//     views: 1089,
//     thumbnail: "/assets/product/live-1.jpeg",
//     videoUrl: "/assets/live/live.mp4",
//     isLive: true,
//   },
//   {
//     id: 5,
//     title: "Style Interview",
//     views: 734,
//     thumbnail: "/assets/product/live-1.jpeg",
//     videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
//     isLive: true,
//   },
// ]

// const formatViews = (views: number) => views.toLocaleString()

// function VideoCard({ video, isMuted }: { video: any; isMuted: boolean }) {
//   const [isPlaying, setIsPlaying] = useState(false)
//   const [isHovering, setIsHovering] = useState(false)
//   const videoRef = useRef<HTMLVideoElement>(null)

//   const handleMouseEnter = () => {
//     setIsHovering(true)
//     if (videoRef.current) {
//       videoRef.current.play()
//       setIsPlaying(true)
//     }
//   }

//   const handleMouseLeave = () => {
//     setIsHovering(false)
//     if (videoRef.current) {
//       videoRef.current.pause()
//       videoRef.current.currentTime = 0
//       setIsPlaying(false)
//     }
//   }

//   return (
//     <div
//       className="relative rounded-lg overflow-hidden cursor-pointer group"
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//     >
//       <div className="relative aspect-[9/16] bg-gray-100">
//         {isPlaying ? (
//           <video
//             ref={videoRef}
//             className="w-full h-full object-cover"
//             muted={isMuted}
//             loop
//             playsInline
//           >
//             <source src={video.videoUrl.mp4} type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//         ) : (
//           <Image
//             src={video?.thumbnail || "/placeholder.svg"}
//             alt={video.title}
//             fill
//             className="object-cover"
//           />
//         )}

//         {video.isLive && (
//           <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-2 py-0.5 rounded">
//             LIVE
//           </div>
//         )}

//         {isHovering && !isPlaying && (
//           <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
//             <div className="rounded-full bg-white bg-opacity-80 p-3">
//               <BiPlay className="h-6 w-6 text-black" />
//             </div>
//           </div>
//         )}
//       </div>

//       <div className="p-2">
//         <h3 className="font-medium text-sm">{video.title}</h3>
//         <p className="text-xs text-gray-500">{formatViews(video.views)}</p>
//       </div>
//     </div>
//   )
// }

// export default function VideoSection() {
//   const [isGridView, setIsGridView] = useState(true)
//   const [isMuted, setIsMuted] = useState(false)

//   return (
//     <section className="container mx-auto">
//       <div className="flex justify-between items-center mb-4">
//         <div>
//           <h1 className="text-2xl font-bold">Live Fashion Streams</h1>
//           <p className="text-gray-500">Watch all our live fashion coverage</p>
//         </div>
//         <div className="flex gap-2">
//           <button
//             className="p-2 rounded-md border border-gray-200 hover:bg-gray-100"
//             onClick={() => setIsGridView(true)}
//             aria-label="Grid view"
//           >
//             <GrGrid className={`h-5 w-5 ${isGridView ? "text-black" : "text-gray-400"}`} />
//           </button>
//           <button
//             className="p-2 rounded-md border border-gray-200 hover:bg-gray-100"
//             onClick={() => setIsMuted(!isMuted)}
//             aria-label={isMuted ? "Unmute" : "Mute"}
//           >
//             <FiVolume2 className={`h-5 w-5 ${!isMuted ? "text-black" : "text-gray-400"}`} />
//           </button>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
//         {videos.map((video) => (
//           <VideoCard key={video.id} video={video} isMuted={isMuted} />
//         ))}
//       </div>
//     </section>
//   )
// }


"use client"

import Image from "next/image"
import { useState } from "react"
import VideoModal from "./VideoModal"
import { BsPlay } from "react-icons/bs"


export default function VideoSection() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

  const fashionStreams = [
    {
      id: "fashion-week",
      title: "Fashion Week Live",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      thumbnail: "/assets/product/live-3.jpeg",
    },
    {
      id: "designer-showcase",
      title: "Designer Showcase",
      // videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      videoUrl: "/assets/live/live.mp4",
      thumbnail: "/assets/product/live-2.jpeg",
    },
    {
      id: "style-interview",
      title: "Style Interview",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      thumbnail: "/assets/product/live-4.jpeg",
    },
    {
      id: "runway-show",
      title: "Runway Show",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      thumbnail: "/assets/product/live-2.jpeg",
    },
  ]

  const openVideo = (videoUrl: string) => {
    setSelectedVideo(videoUrl)
  }

  const closeVideo = () => {
    setSelectedVideo(null)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex justify-between items-start my-10">
        <div>
          <h2 className="text-2xl font-bold mb-2">Live Fashion Streams</h2>
          <p className="text-sm text-gray-700">Watch all our live fashion coverage</p>
        </div>
        <div className="max-w-xs text-sm text-gray-700">
          Of type and scrambled it to make a type <br /> Specimen book. It has survived not only <br /> Five centuries,
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {fashionStreams.map((stream) => (
          <div
            key={stream.id}
            className="relative rounded-lg overflow-hidden cursor-pointer"
            onClick={() => openVideo(stream.videoUrl)}
          >
            <div className="aspect-[3/4] relative">
              <Image src={stream.thumbnail || "/placeholder.svg"} alt={stream.title} fill className="object-cover" />
              <div className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                LIVE
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white bg-opacity-80 rounded-full p-2 shadow-md">
                  <BsPlay className="h-6 w-6 text-red-600 fill-red-600" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5 text-center">
                <h3 className="text-md font-normal text-white">{stream.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedVideo && <VideoModal videoUrl={selectedVideo} onClose={closeVideo} />}
    </div>
  )
}


