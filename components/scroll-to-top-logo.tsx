"use client"

import { Film } from "lucide-react"

export function ScrollToTopLogo() {
  return (
    <div
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="inline-flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
    >
      <Film className="w-7 h-7 text-blue-500 -mt-[2px]" />
      <span className="font-bebas text-[28px] leading-none mt-[2px]">FLUX CASTING</span>
    </div>
  )
}

