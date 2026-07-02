import type { ReactNode } from "react";

export function Container({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-[1120px] px-6 md:px-8 lg:px-12">
      {children}
    </div>
  );
}
