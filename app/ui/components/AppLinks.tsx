"use client";

import { app_paths } from "@/app/contents/links";
import { capitalize } from "@/app/lib/utils";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Logo from "./Logo";

export default function AppLinks() {
  const pathname = usePathname();
  return app_paths.map((link) => (
    <li key={link.title}>
      <Link
        href={link.path}
        className={clsx(
          "px-3 py-1 inline-flex justify-center items-center transition-all ease-in-out duration-fast font-semibold",
          {
            "mr-2 ": link.title === "home",
            "text-brand": link.title !== "home" && pathname === link.path,
          }
        )}
      >
        {link.title !== "home" ? capitalize(link.title) : <Logo />}
      </Link>
    </li>
  ));
}
