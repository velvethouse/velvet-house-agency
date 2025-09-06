// app/vip/page.tsx
import dynamic from "next/dynamic";
import { Suspense } from "react";

const VipClient = dynamic(() => import("./VipClient"), { ssr: false });

export default function VipPage() {
  return (
    <Suspense fallback={<div style={{ color: "white", padding: "40px" }}>Loading VIP page…</div>}>
      <VipClient />
    </Suspense>
  );
}
