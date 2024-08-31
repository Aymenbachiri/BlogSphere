import LargeScreenNavbar from "./LargeScreenNavbar";
import MobileNavbarHolder from "./MobileNavbarHolder";
import MobileNavbar from "./MobileNavbar";
import { NavbarProvider } from "@/lib/providers/NavbarProvider";
import NavbarHolder from "./NavbarHolder";

export default function Navbar() {
  return (
    <NavbarProvider>
      <NavbarHolder>
        {/* Large Screen Menu */}
        <LargeScreenNavbar />

        {/* Mobile Menu */}
        <MobileNavbarHolder>
          <MobileNavbar />
        </MobileNavbarHolder>
      </NavbarHolder>
    </NavbarProvider>
  );
}
