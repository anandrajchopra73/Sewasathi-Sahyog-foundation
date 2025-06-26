"use client"

import { useState } from "react"
import { useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js"
import { ArrowLeft, Loader2 } from "lucide-react"

export default function CheckoutForm({ amount, donationType, onSuccess, onBack }) {
  const stripe = useStripe()
  const elements = useElements()
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!stripe || !elements) {
      return
    }

    setIsLoading(true)
    setErrorMessage("")

    try {
      // Create payment intent
      const response = await fetch("/api/create-payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: amount,
          donationType: donationType,
        }),
      })

      const { clientSecret, error } = await response.json()

      if (error) {
        setErrorMessage(error)
        setIsLoading(false)
        return
      }

      // Confirm payment
      const { error: confirmError } = await stripe.confirmPayment({
        elements,
        clientSecret,
        confirmParams: {
          return_url: `${window.location.origin}/donation-success`,
        },
        redirect: "if_required",
      })

      if (confirmError) {
        setErrorMessage(confirmError.message)
      } else {
        onSuccess()
      }
    } catch (error) {
      setErrorMessage("An unexpected error occurred.")
    }

    setIsLoading(false)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <PaymentElement />

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
          <ArrowLeft size={18} />
          <span>Back</span>
        </button>

        <button
          type="submit"
          disabled={!stripe || isLoading}
          className="flex-1 bg-copper hover:bg-garnet disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
        >
          {isLoading ? (
            <>
              <Loader2 className="animate-spin" size={18} />
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
