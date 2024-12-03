import Navbar from "@/components/shared/Navbar";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <>{children}</>
    </>
  );
}
