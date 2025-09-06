// app/vip/page.tsx
import { Suspense } from "react";
import VipContent from "./VipContent";

export default function VipPage() {
  return (
    <Suspense fallback={<div style={{ padding: 32 }}>Loading VIP page...</div>}>
      <VipContent />
    </Suspense>
  );
}
