import { auth_paths } from "@/app/contents/links";
import clsx from "clsx";
import Link from "next/link";

export default function AuthTogglers() {
  return auth_paths.map((link) => (
    <li key={link.authType}>
      <Link
        href={link.path}
        className={clsx(
          "px-5 py-2 font-bold outline outline-2 rounded-full text-small",
          {
            "bg-secondary text-primary outline-primary":
              link.authType === "SIGNIN",
          }
        )}
      >
        {link.title}
      </Link>
    </li>
  ));
}
