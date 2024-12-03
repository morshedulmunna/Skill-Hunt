import React from "react";
import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Logo from "./Logo";

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
              className="whitespace-nowrap hover:text-primary-lighter  transition-all ease-linear py-1 mx-2 w-full"
            >
              {each.label}
            </Link>
          ))}
          <Link
            href={"/login"}
            className="bg-primary-darkest/40 border border-primary-base/50 whitespace-nowrap hover:bg-primary/80 transition-all ease-linear px-6 py-2 rounded text-white"
          >
            Login
          </Link>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
