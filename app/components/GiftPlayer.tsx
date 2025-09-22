'use client'

interface GiftPlayerProps {
  name: string        // nom du gift = nom du fichier .webm
  size?: number       // taille du player en pixels
  loop?: boolean      // boucle (par défaut : true)
  autoPlay?: boolean  // auto-play (par défaut : true)
}

export default function GiftPlayer({
  name,
  size = 200,
  loop = true,
  autoPlay = true,
}: GiftPlayerProps) {
  return (
    <div className="flex items-center justify-center">
      <video
        key={name} // important : relance l’animation si le gift change
        src={`/gifts/${name}.webm`}
        autoPlay={autoPlay}
        loop={loop}
        muted
        playsInline
        style={{
          width: size,
          height: size,
          objectFit: 'contain',
          background: 'transparent',
        }}
      />
    </div>
  )
}
