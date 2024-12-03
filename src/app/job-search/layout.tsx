import Navbar from "@/components/shared/Navbar";
import React, { Suspense } from "react";

type Props = {
  children: React.ReactNode;
};
function SearchBarFallback() {
  return <>placeholder</>;
}

export default function Layout({ children }: Props) {
  return <Suspense fallback={<SearchBarFallback />}>{children}</Suspense>;
}
