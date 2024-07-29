import AuthTogglers from "@/app/auth/_components/AuthTogglers";
import AppLinks from "./AppLinks";
import C_Navbar from "./C_Navbar";

export default function Navbar() {
  return (
    <C_Navbar className="children:flex children:items-center children:gap-3">
      <ul>
        <AppLinks />
      </ul>
      <ul>
        <AuthTogglers />
      </ul>
    </C_Navbar>
  );
}
