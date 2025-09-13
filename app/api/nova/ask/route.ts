import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { message } = await req.json()

  const apiKey = process.env.OPENAI_API_KEY
  if (!apiKey) {
    return NextResponse.json({ error: 'Missing OpenAI API key.' }, { status: 500 })
  }

  const body = {
    model: 'gpt-4o',
    messages: [
      {
        role: 'system',
        content: `You are Nova, the assistant of Velvet House. You speak to creators and donors in a kind, respectful, and clear tone. Keep responses concise, helpful, and supportive.`,
      },
      {
        role: 'user',
        content: message,
      },
    ],
    temperature: 0.7,
  }

  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })

  const data = await res.json()

  if (data.choices && data.choices.length > 0) {
    return NextResponse.json({ reply: data.choices[0].message.content })
  } else {
    return NextResponse.json({ reply: 'Sorry, I had trouble responding. Please try again later.' })
  }
}
