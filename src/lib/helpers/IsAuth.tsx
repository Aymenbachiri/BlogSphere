"use client";

import MyLink from "@/components/reusable-components/MyLink";
import LogInIcon from "../svg/LoginIcon";
import { useAuth } from "@clerk/nextjs";

export default function IsAuth({ children }: { children: React.ReactNode }) {
  const { userId } = useAuth();

  if (!userId) {
    return (
      <MyLink
        href="/sign-in"
        className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2"
      >
        Sign In
        <LogInIcon />
      </MyLink>
    );
  }
  return <>{children}</>;
}
