'use client';

interface GiftPlayerProps {
  name: string;      // nom du gift = nom du fichier (ex: lotus → lotus.webm)
  size?: number;     // taille en px
  loop?: boolean;    // boucle
  autoPlay?: boolean;// auto-play
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
  );
          }
