"use client"

import { Film } from "lucide-react"
import Link from "next/link"

export default function SiteFooter() {
  return (
    <footer className="bg-neutral-900 py-8">
      <div className="max-w-4xl mx-auto px-4 text-center text-white font-inter">
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2">
            <Film className="w-7 h-7 text-blue-500 -mt-[2px]" />
            <span className="font-bebas text-[28px] leading-none mt-[2px]">FLUX CASTING</span>
          </div>
        </div>
        <p className="text-sm mb-2">Flux Casting︱22 Upper Woburn Place</p>
        <p className="text-sm mb-2">Bloomsbury︱London</p>
        <p className="text-sm mb-4">WC1H 0HW︱United Kingdom</p>
        <div className="flex items-center justify-center gap-2 mb-8">
          <a href="mailto:hello@fluxcasting.com" className="text-sm hover:opacity-70 transition-opacity">
            hello@fluxcasting.com
          </a>
        </div>
        <div className="flex justify-center gap-4 text-sm mb-8">
          <Link href="/terms" className="hover:opacity-70 transition-opacity underline">
            Terms
          </Link>
          <Link href="/privacy" className="hover:opacity-70 transition-opacity underline">
            Privacy
          </Link>
          <a href="mailto:press@fluxcasting.com" className="hover:opacity-70 transition-opacity underline">
            Press
          </a>
          <a href="mailto:hello@fluxcasting.com" className="hover:opacity-70 transition-opacity underline">
            Contact
          </a>
        </div>
        <p className="text-xs text-white mt-8">© 2025︱Flux Casting︱All Rights Reserved</p>
      </div>
    </footer>
  )
}

