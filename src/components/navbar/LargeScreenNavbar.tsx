import MyLink from "../reusable-components/MyLink";
import { NavLinks } from "./NavLinks";
import ProfileMenu from "./ProfileMenu";
import ThemeSwitch from "./ThemeSwitch";
import MobileNavBtn from "./MobileNavBtn";
import IsAuth from "@/lib/helpers/IsAuth";

export default function LargeScreenNavbar() {
  return (
    <nav className="max-w-screen-xl min-h-[50px] flex flex-wrap items-center justify-between mx-auto z-10">
      <MyLink href="/">
        <span>logo</span>
      </MyLink>
      <ul className="hidden md:flex justify-between gap-x-8 items-center px-4">
        {NavLinks.map((link) => (
          <li key={link.href}>
            <MyLink
              className="py-1 hover:border-b hover:border-b-black dark:hover:border-b-gray-300"
              href={link.href}
            >
              {link.label}
            </MyLink>
          </li>
        ))}
        <IsAuth>
          <ProfileMenu />
        </IsAuth>
      </ul>
      <section className="hidden md:flex justify-between items-center gap-x-3 hover:cursor-pointer">
        <ThemeSwitch />
      </section>

      {/* Hamburger Icon */}
      <MobileNavBtn />
    </nav>
  );
}
