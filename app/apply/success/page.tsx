import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import { CheckCircle } from "lucide-react"

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-neutral-900 text-neutral-900 font-inter">
      <SiteHeader />

      <main className="py-6 bg-white">
        <div className="max-w-3xl mx-auto px-4 py-8 bg-white rounded-lg text-center">
          <div className="flex justify-center mb-6">
            <CheckCircle className="w-20 h-20 text-green-500" />
          </div>

          <h1 className="font-bebas text-3xl md:text-4xl mb-6">APPLICATION SUCCESSFULLY SUBMITTED</h1>

          <div className="space-y-4 text-neutral-700 max-w-2xl mx-auto text-justify md:text-center">
            <p>
              You'll receive a confirmation email that includes your unique application reference ID, please keep this
              well noted.
            </p>

            <p>The email also includes some of the productions we are currently casting for.</p>

            <p>
              In the meantime one of our our in-house talent agents will review your application and get back to you
              within 48 hours.
            </p>

            <p>
              We'd like to thank you again for taking this enormous step - this could be the start of something
              incredibly special!
            </p>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}

