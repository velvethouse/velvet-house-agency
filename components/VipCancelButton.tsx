'use client'

import { useUserStore } from '@/stores/userStore'

export default function VipCancelButton() {
  const { vipStatus, setVipStatus } = useUserStore()

  if (vipStatus === 'none') return null

  const handleCancel = async () => {
    const confirmed = confirm('Are you sure you want to stop your VIP subscription?')
    if (!confirmed) return

    const res = await fetch('/api/stripe/cancel-subscription', {
      method: 'POST',
    })

    if (res.ok) {
      setVipStatus('none')
      alert('Your VIP status has been canceled.')
    } else {
      alert('Failed to cancel VIP. Please try again.')
    }
  }

  return (
    <button
      onClick={handleCancel}
      style={{
        marginTop: 20,
        background: '#2e0d0d',
        color: '#FFD700',
        padding: '10px 20px',
        border: '1px solid #FFD700',
        borderRadius: 10,
        fontWeight: 600,
      }}
    >
      ❌ Stop VIP
    </button>
  )
}
