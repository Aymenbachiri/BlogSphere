import DashboardIcon from "@/lib/svg/DashboardIcon";
import PlusIcon from "@/lib/svg/PlusIcon";
import SettingsIcon from "@/lib/svg/SettingsIcon";

export const profileList = [
  { label: "Dashboard", icon: <DashboardIcon />, href: "/dashboard" },
  { label: "Settings", icon: <SettingsIcon />, href: "/user-profile" },
  { label: "Add Post", icon: <PlusIcon />, href: "/addPost" },
];
