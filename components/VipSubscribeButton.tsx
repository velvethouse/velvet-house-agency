'use client'

export default function VipSubscribeButton() {
  const handleSubscribe = async () => {
    const res = await fetch('/api/stripe/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: 'vip' }), // ou 'vip-gold'
    })

    const data = await res.json()
    if (data.url) {
      window.location.href = data.url
    } else {
      alert('Erreur lors de la redirection vers Stripe.')
    }
  }

  return (
    <button
      onClick={handleSubscribe}
      className="btn3d btn3d--gold"
      style={{ padding: '10px 20px', fontWeight: 600 }}
    >
      💳 Subscribe VIP (9.99€/month)
    </button>
  )
}
