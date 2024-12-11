"use client";

import React from "react";
import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Logo from "./Logo";
import ThemeToggler from "../ThemeToggler";
import PostJobButton from "../PostJobButton";
import SignInSignoutProfile from "../SignInSignoutProfile";
import DashboardButton from "../DashboardButton";
import { Menu } from "lucide-react";
import ToggleMobileMenu from "../ToggleMobileMenu";
import { usePathname } from "next/navigation";

interface NavItem {
  label: string;
  href: string;
}

export default function Navbar(): JSX.Element {
  const path = usePathname();
  const navItems: NavItem[] = [
    {
      label: "Find a Job",
      href: "/job-search",
    },
    {
      label: "About",
      href: "/about",
    },
  ];

  return (
    <MaxWidthWrapper className="w-full">
      <div className="flex  justify-between items-center py-4">
        <Logo />
        <div className="flex justify-between items-center gap-x-12">
          {navItems.map((each) => (
            <Link
              prefetch
              key={each.href}
              href={each.href}
              className={` ${
                path === each.href &&
                "text-primary-base dark:text-primary-lightest font-semibold"
              } whitespace-nowrap hidden dark:text-gray-400 lg:block font-medium dark:hover:text-primary-lighter hover:text-primary-dark  transition-all ease-linear py-1 mx-2 w-full`}
            >
              {each.label}
            </Link>
          ))}

          <DashboardButton />

          <div className="hidden lg:block">
            <div className="flex gap-6 items-center justify-end">
              <SignInSignoutProfile />
              <PostJobButton />
            </div>
          </div>
          <ThemeToggler />
          <ToggleMobileMenu className={"lg:hidden "} />
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
