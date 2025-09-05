// ...dans le return, à la place de <img ... />
const isVideo = (p?: string) => !!p && (p.endsWith(".webm") || p.endsWith(".mp4"));

return (
  <div style={{ pointerEvents:"none", position:"fixed", inset:0, zIndex:60, display:"grid", placeItems:"center" }}>
    <div style={{ width:"min(92vw,720px)", aspectRatio:"16/9", background:"rgba(0,0,0,.35)", borderRadius:16, overflow:"hidden" }}>
      {isVideo(current.src) ? (
        <video
          src={current.src}
          autoPlay
          loop
          muted
          playsInline
          style={{ width:"100%", height:"100%", objectFit:"contain" }}
        />
      ) : (
        <img
          src={current.src}
          alt={current.name}
          style={{ width:"100%", height:"100%", objectFit:"contain" }}
        />
      )}
    </div>
  </div>
);
