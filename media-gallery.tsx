import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"

export default function MediaGallery() {
  return (
    <div className="w-full bg-black min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center gap-4 mb-6">
          <h2 className="text-sm font-medium">• Media</h2>
          <Tabs defaultValue="popular" className="w-full">
            <TabsList className="bg-transparent border-b border-neutral-800 w-full justify-start h-auto p-0 gap-6">
              <TabsTrigger
                value="popular"
                className="text-sm px-0 py-2 rounded-none border-b-2 border-transparent data-[state=active]:border-white data-[state=active]:text-white text-neutral-400 h-auto bg-transparent"
              >
                Most Popular
              </TabsTrigger>
              <TabsTrigger
                value="videos"
                className="text-sm px-0 py-2 rounded-none border-b-2 border-transparent data-[state=active]:border-white data-[state=active]:text-white text-neutral-400 h-auto bg-transparent"
              >
                Videos
              </TabsTrigger>
              <TabsTrigger
                value="backdrops"
                className="text-sm px-0 py-2 rounded-none border-b-2 border-transparent data-[state=active]:border-white data-[state=active]:text-white text-neutral-400 h-auto bg-transparent"
              >
                Backdrops
              </TabsTrigger>
              <TabsTrigger
                value="posters"
                className="text-sm px-0 py-2 rounded-none border-b-2 border-transparent data-[state=active]:border-white data-[state=active]:text-white text-neutral-400 h-auto bg-transparent"
              >
                Posters
              </TabsTrigger>
            </TabsList>
          </Tabs>
          <button className="text-sm text-neutral-400 hover:text-white transition-colors">Edit</button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="relative aspect-[3/2] overflow-hidden rounded-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-fxfMmP8NsOtZXkHlEjRcJdZ262lDFc.png"
                alt="Media gallery image"
                fill
                className="object-cover hover:opacity-75 transition-opacity cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

