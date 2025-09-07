"use client";

import { useEffect, useState } from "react";

export default function StreamAccessNotice({ isVip }: { isVip: boolean }) { const [isLocked, setIsLocked] = useState(false);

useEffect(() => { // Le live est verrouillé uniquement si isVip === true if (isVip) setIsLocked(true); }, [isVip]);

if (!isLocked) return null;

return ( <div style={{ margin: "20px auto", maxWidth: 480, padding: "16px 20px", border: "1px solid rgba(212,175,55,0.35)", borderRadius: 16, background: "rgba(0,0,0,0.25)", color: "#f5f5f5", }} > <h3 style={{ margin: "0 0 12px 0", fontSize: 20, color: "#FFD700" }}> 🔐 Stream Locked </h3> <p style={{ margin: 0 }}> Your stream is locked by default.<br /> Viewers must send gifts to unlock it. </p> <p style={{ margin: "12px 0 0 0" }}> Upgrade to <strong>VIP</strong> or <strong>VIP Gold</strong> to offer exclusive access and earn faster. </p> </div> ); }

