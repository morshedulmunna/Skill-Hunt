"use client";

import { clearLocalStorage, deleteAllCookies } from "@/utils";
import {
  ArrowLeftFromLine,
  House,
  LogOut,
  Menu,
  PackageSearch,
  ScanQrCode,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

type Props = {
  className?: string;
};

export default function ToggleMobileMenu({ className }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const path = usePathname();

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={` w-full ${className}`}>
      {/* Menu Icon */}
      <Menu
        className="cursor-pointer text-gray-800 dark:text-white"
        onClick={handleToggle}
        size={28}
      />

      {/* Mobile Menu */}
      <div
        className={`absolute top-16 flex justify-between flex-col right-0 w-full md:w-1/3 p-2 h-[50vh] md:h-[50vh] bg-white dark:bg-background dark:border-gray-800 shadow border  transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>
          <div className="flex justify-start items-center gap-6">
            <ArrowLeftFromLine
              className="rotate-180"
              onClick={() => setIsOpen(false)}
            />
            <p className="font-semibold">Navigator</p>
          </div>

          <div className="w-full h-[1px] mt-4  bg-primary-base/20 animate-pulse"></div>
          <div className="w-full h-[1px] mb-4 mt-1 bg-primary-base/20 animate-pulse"></div>

          <div className="w-full">
            {[
              {
                label: "Home",
                href: "/",
                icons: <House />,
              },
              {
                label: "Find Jobs",
                href: "/job-search",
                icons: <PackageSearch />,
              },
              {
                label: "About us",
                href: "/about",
                icons: <ScanQrCode />,
              },
            ].map((each: any, index: number) => (
              <Link
                onClick={() => setIsOpen(false)}
                href={each.href}
                key={index}
                className={`flex w-full  mb-2 text-sm font-semibold  rounded-lg hover:bg-primary-light/20 py-2 px-4 items-center gap-6 ${
                  path === each.href && "bg-primary-light/30 animate-pulse"
                } `}
              >
                {each.icons}
                <p>{each.label}</p>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex w-full justify-center items-center">
          <div
            onClick={() => {
              clearLocalStorage();
              deleteAllCookies();
              window.location.href = "/signin";
            }}
            className=" flex justify-center gap-2 px-6  rounded-md border w-fit items-center text-red-500  font-semibold py-2"
          >
            <LogOut className="animate-pulse" />
            <p> Sign out</p>
          </div>
        </div>
      </div>
    </div>
  );
}
