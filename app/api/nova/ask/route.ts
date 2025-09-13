import { OpenAI } from 'openai'
import { NextRequest, NextResponse } from 'next/server'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(req: NextRequest) {
  const body = await req.json()
  const message = body?.message || ''

  if (!message) {
    return NextResponse.json({ error: 'Missing message' }, { status: 400 })
  }

  const chat = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages: [
      {
        role: 'system',
        content: `Tu es Nova, l'assistante virtuelle officielle de Velvet House. Tu aides les streameuses et les visiteurs en parlant de façon professionnelle, douce, claire et efficace. Tu ne donnes jamais de lien externe. Tu ne parles jamais de politique, religion ou sujets sensibles. Tu réponds dans la langue détectée de l’utilisateur.`,
      },
      {
        role: 'user',
        content: message,
      },
    ],
    temperature: 0.7,
    max_tokens: 500,
  })

  return NextResponse.json({
    reply: chat.choices[0].message.content,
  })
}
