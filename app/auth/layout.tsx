import Image from "next/image";
import { ReactNode } from "react";
import Logo from "../ui/components/Logo";
import Link from "next/link";

export default function AuthLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <main className="grid grid-cols-1 lg:grid-cols-2 min-h-dvh overflow-hidden">
      <section className="overflow-clip max-h-dvh relative hidden lg:block">
        <Image
          src={"/drinkCoffee.gif"}
          alt="Drinking Coffee"
          width={600}
          height={600}
          unoptimized
          priority
          style={{
            height: "100%",
            minWidth: "100%",
            maxWidth: "100%",
          }}
          className="aspect-square object-cover"
        />
      </section>
      <section className="flex flex-col px-4 items-center max-h-dvh overflow-y-auto">
        <header className="grid place-items-center py-12 w-full sticky top-0 bg-primary">
          <Link href={"/"} className="rounded-full">
            <Logo size={80} />
          </Link>
          <h2 className="text-center leading-[1]">Welcome to Starbucks</h2>
        </header>
        <main className="flex flex-col w-[min(400px,100%-2rem)] gap-y-8">
          {children}
        </main>
      </section>
    </main>
  );
}
