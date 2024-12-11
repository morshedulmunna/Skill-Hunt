import DashboardSidebar from "@/components/DashboardSidebar";
import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import React from "react";

type Props = {
  children: React.ReactNode;
};
// ---
export default function DashboardLayout({ children }: Props) {
  return (
    <>
      <MaxWidthWrapper className="w-full h-full">
        <div className="grid gap-4 grid-cols-12 h-full">
          <div className="border-r dark:border-gray-800 col-span-3 h-full">
            <DashboardSidebar />
          </div>
          <div className="col-span-9 p-4 h-full">{children}</div>
        </div>
      </MaxWidthWrapper>
    </>
  );
}
