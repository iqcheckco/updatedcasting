import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import { Mail } from "lucide-react"

export default function HarryPotterCastingPage() {
  return (
    <div className="min-h-screen bg-neutral-900 text-neutral-900 font-inter">
      <SiteHeader />

      <main className="py-6 bg-white">
        <div className="max-w-3xl mx-auto px-4 py-8 bg-white rounded-lg">
          <div className="space-y-8">
            {/* Header */}
            <div className="text-center">
              <h1 className="font-bebas text-3xl md:text-4xl mb-2">Harry Potter [HBO]︱NEW CASTING [STEP 1/3]</h1>
            </div>

            {/* Main Content */}
            <div className="space-y-6 text-neutral-700">
              <p className="text-justify">
                The HBO production team for Harry Potter requires all selected extras to complete a brief online course.
                This course is administered by a third-party chosen by the production company.
              </p>

              <p className="text-justify">
                Our contract with the production company mandates us to have all castings undertake this step before
                proceeding any further.
              </p>

              <div className="bg-neutral-50 p-6 rounded-lg space-y-4">
                <p className="text-justify">
                  <span className="font-semibold">Duration:</span> The training course is brief and should only take
                  roughly 20 minutes to complete.
                </p>
                <p className="text-justify">
                  <span className="font-semibold">Certificate:</span> After successful completion, you will instantly
                  receive a PDF certificate.
                </p>
              </div>

              {/* Certificate Submission Instructions */}
              <div className="border-t border-b border-neutral-200 py-6 space-y-4">
                <p className="font-semibold">Once you've received your certificate, please send it to:</p>
                <div className="flex items-center gap-2 bg-blue-50 p-4 rounded-md">
                  <Mail className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <div>
                    <p className="text-blue-600">certification@fluxcasting.com</p>
                  </div>
                </div>
                <div className="text-sm space-y-2">
                  <p className="text-justify">
                    <span className="font-medium">Important:</span> Please be sure to include your unique application
                    reference number in the subject line of the email. This reference number can be found in any
                    previous email correspondence you've had with us.
                  </p>
                  <p className="text-justify">
                    There is a £12 fee to take the course and have your certificate issued. This fee will be reimbursed
                    to you by the production company within your first payment as an extra.
                  </p>
                </div>
              </div>

              {/* Next Steps */}
              <div className="bg-green-50 p-6 rounded-lg">
                <p className="text-justify">
                  Once we've received your certificate we can proceed to the next steps and finalise your casting as
                  soon as possible.
                </p>
              </div>

              {/* Training Button */}
              <div className="pt-4">
                <a
                  href="https://60azjz-3w.myshopify.com/products/course"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full bg-[#3B82F6] hover:bg-[#3B82F6]/90 text-white px-10 py-3 text-xl font-bebas tracking-normal transition-colors shadow-lg rounded-md text-center"
                >
                  Go To Training
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}

