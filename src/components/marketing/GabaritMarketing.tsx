import type { ReactNode } from "react";

import { FondSillage } from "@/components/sillage/FondSillage";

export function GabaritMarketing({
  children,
  variante = "marketing",
}: {
  children: ReactNode;
  variante?: "marketing" | "discret";
}) {
  return (
    <div className="relative min-h-dvh text-foreground">
      <FondSillage variante={variante} />
      {children}
    </div>
  );
}