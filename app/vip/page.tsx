import { Suspense } from "react";
import VipClient from "./VipClient";

export default function Page() {
  // Met simplement le composant client dans un Suspense
  return (
    <Suspense fallback={<div />}>
      <VipClient />
    </Suspense>
  );
}
