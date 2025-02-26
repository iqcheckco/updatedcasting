import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 font-inter">
      <SiteHeader />

      <main className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="font-bebas text-3xl md:text-4xl mb-8">Privacy Policy</h1>

        <div className="space-y-6 text-neutral-600">
          <section>
            <h2 className="text-xl font-semibold text-neutral-900 mb-4">1. Information We Collect</h2>
            <p>We collect information that you provide directly to us, including:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Name and contact information</li>
              <li>Date of birth and nationality</li>
              <li>Physical attributes and measurements</li>
              <li>Photos and videos</li>
              <li>Work eligibility documentation</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900 mb-4">2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Process your registration</li>
              <li>Match you with suitable casting opportunities</li>
              <li>Communicate with you about bookings</li>
              <li>Process payments</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900 mb-4">3. Information Sharing</h2>
            <p>We may share your information with:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Production companies for casting purposes</li>
              <li>Payment processors for handling payments</li>
              <li>Legal authorities when required by law</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900 mb-4">4. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information from unauthorized access,
              alteration, or disclosure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900 mb-4">5. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Object to processing of your information</li>
              <li>Request data portability</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-neutral-900 mb-4">6. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:{" "}
              <a href="mailto:privacy@fluxcasting.com" className="text-blue-600 hover:underline">
                privacy@fluxcasting.com
              </a>
            </p>
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}

