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
      href: "/find-jobs",
    },
    {
      label: "About",
      href: "/about",
    },
  ];

  return (
    <MaxWidthWrapper>
      <div className="flex justify-between items-center py-4">
        <Logo />
        <div className="flex justify-between items-center gap-x-12">
          {navItems.map((each) => (
            <Link
              key={each.href} // Using `href` as the unique key
              href={each.href}
              className="whitespace-nowrap hidden lg:block font-medium dark:hover:text-primary-lighter hover:text-primary-dark  transition-all ease-linear py-1 mx-2 w-full"
            >
              {each.label}
            </Link>
          ))}
          <Link
            href={"/login"}
            className="px-4 py-2 rounded-lg bg-gray-200  dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none "
          >
            Login
          </Link>

          <ThemeToggler />
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
