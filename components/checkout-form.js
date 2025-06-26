"use client"

import { useState } from "react"

export default function CheckoutForm({ amount, donationType, onSuccess, onBack }) {
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsLoading(true)
    setErrorMessage("")

    try {
      // Simulate payment processing
      await new Promise((resolve) => setTimeout(resolve, 2000))
      onSuccess()
    } catch (error) {
      setErrorMessage("An unexpected error occurred.")
    }

    setIsLoading(false)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-gray-50 p-4 rounded-lg">
        <p className="text-sm text-gray-600">Payment processing is currently in demo mode.</p>
      </div>

      {errorMessage && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-600 text-sm">{errorMessage}</p>
        </div>
      )}

      <div className="flex space-x-4">
        <button
          type="button"
          onClick={onBack}
          className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
        >
          <span>←</span>
          <span>Back</span>
        </button>

        <button
          type="submit"
          disabled={isLoading}
          className="flex-1 bg-copper hover:bg-garnet disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
        >
          {isLoading ? (
            <>
              <span className="animate-spin">⏳</span>
              <span>Processing...</span>
            </>
          ) : (
            <span>Donate ${amount}</span>
          )}
        </button>
      </div>

      <div className="text-xs text-gray-500 text-center">
        Your payment is secured by Stripe. We never store your payment information.
      </div>
    </form>
  )
}
