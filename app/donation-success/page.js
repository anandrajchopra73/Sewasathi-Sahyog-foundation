import { CheckCircle, ArrowLeft, Heart } from "lucide-react"
import Link from "next/link"

export default function DonationSuccess() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="mb-6">
          <CheckCircle className="mx-auto text-green-500 mb-4" size={64} />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h1>
          <p className="text-gray-600">Your donation has been processed successfully.</p>
        </div>

        <div className="bg-egg-nog/30 rounded-lg p-4 mb-6">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <Heart className="text-copper" size={20} />
            <span className="font-semibold text-gray-900">Your Impact</span>
          </div>
          <p className="text-sm text-gray-600">
            Your generous contribution will directly support our mission to provide education, healthcare, and essential
            resources to those who need it most.
          </p>
        </div>

        <div className="space-y-3">
          <p className="text-sm text-gray-500">
            A receipt has been sent to your email address. Your donation is tax-deductible.
          </p>

          <Link
            href="/"
            className="inline-flex items-center space-x-2 bg-copper hover:bg-garnet text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
          >
            <ArrowLeft size={18} />
            <span>Return to Home</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
