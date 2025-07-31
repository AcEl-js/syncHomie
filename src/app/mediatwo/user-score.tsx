"use client"

import { useState, useEffect } from "react"
interface ScoreInteface{
    emotion?: string | null | undefined;
}

export default function UserScore( {emotion}:ScoreInteface) {
  const [score, setScore] = useState(0)

  // Animate the score on load
  useEffect(() => {
    const targetScore = 83
    const duration = 1500
    const startTime = Date.now()

    const animateScore = () => {
      const currentTime = Date.now()
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      setScore(Math.floor(targetScore * progress))

      if (progress < 1) {
        requestAnimationFrame(animateScore)
      }
    }

    requestAnimationFrame(animateScore)
  }, [])

  // Calculate the circle's stroke-dashoffset based on the score
  const radius = 40
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (score / 100) * circumference

  return (
    <div className="flex items-center gap-3 rounded-lg w-fit">
      <div className="relative w-20 h-20 flex items-center justify-center">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          {/* Background circle */}
          <circle cx="50" cy="50" r={radius} fill="transparent" stroke="#2a2a2a" strokeWidth="10" />
          {/* Progress circle */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="transparent"
            stroke="#10b981"
            strokeWidth="10"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white text-2xl font-bold ">
            {score}
            <sup className="text-xs">%</sup>
          </span>
        </div>
      </div>
      <div className="flex items-center gap-2">
      <div className="text-sm">
              <div>User</div>
              <div>Score</div>
            </div>
        <span className="text-2xl bg-slate-800 p-1 rounded-full" role="img" aria-label="laughing emoji">
          {emotion ? emotion :"😂"}
        </span>
      </div>
    </div>
  )
}
