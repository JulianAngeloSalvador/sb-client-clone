"use client";

import clsx from "clsx";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function C_Navbar({
  children,
  className,
}: Readonly<{ children: ReactNode; className?: string }>) {
  const pathname = usePathname();

  const atAuth = pathname.includes("/auth");

  return (
    <nav
      className={clsx(
        `fixed top-0 left-0 w-full py-4 px-8 items-center justify-between ${className}`,
        {
          hidden: atAuth,
          flex: !atAuth,
        }
      )}
    >
      {children}
    </nav>
  );
}
