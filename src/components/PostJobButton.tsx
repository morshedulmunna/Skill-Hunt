"use client";

import { accountType } from "@/constant";
import useUserInfo from "@/hooks/useUserInfo";
import Link from "next/link";
import React from "react";

type Props = {};

export default function PostJobButton({}: Props) {
  const { userInfo } = useUserInfo();

  return (
    <>
      {userInfo.id && userInfo.accountType === accountType.RECRUITER ? (
        <Link
          prefetch
          href={"/dashboard/job-post"}
          type="button"
          className="px-4 py-2 rounded bg-primary-base whitespace-nowrap  text-white  focus:outline-none "
        >
          Post a Jobs
        </Link>
      ) : (
        ""
      )}
    </>
  );
}
