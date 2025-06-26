import { NextResponse } from "next/server"

// Dynamically import Stripe only when needed and validate environment variables
async function getStripe() {
  if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error("STRIPE_SECRET_KEY environment variable is not set")
  }

  const { default: Stripe } = await import("stripe")
  return new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2023-10-16",
  })
}

export async function POST(request) {
  try {
    // Check if Stripe is configured
    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json(
        { error: "Payment processing is not configured. Please contact support." },
        { status: 500 },
      )
    }

    const { amount, currency = "usd", donationType = "general" } = await request.json()

    // Validate amount
    if (!amount || amount <= 0) {
      return NextResponse.json({ error: "Invalid donation amount" }, { status: 400 })
    }

    // Initialize Stripe
    const stripe = await getStripe()

    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Stripe expects amount in cents
      currency: currency,
      metadata: {
        donationType: donationType,
        organization: "HELPING HAND FOUNDATION",
      },
      automatic_payment_methods: {
        enabled: true,
      },
    })

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
    })
  } catch (error) {
    console.error("Error creating payment intent:", error)

    // Return user-friendly error message
    const errorMessage = error.message.includes("STRIPE_SECRET_KEY")
      ? "Payment processing is not configured. Please contact support."
      : "Unable to process payment. Please try again later."

    return NextResponse.json({ error: errorMessage }, { status: 500 })
  }
}

// Add a GET method to check if payment is configured
export async function GET() {
  const isConfigured = !!process.env.STRIPE_SECRET_KEY && !!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY

  return NextResponse.json({
    configured: isConfigured,
    message: isConfigured ? "Payment processing is available" : "Payment processing is not configured",
  })
}
