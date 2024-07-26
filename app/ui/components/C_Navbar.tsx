"use client";

import clsx from "clsx";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect } from "react";

export default function C_Navbar({
  children,
}: Readonly<{ children: ReactNode }>) {
  const pathname = usePathname();

  const atAuth = pathname.includes("/auth");

  return (
    <nav
      className={clsx("fixed top-0 left-0 w-full py-6 px-8", {
        "-translate-y-full": atAuth,
        "translate-y-0": !atAuth,
      })}
    >
      {children}
    </nav>
  );
}
