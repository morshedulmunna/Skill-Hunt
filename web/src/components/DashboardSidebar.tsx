"use client";

import { Target, Tickets } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {};

const sideBarNavigationDat = [
  {
    name: "Dashboard",
    link: "/dashboard",
    icon: <Tickets />,
  },
  {
    name: "Jobs post",
    link: "/dashboard/job-post",
    icon: <Target />,
  },
];

export default function DashboardSidebar({}: Props) {
  const path = usePathname();
  return (
    <div className="p-4">
      {sideBarNavigationDat.map(({ name, link, icon }) => (
        <div
          key={name}
          className="flex items-center  mb-4 py-2 px-2 w-full rounded gap-4"
        >
          <Link
            href={link}
            className={` ${
              path === link &&
              "text-primary-light dark:text-primary-light font-bold"
            } text-sm flex items-center gap-4   dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200`}
          >
            {icon}
            <span className="hidden md:block">{name}</span>
          </Link>
        </div>
      ))}
    </div>
  );
}
