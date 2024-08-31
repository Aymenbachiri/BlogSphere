import IsAuth from "@/lib/helpers/IsAuth";
import MobileNavbarLink from "./MobileNavbarLink";
import { NavLinks } from "./NavLinks";
import ThemeSwitch from "./ThemeSwitch";
import ProfileMenu from "./ProfileMenu";

export default function MobileNavbar() {
  return (
    <ul className="h-full w-full text-center pt-12">
      {NavLinks.map((link) => (
        <li key={link.label} className="text-2xl py-8">
          <MobileNavbarLink link={link} />
        </li>
      ))}
      <li className="md:hidden text-2xl py-8 flex justify-center items-center text-white">
        <IsAuth>
          <ProfileMenu />
        </IsAuth>
      </li>
      <li className="md:hidden text-2xl py-8 flex justify-center items-center hover:cursor-pointer">
        <ThemeSwitch />
      </li>
    </ul>
  );
}
