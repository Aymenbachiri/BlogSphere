"use client";

import { UserProfile } from "@clerk/nextjs";

const DotIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      fill="currentColor"
    >
      <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
    </svg>
  );
};

const UserProfilePage = () => (
  <main className="flex justify-center items-center mt-[10%]">
    <UserProfile path="/user-profile" routing="path">
      <UserProfile.Link label="Homepage" labelIcon={<DotIcon />} url="/" />
    </UserProfile>
  </main>
);

export default UserProfilePage;
