"use client";

import { accountType } from "@/constant";
import useUserInfo from "@/hooks/useUserInfo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {};

export default function DashboardButton({}: Props) {
  const { userInfo } = useUserInfo();
  const path = usePathname();
  return (
    <>
      {userInfo.id && userInfo.accountType === accountType.RECRUITER ? (
        <Link
          className={` ${
            path === "/dashboard" && "text-primary-base font-semibold"
          } whitespace-nowrap hidden lg:block font-medium dark:hover:text-primary-lighter hover:text-primary-dark  transition-all ease-linear py-1 mx-2 w-full`}
          href={"/dashboard"}
        >
          Dashboard
        </Link>
      ) : (
        ""
      )}
    </>
  );
}
