import { loadStripe } from "@stripe/stripe-js"

let stripePromise

const getStripe = () => {
  if (!stripePromise) {
    const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY

    if (!publishableKey) {
      console.warn("Stripe publishable key not found. Payment functionality will be disabled.")
      return null
    }

    stripePromise = loadStripe(publishableKey)
  }
  return stripePromise
}

export default getStripe
