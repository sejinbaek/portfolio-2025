"use client";

import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function RouteMargin({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <div
      className={clsx(
        "mx-auto w-full max-w-screen-xl px-5 md:px-10 min-h-dvh",
        isHome ? "mb-20 mt-2" : "my-20 lg:my-40"
      )}
    >
      {children}
    </div>
  );
}
