import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 font-inter">
      <SiteHeader />

      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="font-bebas text-3xl md:text-4xl mb-8">Terms and Conditions</h1>

        <div className="space-y-6 text-neutral-600">
          <section>
            <h2 className="text-xl font-semibold text-neutral-900 mb-4">1. Introduction</h2>
            <p>
              Welcome to Flux Casting. These terms and conditions outline the rules and regulations for the use of our
              services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900 mb-4">2. Services</h2>
            <p>
              Flux Casting provides casting services for background artists and extras in film, television, and other
              media productions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900 mb-4">3. Registration</h2>
            <p>By registering with Flux Casting, you warrant that:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>You are at least 18 years of age</li>
              <li>The information you provide is accurate and complete</li>
              <li>You have the right to work in the United Kingdom</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900 mb-4">4. Bookings and Payments</h2>
            <p>
              All bookings are subject to availability and confirmation. Payment terms and rates will be clearly
              communicated for each booking.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900 mb-4">5. Cancellations</h2>
            <p>
              Cancellation policies vary by production. Specific terms will be provided with each booking confirmation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900 mb-4">6. Confidentiality</h2>
            <p>
              You agree to maintain strict confidentiality regarding all production details, including but not limited
              to plot details, casting information, and production locations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900 mb-4">7. Changes to Terms</h2>
            <p>
              Flux Casting reserves the right to modify these terms at any time. Changes will be effective immediately
              upon posting to our website.
            </p>
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}

