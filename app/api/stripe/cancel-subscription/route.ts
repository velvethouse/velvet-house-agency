import Stripe from 'stripe'
import { NextResponse } from 'next/server'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-08-16',
})

export async function POST() {
  const subscriptionId = 'sub_xxx' // À récupérer de ta BDD

  try {
    await stripe.subscriptions.cancel(subscriptionId)
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Stripe cancel error', err)
    return new NextResponse('Failed to cancel', { status: 500 })
  }
}
