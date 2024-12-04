import Navbar from "@/components/shared/Navbar";
import JobCardSkeleton from "@/components/skeleton/JobCardSkeleton";
import React, { Suspense } from "react";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return <Suspense fallback={<JobCardSkeleton />}>{children}</Suspense>;
}
