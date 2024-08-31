"use client";

import { useNavbar } from "@/lib/providers/NavbarProvider";
import MyLink from "../reusable-components/MyLink";
import type { MobileNavbarLinkProps } from "@/lib/types/types";

export default function MobileNavbarLink({ link }: MobileNavbarLinkProps) {
  const { handleNav } = useNavbar();

  return (
    <MyLink
      className="hover:border-b py-2"
      href={link.href}
      onClick={handleNav}
    >
      {link.label}
    </MyLink>
  );
}
