import Stripe from 'stripe'
import { NextResponse } from 'next/server'

// Solution propre : on force les types attendus avec l’interface officielle
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-08-16',
} satisfies Stripe.StripeConfig)

export async function POST(req: Request) {
  try {
    const { subscriptionId } = await req.json()

    if (!subscriptionId) {
      return NextResponse.json({ error: 'Missing subscription ID' }, { status: 400 })
    }

    const deleted = await stripe.subscriptions.cancel(subscriptionId)

    return NextResponse.json({ success: true, subscription: deleted })
  } catch (error: any) {
    console.error('❌ Cancel error:', error.message)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
