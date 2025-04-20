"use client"
import type React from "react"
import { useState } from "react"
import { Button } from "./ui/button"
import { CircleAlert, Send, ThumbsDown, ThumbsUp } from "lucide-react"

interface WriteReviewProps {
  onSubmit: (content: string, reaction?: string) => void
}

const WriteReviewCard: React.FC<WriteReviewProps> = ({ onSubmit }) => {
  const [content, setContent] = useState("")
  const [selectedReaction, setSelectedReaction] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (content.trim()) {
      onSubmit(content, selectedReaction || undefined)
      setContent("")
      setSelectedReaction(null)
    }
  }

  return (
    <div className="bg-[#141421] py-2 px-4 rounded-lg min-w-[350px]">
      <div className="flex items-center mb-2">
        <div className="w-10 h-10 bg-gray-600 rounded-full mr-3"></div>
        <div>
          <h4 className="text-gray-200 font-medium">Your Name</h4>
          <p className="text-gray-400 text-sm">Write a review</p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Write your review here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full  bg-gray-700 border border-[#303030] rounded px-3  text-gray-200 focus:outline-none focus:border-[#505050] resize-none "
          required
        />

       

        <div className="flex text-[#BCBCBC] text-xs gap-2 mb- flex-wrap">
          <div
            className={`flex items-center cursor-pointer px-2 py-2 rounded-md ${selectedReaction === "Funniest" ? "bg-[#FFFFFF26]" : ""}`}
            onClick={() => setSelectedReaction(selectedReaction === "Funniest" ? null : "Funniest")}
          >
            Funniest 😂
          </div>
          <div
            className={`flex items-center cursor-pointer px-2 py-2 rounded-md ${selectedReaction === "Most Interesting" ? "bg-[#FFFFFF26]" : ""}`}
            onClick={() => setSelectedReaction(selectedReaction === "Most Interesting" ? null : "Most Interesting")}
          >
            Most Interesting 🤔
          </div>
          <div
            className={`flex items-center cursor-pointer px-2 py-2 rounded-md ${selectedReaction === "Most Rage Inducing" ? "bg-[#FFFFFF26]" : ""}`}
            onClick={() => setSelectedReaction(selectedReaction === "Most Rage Inducing" ? null : "Most Rage Inducing")}
          >
            Most Rage Inducing 😠
          </div>
          <div
            className={`flex items-center cursor-pointer px-2 py-2 rounded-md ${selectedReaction === "Saddest" ? "bg-[#FFFFFF26]" : ""}`}
            onClick={() => setSelectedReaction(selectedReaction === "Saddest" ? null : "Saddest")}
          >
            Saddest 😢
          </div>
        </div>

        <Button
          type="submit"
          className="px-10 py-1 justify-self-center bg-gray-500 text-white rounded-full hover:bg-blue-600 flex items-center space-x-2"
        >
           <Send className="w-4 h-4" />
          Submit
        </Button>
       
      </form>
    </div>
  )
}

export default WriteReviewCard
