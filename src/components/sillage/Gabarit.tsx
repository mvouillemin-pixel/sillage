import type { ReactNode } from "react";

import { FondSillage } from "@/components/sillage/FondSillage";

export function Gabarit({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-dvh text-foreground">
      <FondSillage variante="app" />
      {children}
    </div>
  );
}