import GiftOverlay from './components/GiftOverlay'

export default function LivePage() {
  const currentGift = 'champagne' // à remplacer par la gift dynamique

  return (
    <div>
      {/* ... stream video ... */}
      <GiftOverlay name={currentGift} />
    </div>
  )
}
