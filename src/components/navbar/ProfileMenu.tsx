import ArrowIcon from "@/lib/svg/ArrowIcon";
import MyLink from "../reusable-components/MyLink";
import { profileList } from "./ProfileMenuList";
import { SignOutButton } from "@clerk/nextjs";
import LogoutIcon from "@/lib/svg/LogoutIcon";

export default function ProfileMenu() {
  return (
    <main className="relative inline-block text-left">
      <div className="group">
        <button
          type="button"
          className="inline-flex justify-center items-center w-full px-4 py-2 text-sm font-medium text-gray-900 bg-gray-200 dark:text-white dark:bg-gray-800 rounded-md hover:bg-gray-300 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 dark:focus:ring-offset-gray-900"
        >
          Profile
          <ArrowIcon />
        </button>
        <section className="absolute left-0 w-48 -mt-1 origin-top-left bg-white dark:bg-gray-800 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300 z-10">
          <nav className="py-1">
            {profileList.map((item, index) => (
              <MyLink
                key={index}
                href={item.href}
                className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {item.icon}
                {item.label}
              </MyLink>
            ))}
          </nav>
          <SignOutButton>
            <button className="w-full flex items-center gap-2 px-4 py-1 text-sm text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700">
              <LogoutIcon />
              Sign Out
            </button>
          </SignOutButton>
        </section>
      </div>
    </main>
  );
}
