"use client";

import React from "react";
import Pagination from "./shared/Pagination";
import { useRouter, useSearchParams } from "next/navigation";

type Props = {
  totalCount: number;
};

export default function JobSearchPagination({ totalCount }: Props) {
  const searchParams = useSearchParams();

  const page = Number(searchParams.get("page"));
  const router = useRouter();
  return (
    <div>
      <Pagination
        numberOfData={totalCount}
        limits={5}
        activePage={page || 1}
        getCurrentPage={(page: any) => {
          const url = new URL(window.location.href) as any;
          url.searchParams.set("page", page.toString());
          router.push(url);
        }}
        className="float-right"
      />
    </div>
  );
}
