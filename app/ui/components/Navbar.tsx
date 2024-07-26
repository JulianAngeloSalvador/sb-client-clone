import AppLinks from "./AppLinks";
import C_Navbar from "./C_Navbar";

export default function Navbar() {
  return (
    <C_Navbar>
      <ul className="flex items-center gap-3">
        <AppLinks />
      </ul>
    </C_Navbar>
  );
}
