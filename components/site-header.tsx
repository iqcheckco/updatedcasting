"use client"

import Link from "next/link"
import { Film } from "lucide-react"

export default function SiteHeader() {
  return (
    <header className="bg-neutral-900 backdrop-blur-sm border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 h-16 md:h-20 flex items-center justify-center">
        <Link href="/" className="inline-flex items-center gap-2 mt-[2px]">
          <Film className="w-7 h-7 text-blue-500 -mt-[2px]" />
          <span className="font-bebas text-[28px] leading-none mt-[2px] text-white">FLUX CASTING</span>
        </Link>
      </div>
    </header>
  )
}

