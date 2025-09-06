// app/vip/page.tsx
"use client";

import { Suspense } from "react";
import VipContent from "./VipContent";

export default function VipPage() {
  return (
    <Suspense fallback={<div style={{ padding: 32 }}>Loading…</div>}>
      <VipContent />
    </Suspense>
  );
}
