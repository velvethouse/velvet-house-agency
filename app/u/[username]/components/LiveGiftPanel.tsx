'use client'

import React from 'react'
import SendGiftLive from '@/components/gifts/SendGiftLive'
import SendGiftOverlay from '@/components/gifts/SendGiftOverlay'
import LiveGiftPanel from '@/components/gifts/LiveGiftPanel'

const LiveGiftPanelWrapper: React.FC = () => {
  return (
    <>
      <SendGiftOverlay />
      <div style={{ padding: 12 }}>
        <h3 style={{ color: '#fff', marginBottom: 12, fontSize: 16, fontWeight: 600 }}>
          🎁 Send a Gift
        </h3>
        <SendGiftLive />
        <div style={{ marginTop: 24 }}>
          <LiveGiftPanel />
        </div>
      </div>
    </>
  )
}

export default LiveGiftPanelWrapper
