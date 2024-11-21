"'use client'"

import { Switch } from "@/components/ui/switch"
import { Card, CardContent } from "@/components/ui/card"
import { Info } from "lucide-react"

export function MediaPlayer() {
  return (
    <div className="dark">
      <Card className="w-full max-w-sm bg-zinc-900 text-white">
        <CardContent className="p-4 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-medium">The Wolf of Wall Street</h2>
              <Info className="w-4 h-4 text-zinc-400" />
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-sm text-zinc-400">Spoiler</span>
              <Switch />
              <span className="text-sm text-zinc-400">Off</span>
            </div>
          </div>
          
          <div className="text-sm text-zinc-400">
            Episode 10 Released on 10/17
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-pink-500">★</span>
            <span className="font-medium">8.2/10</span>
            <div className="w-4 h-4 bg-blue-500 rounded-sm" />
          </div>
          
          <div className="grid gap-2 text-sm">
            <div className="flex items-center justify-between">
              <span>😂 15%</span>
              <div className="w-[15%] h-1 bg-zinc-700 rounded-full" />
            </div>
            <div className="flex items-center justify-between">
              <span>😮 20%</span>
              <div className="w-[20%] h-1 bg-zinc-700 rounded-full" />
            </div>
            <div className="flex items-center justify-between">
              <span>😢 20%</span>
              <div className="w-[20%] h-1 bg-zinc-700 rounded-full" />
            </div>
            <div className="flex items-center justify-between">
              <span>😡 45%</span>
              <div className="w-[45%] h-1 bg-zinc-700 rounded-full" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}