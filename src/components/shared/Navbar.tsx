import React from "react";
import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Logo from "./Logo";
import ThemeToggler from "../ThemeToggler";

interface NavItem {
  label: string;
  href: string;
}

export default function Navbar(): JSX.Element {
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
              className="whitespace-nowrap hidden lg:block font-medium dark:hover:text-primary-lighter hover:text-primary-dark  transition-all ease-linear py-1 mx-2 w-full"
            >
              {each.label}
            </Link>
          ))}
          <div className="hidden lg:block">
            <div className="flex gap-6 items-center justify-end">
              <Link
                href={"/signin"}
                className="px-4 py-2 rounded border border-gray-300 dark:border-gray-700 whitespace-nowrap  text-primary-base dark:text-gray-100 focus:outline-none "
              >
                Sign in
              </Link>
              <button
                type="button"
                className="px-4 py-2 rounded bg-primary-base whitespace-nowrap  text-white  focus:outline-none "
              >
                Post a Jobs
              </button>
              <ThemeToggler />
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
