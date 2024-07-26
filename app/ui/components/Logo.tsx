import Image from "next/image";

export default function Logo({ size = 52 }) {
  return (
    <Image
      src={"/sblogo.svg"}
      alt="Starbucks Logo"
      width={size}
      height={size}
      quality={"100"}
      priority
    />
  );
}
