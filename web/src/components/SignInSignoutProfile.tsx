"use client";

import useUserInfo from "@/hooks/useUserInfo";
import { clearLocalStorage, deleteAllCookies } from "@/utils";
import Link from "next/link";
import React from "react";

type Props = {};

export default function SignInSignoutProfile({}: Props) {
  const { userInfo } = useUserInfo();

  return (
    <div>
      {userInfo.id ? (
        <button
          onClick={() => {
            clearLocalStorage();
            deleteAllCookies();
            window.location.href = "/signin";
          }}
          type="button"
          className="px-4 py-2  rounded border border-gray-300 dark:border-gray-700 whitespace-nowrap  text-primary-base dark:text-gray-100 focus:outline-none "
        >
          Sign Out
        </button>
      ) : (
        <Link
          href={"/signin"}
          className="px-4 py-2 rounded border border-gray-300 dark:border-gray-700 whitespace-nowrap  text-primary-base dark:text-gray-100 focus:outline-none "
        >
          Sign in
        </Link>
      )}
    </div>
  );
}
