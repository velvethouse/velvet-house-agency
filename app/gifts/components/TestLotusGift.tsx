'use client'

export default function TestLotusGift() {
  return (
    <div className="p-4">
      <video
        src="/gifts/lotus.webm"
        autoPlay
        muted
        loop
        playsInline
        className="w-48 rounded-xl shadow-md"
      />
      <p className="text-xs text-center mt-2 text-gray-400">Lotus Gift (3s)</p>
    </div>
  )
}
