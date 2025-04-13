"use client"

import type React from "react"

import { useRef, useState } from "react"
import Image from "next/image"

export default function SeriesCast() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  const castMembers = [
    {
      name: "Charlie Day",
      character: "Charlie Kelly",
      episodes: 169,
      image: "/other/actor2.webp",
    },
    {
      name: "Glenn Howerton",
      character: "Dennis Reynolds",
      episodes: 169,
      image: "/other/actor1.webp",
    },
    {
      name: "Rob McElhenney",
      character: "Ronald 'Mac' McDonald",
      episodes: 169,
      image: "/other/actor3.webp",
    },
    {
      name: "Kaitlin Olson",
      character: "Deandra 'Dee' Reynolds",
      episodes: 169,
      image: "/other/actor4.webp",
    },
    {
      name: "Danny DeVito",
      character: "Frank Reynolds",
      episodes: 162,
      image: "/other/actor5.webp",
    },
    {
      name: "Artemis Pebdani",
      character: "Artemis",
      episodes: 17,
      image: "/other/actor2.webp",
    },
    {
      name: "Sandy Martin",
      character: "Mac's Mom, Mrs. Mac",
      episodes: 16,
      image: "/other/actor1.webp",
    },
  ]

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return

    setIsDragging(true)
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft)
    setScrollLeft(scrollContainerRef.current.scrollLeft)

    // Change cursor style
    document.body.style.cursor = "grabbing"
  }

  const handleMouseUp = () => {
    setIsDragging(false)
    // Reset cursor style
    document.body.style.cursor = "default"
  }

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false)
      // Reset cursor style
      document.body.style.cursor = "default"
    }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return

    e.preventDefault()
    const x = e.pageX - scrollContainerRef.current.offsetLeft
    const walk = (x - startX) * 2 // Scroll speed multiplier
    scrollContainerRef.current.scrollLeft = scrollLeft - walk
  }

  // Touch events for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!scrollContainerRef.current) return

    setIsDragging(true)
    setStartX(e.touches[0].pageX - scrollContainerRef.current.offsetLeft)
    setScrollLeft(scrollContainerRef.current.scrollLeft)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !scrollContainerRef.current) return

    const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft
    const walk = (x - startX) * 2
    scrollContainerRef.current.scrollLeft = scrollLeft - walk
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  return (
    <div className=" text-white  py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto pb-6 scrollbar-hide cursor-grab"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {castMembers.map((member, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[220px] bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-amber-400/20 transition-shadow duration-300 mr-4"
            >
              <div className="relative h-64 w-full">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              <div className="p-4">
                <h2 className="font-bold text-lg text-amber-400">{member.name}</h2>
                <p className="text-gray-300">{member.character}</p>
                <p className="text-gray-400 text-sm mt-2">{member.episodes} Episodes</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 text-center text-gray-400">
          <p className="text-sm">Drag to scroll →</p>
        </div>
      </div>
    </div>
  )
}
