import Stripe from 'stripe'
import { NextResponse } from 'next/server'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-08-16',
} satisfies Stripe.StripeConfig)

export async function POST(req: Request) {
  try {
    const { priceId, userId, mode } = await req.json()

    if (!priceId || !userId || !mode) {
      return NextResponse.json({ error: 'Missing params' }, { status: 400 })
    }

    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      customer_email: `${userId}@velvethouse.local`, // ou Stripe Customer ID réel si disponible
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/vip?success=true`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/vip?canceled=true`,
    })

    return NextResponse.json({ sessionUrl: session.url })
  } catch (error: any) {
    console.error('❌ Stripe session error:', error.message)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
