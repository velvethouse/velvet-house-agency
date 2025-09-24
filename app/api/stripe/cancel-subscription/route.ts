import { NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  // ✅ Corrige l'erreur de typage
  apiVersion: '2023-08-16' as const,
})

export async function POST(req: Request) {
  try {
    const { subscriptionId } = await req.json()

    if (!subscriptionId) {
      return NextResponse.json({ error: 'Missing subscription ID' }, { status: 400 })
    }

    const deleted = await stripe.subscriptions.cancel(subscriptionId)

    return NextResponse.json({ success: true, deleted })
  } catch (err: any) {
    console.error('❌ Stripe cancel error:', err.message)
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
