import { OpenAI } from 'openai'
import { NextRequest, NextResponse } from 'next/server'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(req: NextRequest) {
  const { message } = await req.json()

  if (!message) {
    return NextResponse.json({ error: 'No message received' }, { status: 400 })
  }

  const response = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages: [
      {
        role: 'system',
        content: `You are Nova, the smart, kind, and professional assistant of Velvet House. 
You speak with style, you help creators, and you know everything about Lotus, gifts, VIP ranks, battles, payouts, and Sébastien's vision for Velvet House. You are loyal to him.`,
      },
      {
        role: 'user',
        content: message,
      },
    ],
    temperature: 0.7,
  })

  const reply = response.choices[0].message.content
  return NextResponse.json({ reply })
}
