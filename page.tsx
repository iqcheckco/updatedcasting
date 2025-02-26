import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Film, Users, Network, Shield, Sparkles } from "lucide-react"
import Link from "next/link"
import { bebasNeue, inter } from "./fonts"

export default function Page() {
  return (
    <div className={`min-h-screen bg-black text-white ${bebasNeue.variable} ${inter.variable} font-inter`}>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/placeholder.svg"
              alt="Limelight Casting Logo"
              width={180}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
              About Us
            </Link>
            <Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
              Services
            </Link>
            <Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
              Projects
            </Link>
            <Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
              Contact
            </Link>
            <Button className="bg-blue-600 hover:bg-blue-700 font-bebas text-lg">Become an Extra</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative h-[60vh] flex items-center justify-center text-center pt-20"
        style={{
          backgroundImage: `url(${encodeURI("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SC%20-%20Home-1.png-ES3kvaVet0Yi3iHweMgZSA5tyRvvse.jpeg")})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="font-bebas text-5xl md:text-6xl lg:text-7xl tracking-wide mb-4">
            THE LEADING CASTING AGENCY FOR
          </h1>
          <h2 className="font-bebas text-4xl md:text-5xl lg:text-6xl">BACKGROUND ARTISTS & EXTRAS</h2>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-neutral-900 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="font-bebas text-2xl tracking-wide mb-8 text-center">INTERESTED IN BECOMING A PAID EXTRA?</h3>
          <div className="grid gap-6">
            <div className="flex items-start gap-3">
              <Film className="w-6 h-6 mt-1 text-blue-500" />
              <div>
                <p className="font-semibold">Exciting Opportunities</p>
                <p className="text-gray-400">Work on various productions, from blockbusters to dramas.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Users className="w-6 h-6 mt-1 text-blue-500" />
              <div>
                <p className="font-semibold">Flexibility</p>
                <p className="text-gray-400">Choose gigs to fit your schedule and experience level.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Network className="w-6 h-6 mt-1 text-blue-500" />
              <div>
                <p className="font-semibold">Networking</p>
                <p className="text-gray-400">Connect with industry pros and fellow artists.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Shield className="w-6 h-6 mt-1 text-blue-500" />
              <div>
                <p className="font-semibold">Professional Support</p>
                <p className="text-gray-400">Guidance from our dedicated team.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Sparkles className="w-6 h-6 mt-1 text-blue-500" />
              <div>
                <p className="font-semibold">Fun & Creativity</p>
                <p className="text-gray-400">Give life to diverse roles and characters.</p>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-md">
              APPLY HERE TO BECOME AN EXTRA
            </Button>
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="bg-black py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="font-bebas text-2xl tracking-wide mb-8 text-center">OUR RECENT PROJECTS</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Image
              src="/placeholder.svg"
              alt="Dune Movie Poster"
              width={300}
              height={450}
              className="w-full rounded-lg"
            />
            <Image src="/placeholder.svg" alt="Movie Poster" width={300} height={450} className="w-full rounded-lg" />
            <Image
              src="/placeholder.svg"
              alt="Wonka Movie Poster"
              width={300}
              height={450}
              className="w-full rounded-lg"
            />
            <Image src="/placeholder.svg" alt="Movie Poster" width={300} height={450} className="w-full rounded-lg" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-neutral-900 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="font-bebas text-2xl tracking-wide mb-6 text-center">LET US STREAMLINE YOUR CASTING NEEDS</h3>
          <p className="text-gray-400 text-center mb-8">
            Are you in need of reliable and talented extras to bring your scenes to life? Look no further! Limelight
            Casting specializes in providing top-notch extras for a wide range of productions, from film and television
            to commercials and music videos.
          </p>
          <p className="text-gray-400 text-center">
            With a diverse pool of talent and a passion for excellence, we're committed to meeting the unique needs of
            your project. Whether you require background actors for a period drama, a bustling city scene, or a
            futuristic sci-fi adventure, we've got you covered.
          </p>
          <div className="mt-8 text-center">
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
              GET IN TOUCH
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-black py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="font-bebas text-2xl tracking-wide mb-8 text-center">WHY CHOOSE US?</h3>
          <div className="grid gap-6">
            <div>
              <h4 className="font-semibold mb-2">Quality Assurance</h4>
              <p className="text-gray-400">
                We meticulously select our extras to ensure professionalism, versatility, and authenticity on set.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Efficiency</h4>
              <p className="text-gray-400">
                Our streamlined casting process makes finding the right extras quick and hassle-free, saving you time
                and resources.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Flexibility</h4>
              <p className="text-gray-400">
                Whether you need a handful of extras or a crowd scene, we can scale our services to match the scope of
                your production.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Dedicated Support</h4>
              <p className="text-gray-400">
                From initial consultation to wrap, our team provides personalized assistance every step of the way,
                ensuring a seamless experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-neutral-900 py-16">
        <div className="max-w-2xl mx-auto px-4">
          <h3 className="font-bebas text-2xl tracking-wide mb-8 text-center">LET'S GET IN TOUCH</h3>
          <form className="grid gap-6">
            <div>
              <label className="block mb-2">Company/Studio*</label>
              <Input className="bg-neutral-800 border-neutral-700" />
            </div>
            <div>
              <label className="block mb-2">Your Name*</label>
              <Input className="bg-neutral-800 border-neutral-700" />
            </div>
            <div>
              <label className="block mb-2">Business Email*</label>
              <Input className="bg-neutral-800 border-neutral-700" type="email" />
            </div>
            <div>
              <label className="block mb-2">Project Details*</label>
              <Textarea className="bg-neutral-800 border-neutral-700" rows={4} />
            </div>
            <Button className="bg-neutral-800 hover:bg-neutral-700 text-white">SUBMIT PROJECT INQUIRY</Button>
          </form>
        </div>
      </section>

      {/* Clients */}
      <section className="bg-black py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="font-bebas text-2xl tracking-wide mb-8 text-center">THIS YEAR WE'VE PROUDLY CASTED FOR</h3>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-8 items-center justify-items-center">
            <div className="text-2xl font-bold">MARVEL</div>
            <div className="text-2xl font-bold">NETFLIX</div>
            <div className="text-2xl font-bold">UNIVERSAL</div>
            <div className="text-2xl font-bold">DISNEY</div>
            <div className="text-2xl font-bold">AMAZON</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Image src="/placeholder.svg" alt="Limelight Casting Logo" width={200} height={50} className="mx-auto mb-4" />
          <p className="text-gray-400 mb-2">Limelight Casting, 5255 W Sunset Blvd,</p>
          <p className="text-gray-400 mb-4">West Hollywood, CA 90028, USA</p>
          <p className="text-gray-400 mb-2">hello@limelightcasting.com</p>
          <p className="text-gray-400 mb-8">1 800 555 5755</p>
          <div className="flex justify-center gap-4 text-sm text-gray-400">
            <a href="#" className="hover:text-white">
              TERMS
            </a>
            <a href="#" className="hover:text-white">
              PRIVACY
            </a>
            <a href="#" className="hover:text-white">
              CONTACT
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

