import { Suspense } from "react";
import PageLoadingSpinner from "./PageLoadingSpinner";

export default function MySuspense({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Suspense fallback={<PageLoadingSpinner />}>{children}</Suspense>;
}
