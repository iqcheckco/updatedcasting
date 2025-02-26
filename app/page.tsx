import Image from "next/image"
import { Film } from "lucide-react"
import Link from "next/link"

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white font-inter">
      {/* Header */}
      <header className="bg-neutral-900 backdrop-blur-sm border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 h-16 md:h-20 flex items-center justify-center">
          <Link href="/" className="inline-flex items-center gap-2 mt-[2px]">
            <Film className="w-7 h-7 text-blue-500 -mt-[2px]" />
            <span className="font-bebas text-[28px] leading-none mt-[2px]">FLUX CASTING</span>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative h-[60vh] md:h-[75vh] flex items-center justify-center text-center"
        style={{
          backgroundImage: `url(${encodeURI("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images-3-wuiCY3EoGd62hYkwSB1rJp8S9ajxdx.png")})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <div className="flex flex-col gap-1 leading-tight md:leading-normal [text-shadow:_0_1px_12px_rgb(0_0_0_/_90%)]">
            <h1 className="font-bebas text-3xl md:text-4xl lg:text-5xl tracking-normal leading-tight">
              THE LEADING CASTING AGENCY FOR
            </h1>
            <h2 className="font-bebas text-3xl md:text-4xl lg:text-5xl tracking-normal leading-tight">
              BACKGROUND ARTISTS & EXTRAS
            </h2>
          </div>
        </div>
        {/* Logo container */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 w-full max-w-[160px] px-4">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gOWf4IYBP2m1Q7dhbQJkwxH714x-XQvxUcNWaGIHlAvftZPNcPu6rjfnqQ.png"
            alt="Dune Part Two"
            width={200}
            height={50}
            className="w-full h-auto"
            priority
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-neutral-900">
        <div className="bg-white w-full flex flex-col items-center py-6">
          <Link href="/apply">
            <button className="bg-[#3B82F6] hover:bg-[#3B82F6]/90 text-white px-10 py-3 text-xl font-bebas tracking-normal transition-colors shadow-lg rounded-md">
              APPLY HERE TO BECOME AN EXTRA
            </button>
          </Link>
        </div>
        <div className="max-w-2xl mx-auto px-4 py-8">
          <h3 className="font-bebas text-2xl tracking-normal mb-8 text-center">INTERESTED IN BECOMING A PAID EXTRA?</h3>
          <ul className="list-disc text-white space-y-4 pl-5 text-justify">
            <li>Work on various top productions</li>
            <li>Choose gigs to fit your schedule</li>
            <li>Connect with industry professionals</li>
            <li>Receive guidance from our team</li>
            <li>Earn up to £80 per day with perks</li>
            <li>Get the opportunity to travel for free</li>
          </ul>
        </div>
        <div className="bg-white w-full flex flex-col items-center py-6">
          <h3 className="font-bebas text-2xl tracking-normal text-center text-black leading-none">
            READY TO SHINE? APPLY IN 5 MINUTES
          </h3>
          <Link href="/apply">
            <button className="bg-[#3B82F6] hover:bg-[#3B82F6]/90 text-white mt-4 px-10 py-3 text-xl font-bebas tracking-normal transition-colors shadow-lg rounded-md">
              APPLY HERE TO BECOME AN EXTRA
            </button>
          </Link>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="bg-neutral-900 pt-12 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="font-bebas text-2xl tracking-normal mb-6 text-center mt-[-10px]">OUR MOST RECENT PROJECTS</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vYEyxF1UT779RiEalpMjUT6kfdf.jpg-YMNyyD5zVJEiiB8ZZNinnDavgHAyQL.jpeg"
              alt="Conclave Movie Poster"
              width={300}
              height={450}
              className="w-full rounded-lg hover:opacity-80 transition-opacity"
            />
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2E1x1qcHqGZcYuYi4PzVZjzg8IV.jpg-0HJHUilpA4qJQNwaEPobYFHIyfQs5S.jpeg"
              alt="Wicked Movie Poster"
              width={300}
              height={450}
              className="w-full rounded-lg hover:opacity-80 transition-opacity"
            />
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pzIddUEMWhWzfvLI3TwxUG2wGoi.jpg-pkUN7EGzhFYhsIbpSAumu7dxk7CPMh.jpeg"
              alt="Captain America: Brave New World Movie Poster"
              width={300}
              height={450}
              className="w-full rounded-lg hover:opacity-80 transition-opacity"
            />
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Apple_TV_Slow_Horses_113023.png-rNoKzBJTcZO1cYIlaC2qxlqF3YzDia.jpeg"
              alt="Slow Horses TV Series Poster"
              width={300}
              height={450}
              className="w-full rounded-lg hover:opacity-80 transition-opacity"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="font-bebas text-2xl tracking-normal mb-6 text-center text-[#171717]">PRODUCTION COMPANY?</h3>
          <p className="text-[#171717] text-justify md:text-center mb-4">
            Flux Casting specialises in providing top-notch extras for a wide range of productions, from film and
            television to commercials and music videos.
          </p>
          <p className="text-[#171717] text-justify md:text-center mb-4">
            With a diverse pool of talent and a passion for excellence, we're committed to meeting the unique needs of
            your project.
          </p>
          <p className="text-[#171717] text-justify md:text-center mb-4">
            Whether you require background actors for a period drama, a bustling city scene, or a futuristic sci-fi
            adventure, we've got you covered.
          </p>
          <div className="mt-8 text-center">
            <button className="bg-[#3B82F6] hover:bg-[#3B82F6]/90 text-white mt-4 px-10 py-3 text-xl font-bebas tracking-normal transition-colors shadow-lg rounded-md">
              GET IN TOUCH
            </button>
          </div>
        </div>
      </section>

      {/* Hero Duplicate */}
      <section
        className="relative h-[60vh] md:h-[75vh] flex items-center justify-center text-center"
        style={{
          backgroundImage: `url(${encodeURI("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8028352026473136-Ojk2gPyqA6dETxRBXBACWDQ1dyamDg.webp")})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 w-full max-w-[150px] px-4">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gladiator_II.svg-Hjrt7OStX3u0Ypdk0sgQVDjfoCMiV9.png"
            alt="Gladiator II"
            width={120}
            height={30}
            className="w-full h-auto"
            priority
          />
        </div>
      </section>

      {/* Clients */}
      <section className="bg-white pt-12 pb-8">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="font-bebas text-2xl tracking-normal mb-4 text-center text-neutral-900">
            THIS YEAR WE'VE PROUDLY CASTED FOR
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 items-center justify-items-center">
            <div className="w-full max-w-[120px]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/marvel-2k2XEnLvIpo8M7G0h8FZC8qGdeMuAq.png"
                alt="Marvel Studios"
                width={200}
                height={80}
                className="w-full h-auto"
              />
            </div>
            <div className="w-full max-w-[120px]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/netflix-71vdRjjCeeVyJQ17InXdSI8AVrWQ9A.png"
                alt="Netflix"
                width={200}
                height={80}
                className="w-full h-auto"
              />
            </div>
            <div className="w-full max-w-[120px]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/disney-nuJV3fNjjOYHRFGuqOgNagbs2eVWUl.png"
                alt="Disney"
                width={200}
                height={80}
                className="w-full h-auto"
              />
            </div>
            <div className="w-full max-w-[100px]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hbo-3QkqwKslmjsIP6A3mG4SCpqJy7iRKV.png"
                alt="HBO"
                width={200}
                height={80}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
    </div>
  )
}

