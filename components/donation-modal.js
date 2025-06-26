"use client"

import { useState, useEffect } from "react"

export default function DonationModal({ isOpen, onClose }) {
  const [selectedAmount, setSelectedAmount] = useState(50)
  const [customAmount, setCustomAmount] = useState("")
  const [donationType, setDonationType] = useState("general")
  const [showPayment, setShowPayment] = useState(false)
  const [stripeConfigured, setStripeConfigured] = useState(true)
  const [loading, setLoading] = useState(true)

  const predefinedAmounts = [25, 50, 100, 250, 500]
  const donationTypes = [
    { value: "general", label: "General Fund", description: "Support our overall mission" },
    { value: "education", label: "Education Programs", description: "Fund educational initiatives" },
    { value: "healthcare", label: "Healthcare Services", description: "Support healthcare programs" },
    { value: "emergency", label: "Emergency Relief", description: "Help with urgent needs" },
  ]

  useEffect(() => {
    if (isOpen) {
      setLoading(false)
    }
  }, [isOpen])

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount)
    setCustomAmount("")
  }

  const handleCustomAmountChange = (e) => {
    const value = e.target.value
    setCustomAmount(value)
    if (value) {
      setSelectedAmount(Number.parseFloat(value))
    }
  }

  const handleProceedToPayment = () => {
    if (selectedAmount > 0) {
      setShowPayment(true)
    }
  }

  const handlePaymentSuccess = () => {
    alert("Thank you for your generous donation! Your support makes a real difference.")
    onClose()
    setShowPayment(false)
    setSelectedAmount(50)
    setCustomAmount("")
    setDonationType("general")
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center space-x-3">
              <span className="text-copper text-2xl">❤️</span>
              <h2 className="text-2xl font-bold text-gray-900">Make a Donation</h2>
            </div>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
              <span className="text-2xl">✕</span>
            </button>
          </div>

          {loading ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-copper mx-auto"></div>
              <p className="mt-2 text-gray-600">Loading...</p>
            </div>
          ) : !showPayment ? (
            <>
              {/* Donation Type Selection */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Choose Donation Type</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {donationTypes.map((type) => (
                    <button
                      key={type.value}
                      onClick={() => setDonationType(type.value)}
                      className={`p-4 rounded-lg border-2 text-left transition-colors ${
                        donationType === type.value
                          ? "border-copper bg-copper/5"
                          : "border-gray-200 hover:border-copper/50"
                      }`}
                    >
                      <div className="font-medium text-gray-900">{type.label}</div>
                      <div className="text-sm text-gray-600">{type.description}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Amount Selection */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Select Amount</h3>
                <div className="grid grid-cols-3 md:grid-cols-5 gap-3 mb-4">
                  {predefinedAmounts.map((amount) => (
                    <button
                      key={amount}
                      onClick={() => handleAmountSelect(amount)}
                      className={`py-3 px-4 rounded-lg border-2 font-semibold transition-colors ${
                        selectedAmount === amount && !customAmount
                          ? "border-copper bg-copper text-white"
                          : "border-gray-200 text-gray-700 hover:border-copper"
                      }`}
                    >
                      ${amount}
                    </button>
                  ))}
                </div>

                {/* Custom Amount */}
                <div>
                  <label htmlFor="customAmount" className="block text-sm font-medium text-gray-700 mb-2">
                    Or enter custom amount
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                    <input
                      type="number"
                      id="customAmount"
                      value={customAmount}
                      onChange={handleCustomAmountChange}
                      placeholder="0.00"
                      min="1"
                      step="0.01"
                      className="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-copper focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Impact Statement */}
              <div className="bg-egg-nog/30 rounded-lg p-4 mb-6">
                <h4 className="font-semibold text-gray-900 mb-2">Your Impact</h4>
                <p className="text-gray-600 text-sm">
                  ${selectedAmount} can provide educational materials for 5 children, fund a week of healthcare
                  services, or support emergency relief for a family in need.
                </p>
              </div>

              {/* Proceed Button */}
              <button
                onClick={handleProceedToPayment}
                disabled={!selectedAmount || selectedAmount <= 0}
                className="w-full bg-copper hover:bg-garnet disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>💳</span>
                <span>Proceed to Payment - ${selectedAmount}</span>
              </button>
            </>
          ) : (
            <>
              {/* Payment Form */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Complete Your Donation</h3>
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">{donationTypes.find((t) => t.value === donationType)?.label}</span>
                    <span className="font-semibold text-gray-900">${selectedAmount}</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <p className="text-sm text-gray-600">Demo mode - Payment processing disabled</p>
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={() => setShowPayment(false)}
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  Back
                </button>
                <button
                  onClick={handlePaymentSuccess}
                  className="flex-1 bg-copper hover:bg-garnet text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  Complete Donation
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
